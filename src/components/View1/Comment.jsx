import React from 'react' ;
import { useState } from 'react';

export default function Comment(){

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
        <div className="comment flex space-x-3">
            <div className="image rounded-full h-[50px] w-[50px] border border-gray-500">
                <img  className="rounded-full hover:cursor-pointer" src="images/pop2.jpg" alt="comp" />
            </div>
            <div className="comment-content text-sm space-y-2">
                <div className="name font-bold">James Gous <span className="text-gray-500 ml-2">8 hours ago</span></div>
                <div className="text text-white">Wow,word is full of different skills</div>
                <div className="licke space-x-3 flex items-center">
                    <div className="agree flex  space-x-2">
                        <div className="hover:cursor-pointer">
                            <ion-icon className='text-white' name="thumbs-up"></ion-icon>
                        </div>
                        <div className="number text-gray-500">3</div>
                    </div>
                    <div className="not-agree flex  space-x-2">
                        <div className="hover:cursor-pointer">
                            <ion-icon className='text-white' name="thumbs-down"></ion-icon>
                        </div>
                        <div className="number text-gray-500"> </div>
                    </div>
                    <div className="reply text-gray-500 text-lg hover:cursor-pointer">REPLY</div>
                </div>
            </div>
        </div>
    </div>)
}