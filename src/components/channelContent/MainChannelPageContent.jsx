import React, { useEffect } from 'react'
import SmalVideo from './SmalVideo';
import PlayList from './PlayList';
import  {useState} from "react";
import axios from "axios";

function MainChannelPageContent({channel}) {

  const [channelId , setChannelId] = useState(channel);

  const [smalVideo , setSmalVideo] = useState(null);

  const [channelInfo , setChannelInfo] = useState({});

  useEffect(() => {
    (async function getApi() {
      
      const options = {
        method: 'GET',
        url: 'https://youtube-search-and-download.p.rapidapi.com/channel',
        params: {
          id: channel,
          sort: 'n'
        },
        headers: {
          'X-RapidAPI-Key': 'b788b8067fmsh868a9ff4872e0f5p150819jsn88695d30fce0',
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        const content = response.data;
        setChannelInfo(content);
        console.log(content.contents[0].video.thumbnails[0].url)

        setSmalVideo(content.contents[0].video);
        
      } catch (error) {
        console.error(error);
      }
      
    })()

  } , [])

  useEffect(() => {
    console.log(channelInfo);
    console.log(smalVideo);
  }, [channelInfo, smalVideo]);

  return (

    <div className='bg-black w-full h-auto flex flex-col items-start'>
      {smalVideo ? (<SmalVideo smalVideo={smalVideo} />) : (<span></span>)}
      
      <PlayList />
      <PlayList />
      <PlayList />
      <PlayList />
    </div>
  )
}

export default MainChannelPageContent;