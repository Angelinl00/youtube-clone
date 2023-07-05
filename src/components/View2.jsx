import React from "react";
import { useState, useEffect } from "react";

/* Components */
import Card from "./View2/Card";
import axios from 'axios' ;

export default function View2(){
    const [videos,setVideos] = useState([])
    
    const [list, setList] = useState([])

    useEffect(async function () {
        const options = {
          method: 'GET',
          url: 'https://youtube-search-and-download.p.rapidapi.com/trending',
          params: {
            type: 'mu',
            hl: 'en',
            gl: 'US'
          },
          headers: {
            'X-RapidAPI-Key': 'ee1577e6demsh4aff8438c8ce214p14976djsn7f88ed8d5a9c',
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
          }
        };
        
        try {
            const response = await axios.request(options);
            try {
                setVideos(response.data.contents)
            } catch (error) {
                console.log("le state......")
            }
        } catch (error) {
            console.error(error);
        }
    },[]) 
    

    return (
    <div className="part2 h-full w-1/3 bg-transparent">
        <div className="part-header flex items-center space-x-5  mb-4 px-5 pt-3 ">
            <div className="all px-4 py-1 h-10 bg-white text-lg flex items-center rounded-full ">All</div>
            <div className="line px-4 py-2 h-10 bg-gray-600 text-lg flex items-center rounded-full text-gray-300">From Marcus Levin</div>
        </div>
        <div className="px-5 flex flex-col h-auto">
            {
                videos.map((item) => {
                    return (
                        <Card name={item.video.channelName}
                         title={item.video.title}
                          time={item.video.lengthText}
                          views = {item.video.viewCountText}
                          img={item.video.thumbnails[0].url} video={item}  />
                    )
                })
            }
        </div>
    </div>
    )
}