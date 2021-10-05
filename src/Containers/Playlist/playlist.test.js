import {render,screen,cleanup} from '@testing-library/react';

import Login from '../Login/Login';
import app from '../../App'
import Playlist from './Playlist';


import  ReactDOM from 'react-dom';
import react from 'react';
import {isTSAnyKeyword } from '@babel/types';
import renderer from 'react-test-renderer'
//import {screen} from "@testing-library/react";
//import 'jest-canvas-mock';

afterEach(()=>{
    cleanup();
});

test ('playlist basic 1',()=>{
    render(<Playlist />);
    const playlist=screen.getByTestId("App");
    expect (playlist).toBeInTheDocument;
    //screen.debug()
    
    

} )