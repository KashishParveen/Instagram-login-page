'use client'

import { useState, useEffect } from 'react'

export default function Carousel() {
  const [activeImage, setActiveImage] = useState(0)
  const [fadeState, setFadeState] = useState('visible')

  const images = [
    {
      id: 1,
      emoji: '📸',
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 2,
      emoji: '🎨',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 3,
      emoji: '🌟',
      color: 'from-orange-400 to-pink-500'
    },
    {
      id: 4,
      emoji: '💫',
      color: 'from-green-400 to-teal-500'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('fading')
      setTimeout(() => {
        setActiveImage((prev) => (prev + 1) % images.length)
        setFadeState('visible')
      }, 500)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white dark:bg-[#000000]">
      {/* Instagram Logo - Top Left */}
      <div className="absolute top-8 left-12 z-20">
        <svg className="w-32 h-12" viewBox="0 0 448 512" fill="url(#instagram-gradient)">
          <defs>
            <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#f09433' }} />
              <stop offset="25%" style={{ stopColor: '#e6683c' }} />
              <stop offset="50%" style={{ stopColor: '#dc2743' }} />
              <stop offset="75%" style={{ stopColor: '#cc2366' }} />
              <stop offset="100%" style={{ stopColor: '#bc1888' }} />
            </linearGradient>
          </defs>
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
        </svg>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center max-w-2xl px-12">
        {/* Heading */}
        <h1 className="text-5xl font-normal text-white dark:text-white mb-8 text-center leading-tight">
          See everyday moments from your
        </h1>
        <h2 className="text-5xl font-normal mb-16 text-center">
          <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            close friends
          </span>
          <span className="text-white dark:text-white">.</span>
        </h2>

        {/* Animated Photo Collage */}
        <div className="relative w-96 h-96">
          {/* Background glow effect */}
          <div className="absolute inset-0 blur-3xl opacity-30">
            <div className={`w-full h-full bg-gradient-to-br ${images[activeImage].color} transition-all duration-1000`}></div>
          </div>

          {/* Main photo stack */}
          <div className="relative w-full h-full">
            {/* Back card - slightly rotated left */}
            <div 
              className="absolute top-4 left-8 w-64 h-80 rounded-2xl shadow-2xl transform -rotate-12 transition-all duration-700"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              }}
            >
              <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
            </div>

            {/* Middle card - center */}
            <div 
              className="absolute top-8 left-16 w-64 h-80 rounded-2xl shadow-2xl transform transition-all duration-700"
              style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              }}
            >
              <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
              
              {/* Reaction emoji overlays */}
              <div className="absolute -top-3 left-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-2xl animate-bounce">
                😊
              </div>
              <div className="absolute top-1/4 -right-3 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-xl">
                🌟
              </div>
            </div>

            {/* Front card - slightly rotated right with transition */}
            <div 
              className={`absolute top-12 left-24 w-64 h-80 rounded-2xl shadow-2xl transform rotate-6 transition-all duration-500 ${
                fadeState === 'fading' ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
              style={{
                background: `linear-gradient(135deg, ${
                  activeImage === 0 ? '#667eea, #764ba2' :
                  activeImage === 1 ? '#4facfe, #00f2fe' :
                  activeImage === 2 ? '#fa709a, #fee140' :
                  '#30cfd0, #330867'
                })`,
              }}
            >
              <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              
              {/* Image content placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-7xl animate-pulse">{images[activeImage].emoji}</div>
              </div>

              {/* Instagram post UI elements */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex gap-2">
                    <div className="w-8 h-1 bg-white/80 rounded-full"></div>
                    <div className="w-8 h-1 bg-white/40 rounded-full"></div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 border-2 border-white rounded-full"></div>
                  <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Reaction bubbles */}
              <div className="absolute bottom-24 -right-4 w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-full shadow-lg flex items-center justify-center text-2xl animate-pulse">
                ❤️
              </div>
              <div className="absolute top-20 -left-4 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-xl">
                ✅
              </div>
            </div>
          </div>

          {/* Floating stickers */}
          <div className="absolute top-0 right-12 w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg flex items-center justify-center text-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>
            🍕
          </div>
          <div className="absolute bottom-12 left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg flex items-center justify-center text-xl animate-bounce" style={{ animationDelay: '1s' }}>
            🎮
          </div>
        </div>
      </div>
    </div>
  )
}