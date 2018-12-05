import React, { Component } from 'react';
import './ContentBox.css';

const ContentBox = ({type, image, text, title }) => {

	return (
		<div className={`ContentBox ${type}`}>
			<div className='content-container'>
			<div className='content-text'>
				<h1>{title}</h1>
				<p>{text}</p>
			</div>
			<div className='content-image'>
				<img src={image} />
			</div>
			</div>
		</div>
	);

}

export default ContentBox;