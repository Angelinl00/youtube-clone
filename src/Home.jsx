import React from 'react'

import TopBar from './components/TopBar'
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import axios from 'axios'
import { useState , useEffect } from 'react';

function Home() {

  const [mainBackGround , setMainBackground] = useState({
    background : '#212121'
  })

  const [videos , setVideos] = useState(null);

  useEffect(() => {
    (async function getApi() {
      
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
        const content = response.data;
        if(!videos) {
          setVideos(content)
        }
      } catch (error) {
        console.error(error);
      }
      
    })()
  } , [])

  useEffect(() => {
    console.log(videos)

  } , [videos])

  return (<div class="w-screen h-screen flex flex-col flex-shrink-0 relative justify-items-center bg-[#212121]">
    
      <TopBar/>

      <div class="flex flex-row w-screen h-full relative mr-80 overflow-hidden">
        <SideBar />
        <MainContent videos={videos} />
      </div>
    </div>
  );
}

export default Home;