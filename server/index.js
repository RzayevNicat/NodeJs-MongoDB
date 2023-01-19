const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
const PORT = 3000

let idCounter = 5

let products = [
    {
        id: 1,
        src: 'https://saglamolun.az/images/stories/Maraqlixeber/kolbasa_nitrit.jpg',
        productName: 'Kolbasa',
        price: '20$',
        count: 10
    },
    {
        id: 2,
        src: 'https://bazarstore.az/16170-large_default/sems-sosis-kq.jpg',
        productName: 'Sosiska',
        price: '10$',
        count: 6
    },
    {
        id: 3,
        src: 'https://d3i7mz61kz7ozx.cloudfront.net/prod/uploads/image/file/extra_large_b937eea642_1526974944.jpg',
        productName: 'Pendir',
        price: '15$',
        count: 7
    },
    {
        id: 4,
        src: 'https://tereyagi.gen.tr/images/tereyagi-kac-kalori.jpg',
        productName: 'Yag',
        price: '20$',
        count: 30
    },
    {
        id: 5,
        src: 'https://yuz.uz/imageproxy/1200x/https://yuz.uz/file/news/6386427e42cd8f7709bc39255247d705.jpg',
        productName: 'Shokolad',
        price: '20$',
        count: 10
    },
    {
        id: 6,
        src: 'https://i.ytimg.com/vi/xXA9jlMQZpM/maxresdefault.jpg',
        productName: 'Shor',
        price: '2$',
        count: 30
    }
]

app.use(cors())
app.use(bodyParser.json())
app.get("/", (req, res) => {
    res.send("<h1>My dataa</h1>")
})
app.get("/products", (req, res) => {
    res.send(products)
})

app.get("/products/:id", (req, res) => {
    const id = req.params.id
    selectProduct = products.find(x => x.id == id)
    if (selectProduct) {
        res.send(selectProduct)
        res.status(200).json({ message: 'Ok' })
    }
    else {
        res.status(404).json({ message: 'Not Found' })
    }
})
app.delete("/products/:id", (req, res) => {
    const id = req.params.id
    products = products.filter(x => x.id != id)
    res.send(products)
    res.status(200).json({ message: 'Ok' })
})

app.post("/products", (req, res) => {
    let productss = {
        id: idCounter++,
        productName: req.body.productName,
        price: req.body.price,
        count: req.body.count,
        src: req.body.src
    }
    products.push(productss)
    res.send(products)
})

app.put("/products/:id", (req, res) => {
    const id = req.params.id

    products = products.filter(x => x.id != id)

    let update = {
        id: id,
        productName: req.body.productName,
        price: req.body.price,
        count: req.body.count,
        src: req.body.src
    }
    products.push(update)
    products.sort((a, b) => a.id - b.id)
    res.send(products)
})
app.listen(PORT, () => {
    console.log('Server Loading');
})