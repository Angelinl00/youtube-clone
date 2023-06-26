import React, { useEffect, useState } from "react";
import TopMenu from './mainContent/TopMenu';
import ThumbnailItem from "./mainContent/ThumbnailItem";

function MainContent({videos}) {

  const [list , setList] = useState([])

  useEffect(()=> {
    if(videos != null) {
      console.log(videos.contents)
      setList(videos.contents)
    }
    
  } , [videos])

  return (
  <div class="w-full h-full">
    <TopMenu />

    <div class="bg-black h-full w-[86%] overflow-y-scroll p-[18px] relative grid grid-cols-4">
      {list.map((video) => {
        return <ThumbnailItem video={video} />
      })}
    
    </div>
  </div>)
};

export default MainContent;