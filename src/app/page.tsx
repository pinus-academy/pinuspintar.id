'use client';

import React, { useState } from 'react';
import { Heart, MessageCircle, Search, User } from 'lucide-react';

export default function InstagramReelPlayer() {
  const [isLiked, setIsLiked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  
  const toggleLike = () => setIsLiked(!isLiked);
  const toggleFollow = () => setIsFollowing(!isFollowing);
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative max-w-sm w-full h-full max-h-screen bg-black rounded-3xl overflow-hidden">
        {/* Top navigation */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-4 py-3 z-10">
          
          <div className="text-gray-400 font-medium">For you</div>
          <Search className="text-white w-5 h-5" />
        </div>
        
        {/* Video content (represented as a dark background with boxing image placeholder) */}
        <div className="w-full h-screen bg-gradient-to-b from-gray-800 to-black flex items-center justify-center relative">
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            {/* This would be a video player in a real implementation */}
            <div className="text-white text-opacity-30 text-sm">
            <video
              className="w-full h-full object-cover"
              src="/pp.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            >
              Your browser does not support the video tag.
            </video>
            </div>
          </div>
          
          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            {/* User info */}
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden flex items-center justify-center">
                <User className="text-white w-4 h-4" />
              </div>
              <div className="ml-2">
                <div className="text-white text-sm font-medium">PinusPintar</div>
                <div className="text-gray-400 text-xs">2 days ago</div>
              </div>
            </div>
            
            {/* Post title */}
            <div className="text-white text-2xl font-bold mb-3">
              Code Outbound
            </div>
            
            {/* Hashtags */}
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="bg-gray-800 px-2 py-1 rounded-md">
                <span className="text-gray-300 text-xs">#together</span>
              </div>
              <div className="bg-gray-800 px-2 py-1 rounded-md">
                <span className="text-gray-300 text-xs">#bootcamp</span>
              </div>
              <div className="bg-gray-800 px-2 py-1 rounded-md">
                <span className="text-gray-300 text-xs">#code</span>
              </div>
              <div className="bg-gray-800 px-2 py-1 rounded-md">
                <span className="text-gray-300 text-xs">+</span>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex gap-2 mb-6">
              <button 
                onClick={toggleFollow} 
                className={`flex-1 py-2 px-4 rounded-full flex items-center justify-center ${
                  isFollowing ? 'bg-gray-700 text-white' : 'bg-white text-black'
                }`}
              >
                <span className="font-medium">{isFollowing ? 'Following' : 'Follow'}</span>
              </button>
              <button className="flex-1 py-2 px-4 rounded-full border border-gray-700 flex items-center justify-center">
                <span className="text-white font-medium">Message</span>
              </button>
              <button onClick={toggleLike} className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center">
                <Heart className={`w-5 h-5 ${isLiked ? 'text-red-500 fill-red-500' : 'text-white'}`} />
              </button>
            </div>
          </div>
        </div>
        

      </div>
    </div>
  );
}