import React from "react";

function TopBar() {

  return (
    <div class="w-full h-[56px] flex-shrink-0 flex flex-row items-center pl-[24px] relative overflow-hidden">
      <span class="w-[196px] h-[56px] text-white flex p-[8px] relative flex-row items-center">
        <span class="w-[40px] h-[40px] rounded-full hover:bg-zinc-700 flex flex-col justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </span>
        <span id="logo" class="w-3/4 flex flex-row items-center ml-2">
          <img src="./images/logo.png" width="30" height="30" class="relative" alt="" />
          <p class="font-bold text-[22px] ml-[4px] relative">YouTube</p>
        </span>
      </span>
      <div class="w-full h-full flex flex-col justify-center items-center">
        <div class="h-[40px] w-[470px] flex flex-row">
          <input type="text" class="h-full w-[362px] bg-[#121212] border-none outline-none pl-[8px] text-white" placeholder="Search" />
          <button class="w-[64px] h-full flex flex-col justify-center items-center text-center bg-zinc-700 text-white mr-[4px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
          <button class="h-[40px] w-[40px] flex flex-col justify-center items-center text-center bg-black text-white rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16">
              <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/>
              <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
            </svg>
          </button>
        </div>
      </div>
      <span class="w-[204px] h-[40px] absolute right-[16px] flex flex-row">
        <span class="h-[40px] w-[40px] mr-[8px] text-white flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-[16px] h-[16px] " viewBox="0 0 512 512">
            <path d="M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
            <path d="M268 384H84a52.15 52.15 0 01-52-52V180a52.15 52.15 0 0152-52h184.48A51.68 51.68 0 01320 179.52V332a52.15 52.15 0 01-52 52z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/>
          </svg>
        </span>
        <span class="h-[40px] w-[40px] mr-[8px] text-white flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-[16px] h-[16px]" viewBox="0 0 512 512">
            <rect x="64" y="64" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><rect x="216" y="64" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><rect x="368" y="64" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><rect x="64" y="216" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><rect x="216" y="216" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><rect x="368" y="216" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><rect x="64" y="368" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/>
            <rect x="216" y="368" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><rect x="368" y="368" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/>
          </svg>
        </span>
        <span class="h-[40px] w-[40px] mr-[8px] text-white flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-[16px] h-[16px]" viewBox="0 0 512 512">
            <path d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
          </svg>
        </span>

        <span class="h-full w-[60px] flex flex-col justify-center items-center">
        {/* eslint-disable-next-line */}
          <img src="./images/unnamed.png" class="h-[32px] w-[32px] rounded-full " />
        </span>

      </span>
    </div>
  )
}

export default TopBar;