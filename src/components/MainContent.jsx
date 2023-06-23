import React from "react";
import TopMenu from './mainContent/TopMenu';
import ThumbnailItem from "./mainContent/ThumbnailItem";

function MainContent() {
  return (
  <div class="w-full h-full">
    <TopMenu />

    <div class="bg-black h-full w-[86%] overflow-y-scroll p-[18px] relative grid grid-cols-4">
      <ThumbnailItem />
      <ThumbnailItem />
      <ThumbnailItem />
      <ThumbnailItem />
      <ThumbnailItem />
      <ThumbnailItem />
      <ThumbnailItem />
      <ThumbnailItem />
      <ThumbnailItem />
      <ThumbnailItem />
      <ThumbnailItem />
      <ThumbnailItem />
      <ThumbnailItem />
      <ThumbnailItem />
      <ThumbnailItem />
      <ThumbnailItem />
      <ThumbnailItem />
      <ThumbnailItem />
    </div>
  </div>)
};

export default MainContent;