import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter.default() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders first image on load', () => {
  const wrapper = Enzyme.shallow(<App />);
  const firstImage = 
    <li className="image-active" alt={ wrapper.state().images[0].alt }>
      <img src={ wrapper.state().images[0].src } />
    </li>;
  expect(wrapper.contains(firstImage)).toEqual(true);
});

it('goes to a next image on next button click', () => {
  const div = document.createElement('div');
  const wrapper = Enzyme.shallow(<App />);
  const nextButton = wrapper.find('button').at(1);
  nextButton.simulate('click');
  expect(wrapper.state().activeImage).toEqual(1);
});

it('disables next button when last image reached', () => {
  const div = document.createElement('div');
  const wrapper = Enzyme.shallow(<App />);
  const nextButton = wrapper.find('button').at(1);
  wrapper.state().images.forEach(image => {
    nextButton.simulate('click');
  })
  nextButton.simulate('click');
  expect(wrapper.state().activeImage).toEqual(2);
});

it('goes to a previous image on prev button click', () => {
  const div = document.createElement('div');
  const wrapper = Enzyme.shallow(<App />);
  const prevButton = wrapper.find('button').at(0);
  const nextButton = wrapper.find('button').at(1);
  nextButton.simulate('click');
  prevButton.simulate('click');
  expect(wrapper.state().activeImage).toEqual(0);
});

it('disables prev button when first image reached', () => {
  const div = document.createElement('div');
  const wrapper = Enzyme.shallow(<App />);
  const prevButton = wrapper.find('button').at(0);
  prevButton.simulate('click');
  prevButton.simulate('click');
  expect(wrapper.state().activeImage).toEqual(0);
});
