//data-testid="signupHead"

import {render,screen,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Home from './Home';


import  ReactDOM from 'react-dom';
import react from 'react';
import {isTSAnyKeyword } from '@babel/types';
import renderer from 'react-test-renderer'
//import {screen} from "@testing-library/react";
//import 'jest-canvas-mock';

afterEach(()=>{
    cleanup();
});

test ('titel',()=>{
    render(<Home />);
    const title=screen.getByTestId("title");
    expect (title).toBeInTheDocument;
    expect (title).toHaveTextContent('Spotify');

    

    //screen.debug()
    
    

} )


test ('titel',()=>{
    render(<Home />);
    const home=screen.getByTestId("home");
    
    expect (home).toHaveTextContent('Home');

    

    //screen.debug()
    
    

} )


test ('titel',()=>{
    render(<Home />);
    const biggest_hits=screen.getByTestId("biggest_hits");
    
    expect (biggest_hits).toHaveTextContent("Today's biggest hits");

    

    //screen.debug()
    
    

} )


test ('images tests',()=>{
    render(<Home />);
    const images=screen.getByTestId("images");
    const images1=screen.getByTestId("images1");
    const images2=screen.getByTestId("images2");
    const images3=screen.getByTestId("images3");
    const images4=screen.getByTestId("images4");
    const images5=screen.getByTestId("images5");
    const images6=screen.getByTestId("images6");
    const images7=screen.getByTestId("images7");
    const images8=screen.getByTestId("images8");
    const images9=screen.getByTestId("images9");
    const images10=screen.getByTestId("images10");
    
    expect (images).toBeInTheDocument;
    expect (images1).toBeInTheDocument;
    expect (images2).toBeInTheDocument;
    expect (images3).toBeInTheDocument;
    expect (images4).toBeInTheDocument;
    expect (images5).toBeInTheDocument;
    expect (images6).toBeInTheDocument;
    expect (images7).toBeInTheDocument;
    expect (images8).toBeInTheDocument;
    expect (images9).toBeInTheDocument;
    expect (images10).toBeInTheDocument;

    

    //screen.debug()
    
    

} )








