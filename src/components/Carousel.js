import React, { Component } from 'react';
import CarouselCard from './CarouselCard.js';
import './Carousel.css'


const Carousel = ({ carouselContent }) => {
	return (
		<div id='carousel1' className='Carousel carousel slide' data-ride="carousel">
			<div className="carousel-inner">
				{
					carouselContent.map((content, i) =>{
						return (
							<CarouselCard
								key={i}
								slide={i}
								img={carouselContent[i].img}
								bg={carouselContent[i].bg}
								title={carouselContent[i].title}
								desc={carouselContent[i].desc}
							/>
						);
					})
				}
			</div>
			<a className="left carousel-control" href="#carousel1" role="button" data-slide="prev">
    			<span class="glyphicon glyphicon-menu-left"></span>
    			<span class="sr-only">Previous</span>
 			</a>
  			<a className="right carousel-control" href="#carousel1" role="button" data-slide="next">
    			<span class="glyphicon glyphicon-menu-right"></span>
    			<span class="sr-only">Next</span>
  			</a>
		</div>
	);

}

export default Carousel;

/*
*/



