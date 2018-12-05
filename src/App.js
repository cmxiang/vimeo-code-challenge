import React, { Component } from 'react';
import './App.css';
import ContentBox from './components/ContentBox.js';
import Carousel from './components/Carousel.js';
import { carouselContent } from './carouselcontent.js';

class App extends Component {

  render() {
    const loremText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
    const imgs = [
      'https://i.vimeocdn.com/video/595198868_505x160.jpg',
      'https://i.vimeocdn.com/video/589972810_530x315.jpg',
      'https://i.vimeocdn.com/video/590587169_530x315.jpg'
      ];

    return (
      <div className="App">
        <ContentBox type='content-even' image={imgs[0]} text={loremText} title='Monsoon III' />
        <ContentBox type='content-odd' image={imgs[1]} text={loremText} title='Beams' />
        <ContentBox type='content-even content-gradient' image={imgs[2]} text={loremText} title='Move 2' />
        <Carousel carouselContent={carouselContent} />
      </div>
    );
  }
}

export default App;

//