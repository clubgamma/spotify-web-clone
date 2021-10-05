import {render,screen,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from '../Login/Login';
import app from '../../App'
import Signup from './Signup';


import  ReactDOM from 'react-dom';
import react from 'react';
import {isTSAnyKeyword } from '@babel/types';
import renderer from 'react-test-renderer'
//import {screen} from "@testing-library/react";
//import 'jest-canvas-mock';

afterEach(()=>{
    cleanup();
});

test ('signup basic 1',()=>{
    render(<Signup />);
    const signupHead=screen.getByTestId("signupHead");
    expect (signupHead).toBeInTheDocument;
    

    //screen.debug()
    
    

} )


test ('signup basic 2',()=>{
    render(<Signup />);
    const signupHeadImg=screen.getByTestId("signupHeadImg");
    expect (signupHeadImg).toBeInTheDocument;
    

    //screen.debug()
    
    

} )

test ('signup basic 3',()=>{
    render(<Signup />);
    const headTextName=screen.getByTestId("headTextName");
    expect (headTextName).toHaveTextContent('Spotify');
    

    //screen.debug()
    
    

} )

test ('signup basic 4',()=>{
    render(<Signup />);
    const Sign_up_with_facebook=screen.getByTestId("Sign_up_with_facebook");
    expect (Sign_up_with_facebook).toHaveTextContent('Sign up with facebook');
    

    //screen.debug()
    
    

} )


test ('signup basic 5',()=>{
    render(<Signup />);
    const Sign_up_with_facebook=screen.getByTestId("Sign_up_with_facebook");
    expect (Sign_up_with_facebook).toHaveTextContent('Sign up with facebook');
    

    //screen.debug()
    
    

} )


