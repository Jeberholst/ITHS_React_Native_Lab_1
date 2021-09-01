import React from "react";
import 'react-native';
import ContainerButtons from "../components/ContainerButtons";
import renderer from 'react-test-renderer';
import KanyeImage from "../components/images/KanyeImage";
import QuoteBox from "../components/quotes/QuoteBox";
import Header from "../components/header/Header";
import ButtonPrevNext from "../components/ButtonPrevNext";


it('renders Header correctly', () => {
  renderer.create(<Header />);
});

it('renders ContainerButtons correctly', () => {
  renderer.create(<ContainerButtons />);
});

it('renders QuoteBox correctly', () => {
  renderer.create(<QuoteBox />);
});

it('renders KanyeImage correctly', () => {
  renderer.create(<KanyeImage />);
});

it('renders ButtonPrevNext correctly', () => {
  renderer.create(<ButtonPrevNext />);
});
