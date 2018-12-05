import React, { Component } from 'react';


const CarouselCard = ({key, slide, img, title, desc}) => {
	let active = '';

	if (slide==0) {
		active = 'active';
	}

	return (
		<div className={`CarouselCard item ${active}`} >
			<div className='carousel-gradient'></div>
			<div className='container'>
				<div className='carousel-image'>
					<img src={img} />
				</div>
				<div className='carousel-text'>
					<h1>{title}</h1>
					<p>{desc}</p>
					<div className='carousel-buttons'>
						<button className='buyButton' type='button'><span class="glyphicon glyphicon-play-circle"></span>Buy Now</button>
						<button className='watchButton' type='button'>Watch Trailer</button>
					</div>
				</div>
			</div>
			<div className='background'>
				<img src={img} />
			</div>
		</div>
	);

}

export default CarouselCard;