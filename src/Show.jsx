import React from 'react' ;
import {useState , useEffect} from 'react' ;

// Component
import TopBar from './components/TopBar';
import View1 from './components/View1';
import View2 from './components/View2';
import axios from 'axios';

export default function Show(){


    return (
        <div className='h-auto w-screen bg-[#181818]'>
            <TopBar/>
            <div className="min-h-[90%] bg-transparent flex overflow-y-scroll ">
                <View1 />
                <View2 />
            </div>
        </div>
    )
}