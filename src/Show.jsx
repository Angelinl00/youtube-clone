import React from 'react' ;
import {useState , useEffect} from 'react' ;
import { useLocation } from 'react-router-dom';

// Component
import TopBar from './components/TopBar';
import View1 from './components/View1';
import View2 from './components/View2';
import axios from 'axios';

export default function Show(){

    const location = useLocation();
    const [videoId , setVideoId] = useState(location.pathname.split("/")[2]);

    return (
        <div className='h-auto w-screen bg-[#181818]'>
            <TopBar/>
            <div className="min-h-[90%] bg-transparent flex overflow-y-scroll ">
                <View1 videoId={videoId} />
                <View2 />
            </div>
        </div>
    )
}