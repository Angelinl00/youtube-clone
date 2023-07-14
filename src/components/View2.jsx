import React from "react";
import { useState, useEffect } from "react";

/* Components */
import Card from "./View2/Card";
import axios from 'axios' ;

export default function View2(){
    const [videos,setVideos] = useState([])

    useEffect(() => {
        (async function () {
        const options = {
          method: 'GET',
          url: 'https://youtube-search-and-download.p.rapidapi.com/trending',
          params: {
            type: 'mu',
            hl: 'en',
            gl: 'US'
          },
          headers: {
              'X-RapidAPI-Key': 'b788b8067fmsh868a9ff4872e0f5p150819jsn88695d30fce0',
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
          }
        };
        
        try {
            const response = await axios.request(options);
            setVideos(response.data.contents)
            
        } catch (error) {
            console.error(error);
        }
    })();
    },[])
    

    return (
        <div className="part2 h-auto w-1/3 bg-transparent">
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
                                    views={item.video.viewCountText}
                                    img={item.video.thumbnails[0].url} video={item} />
                            )
                        })
                    }
            </div>
        </div>
    )
}