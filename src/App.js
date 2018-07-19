import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeImage: 0,
      images: [
        {
          src: 'http://via.placeholder.com/350x150?text=1',
          alt: 'one'
        },
        {
          src: 'http://via.placeholder.com/350x150?text=2',
          alt: 'two'
        },
        {
          src: 'http://via.placeholder.com/350x150?text=3',
          alt: 'three'
        }
      ]
    };
  }

  goToNextImage() {
    let nextImage = this.state.activeImage + 1;
    let imagesLength = this.state.images.length;
    
    if (nextImage >= imagesLength) {
      return;
    }

    this.setState({ 
      activeImage: nextImage
    });
  }

  goToPrevSlide() {
    let nextImage = this.state.activeImage - 1;
    
    if (nextImage < 0) {
      return;
    }

    this.setState({ 
      activeImage: nextImage
    });
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.images.map((image, index) =>
            <li
              className={
                index === this.state.activeImage
                  ? "image-active"
                  : "image-hidden"
              }
              alt={ image.alt }
              key={index}
            >
              <img src={ image.src }/>
            </li>
          )}
        </ul>
        <br />
        <button onClick={ this.goToPrevSlide.bind(this) }>prev</button>
        <button onClick={ this.goToNextImage.bind(this) }>next</button>
      </div>
    );
  }
}

export default App;
