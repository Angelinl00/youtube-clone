import React, { useEffect } from 'react' ;
import { useState } from 'react';
import axios from "axios";

export default function Comment({videoInfos}){

    const [comments , setComments] = useState([]);

    useEffect(() => {
        (async function getComment() {
            const options = {
                method: 'GET',
                url: 'https://youtube-search-and-download.p.rapidapi.com/video/comments',
                params: {
                  id: videoInfos.videoId,
                  next: 'Eg0SC1lRSHNYTWdsQzlBGAYyJSIRIgtZUUhzWE1nbEM5QTAAeAJCEGNvbW1lbnRzLXNlY3Rpb24%3D'
                },
                headers: {
                    'X-RapidAPI-Key': 'b788b8067fmsh868a9ff4872e0f5p150819jsn88695d30fce0',
                  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
                }
              };
              
              try {
                  const response = await axios.request(options);
                  console.log(response.data);
                  setComments(response.data.comments);
              } catch (error) {
                  console.error(error);
              }
        })()
    } , []);

/*     useEffect(() => {
        console.log(comments);
    } , []); */

return (
    <div className="h-95 w-[540px] py-4 px-1 ml-20 tansform translate-x-[20px] text-white space-y-3">
        <div className="shortBy space-y-6 mb-10">
            <div className="part0 flex space-x-6 ">
                <div className="text-lg">286 Comments</div>
                <div className="icon text-2xl flex space-x-2">
                    <div>
                        <ion-icon  name="list"></ion-icon>
                    </div>
                 <div className="text-lg font-semibold">SORT BY</div>
                </div>
            </div>
            <div className="part1 flex spaec-x-3 ">
                <div className="image rounded-full h-[40px] w-[40px] border border-gray-500">
                    <img  className="rounded-full" src="images/avatar.png" alt="ss" />
                </div>
                <div className="text text-sm mt-2 w-full text-gray-500 divide-y gap-y-1">
                    <div className="fr">Add a pubic comment...</div>
                    <div className="vide"></div>
                </div>
            </div>
        </div>

        {comments.map((comment) => {
            return (
                <div className="comment flex space-x-3">
                    <div className="image rounded-full h-[50px] w-[50px] border border-gray-500">
                        <img  className="rounded-full hover:cursor-pointer" src={comment.authorThumbnails[0].url}  />
                    </div>
                    <div className="comment-content text-sm space-y-2">
                        <div className="name font-bold"> {comment.authorName} <span className="text-gray-500 ml-2">{comment.publishedTimeText}</span></div>
                        <div className="text text-white">{comment.text}</div>
                        <div className="licke space-x-3 flex items-center">
                            <div className="agree flex  space-x-2">
                                <div className="hover:cursor-pointer">
                                    <ion-icon className='text-white' name="thumbs-up"></ion-icon>
                                </div>
                                <div className="number text-gray-500">{comment.likes}</div>
                            </div>
                            <div className="not-agree flex  space-x-2">
                                <div className="hover:cursor-pointer">
                                    <ion-icon className='text-white' name="thumbs-down"></ion-icon>
                                </div>
                                <div className="number text-gray-500"> {comment.replyCount} </div>
                            </div>
                            <div className="reply text-gray-500 text-lg hover:cursor-pointer">REPLY</div>
                        </div>
                    </div>
                </div>
            )
        })}

        
    </div>)
}
