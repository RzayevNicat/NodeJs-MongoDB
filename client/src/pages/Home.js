import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useDetails } from '../context/Contextt';

function Home() {
	const { details } = useDetails();
	const [ data, setData ] = useState([]);
	const datas = Object.values(data);
	console.log(datas);
	useEffect(() => {
		axios.get('http://localhost:3000/products').then((res) => setData(res.data));
	}, []);
	const handleDelete = (id) => {
		axios.delete(`http://localhost:3000/products/${id}`);
		const copy = data.filter((x) => x._id !== id);
		setData(copy);
	};

	function search(items) {
		return items.filter((item) => item.productName.toLowerCase().indexOf(details.toLowerCase()) > -1);
	}
	return (
		<div>
			<header>
				<h1>Notary Public & Legal Solutions</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat
					necessitatibus a aliquam corrupti nisi odio aliquid, accusamus.
				</p>
			</header>
			<section className="cards">
				<h1>
					Practice <span>Areas</span>
				</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				<div className="card">
					{search(datas).map((ele, index) => (
						<Card className="product" sx={{ maxWidth: 345 }} key={index}>
							<CardMedia sx={{ height: 140 }} image={ele.src} />
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Product Name: {ele.productName}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Price: {ele.price}
								</Typography>
								<CardActions>
									<Button size="small" onClick={() => handleDelete(ele._id)}>
										Delete
									</Button>
								</CardActions>
							</CardContent>
						</Card>
					))}
				</div>
			</section>
			<section className="reliable">
				<div className="images">
					<img src="https://preview.colorlib.com/theme/notary/images/atty_1.jpg.webp" />
					<img src="https://preview.colorlib.com/theme/notary/images/atty_2.jpg.webp" />
				</div>
				<div className="info">
					<h1>
						We Provide Highly <span>Reliable & Effective</span> Legal Solutions
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, explicabo iste a labore
						id est quas, doloremque veritatis! Provident odit pariatur dolorem quisquam, voluptatibus
						voluptates optio accusamus, vel quasi quidem!
					</p>
					<button>Book an apointment</button>
				</div>
			</section>
			<section className="customers">
				<h1>Happy Customers</h1>
				<div className="customerCards">
					<div className="card1">
						<div className="customer-img">
							<img src="https://preview.colorlib.com/theme/notary/images/person_2.jpg.webp" />
							<div className="customer-info">
								<h5>Lina Gold</h5>
								<p>Owner Ford</p>
							</div>
						</div>
						<div className="customer-about">
							"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet
							veniam. Ipsam, nam, voluptatum"
						</div>
					</div>
					<div className="card1">
						<div className="customer-img">
							<img src="https://preview.colorlib.com/theme/notary/images/person_1.jpg.webp" />
							<div className="customer-info">
								<h5>Lina Gold</h5>
								<p>Owner Ford</p>
							</div>
						</div>
						<div className="customer-about">
							"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet
							veniam. Ipsam, nam, voluptatum"
						</div>
					</div>
					<div className="card1">
						<div className="customer-img">
							<img src="https://preview.colorlib.com/theme/notary/images/person_3.jpg.webp" />
							<div className="customer-info">
								<h5>Lina Gold</h5>
								<p>Owner Ford</p>
							</div>
						</div>
						<div className="customer-about">
							"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet
							veniam. Ipsam, nam, voluptatum"
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
