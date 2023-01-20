const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();

dotenv.config();

const { Schema } = mongoose;

const productSchema = new Schema(
	{
		productName: { type: String, required: true },
		price: { type: String, required: true },
		count: { type: Number, required: true },
		src: { type: String, required: true }
	},
	{ timestamps: true }
);

const Products = mongoose.model('products', productSchema);

app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
	res.send('<h1>My dataa</h1>');
});
app.get('/products', (req, res) => {
	Products.find({}, (err, docs) => {
		if (!err) {
			res.send(docs);
		} else {
			res.status(404).json({ message: err });
		}
	});
});

app.get('/products/:id', (req, res) => {
	const { id } = req.params;
	Products.findById(id, (err, doc) => {
		if (!err) {
			if (doc) {
				res.send(doc);
			} else {
				res.status(404).json({ message: 'NOT FOUND' });
			}
		} else {
			res.status(404).json({ message: err });
		}
	});
});
app.delete('/products/:id', (req, res) => {
	const { id } = req.params;
	Products.findByIdAndDelete(id, (err) => {
		if (!err) {
			res.status(200);
		} else {
			res.status(404).json({ message: err });
		}
	});
});

app.post('/products', (req, res) => {
	const product = new Products({
		productName: req.body.productName,
		price: req.body.price,
		count: req.body.count,
		src: req.body.src
	});
	product.save();
	res.status(200);
});

app.put('/products/:id', (req, res) => {
	const { id } = req.params;

	Products.findByIdAndUpdate(id, req.body, (err, doc) => {
		if (!err) {
			res.status(200);
		} else {
			res.status(404).json({ message: err });
		}
	});
	res.status(200);
});

const PORT = process.env.PORT;
const url = process.env.CONNECTION_URL;
mongoose.set('strictQuery', true);
mongoose.connect(url, (err) => {
	if (!err) {
		console.log('DB connect');
		app.listen(PORT, () => {
			console.log('Server start');
		});
	}
});
