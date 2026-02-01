'use client'

import { useState, useEffect } from 'react'

export default function MobilePreview() {
  const [currentFeed, setCurrentFeed] = useState(0)

  const feedItems = [
    { id: 1, color: 'from-blue-600 to-purple-600', title: 'Beautiful Moments' },
    { id: 2, color: 'from-pink-500 to-rose-500', title: 'Travel & Adventure' },
    { id: 3, color: 'from-amber-500 to-orange-500', title: 'Lifestyle Posts' },
    { id: 4, color: 'from-green-500 to-teal-500', title: 'Nature & Outdoors' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeed((prev) => (prev + 1) % feedItems.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [feedItems.length])

  const item = feedItems[currentFeed]

  return (
    <div className="flex items-center justify-center w-full">
      {/* Phone mockup container */}
      <div className="relative w-72 h-full max-h-[600px]">
        {/* Outer bezel */}
        <div className="absolute inset-0 bg-black rounded-3xl shadow-2xl overflow-hidden border-8 border-black">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl z-20" />

          {/* Screen content */}
          <div className="w-full h-full flex flex-col bg-white">
            {/* Status bar */}
            <div className="h-8 bg-white flex items-center justify-between px-6 text-black text-xs font-semibold">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                </svg>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 9h2v2H1zm4 0h2v2H5zm4 0h2v2H9zm4 0h2v2h-2zm4 0h2v2h-2z" />
                </svg>
                <svg className="w-5 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 5.23 11.08 5 12 5c3.04 0 5.5 2.46 5.5 5.5v.5H19c2.05 0 3.71 1.66 3.71 3.71 0 1.84-1.43 3.35-3.35 3.58-1.15 2.23-3.51 3.75-6.21 3.75-2.76 0-5.14-1.59-6.29-3.93-.93.09-1.85-.05-2.74-.4C5.3 19.75 8.03 22 11.14 22c2.04 0 3.93-.78 5.36-2.04 2.05-.27 3.71-1.97 3.71-4.04 0-2.05-1.66-3.71-3.71-3.71-.48 0-.94.1-1.38.29-.35-1.48-1.45-2.75-2.89-3.27l1.46-1.46z" />
                </svg>
              </div>
            </div>

            {/* Feed items carousel */}
            <div className="flex-1 overflow-hidden bg-gray-100">
              {/* Posts display */}
              <div className="w-full h-full flex flex-col">
                {/* Post header */}
                <div className="px-3 py-3 flex items-center gap-2 bg-white border-b border-gray-200">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-pink-600 rounded-full" />
                  <div className="flex-1">
                    <p className="text-xs font-semibold">User Feed</p>
                    <p className="text-xs text-gray-500">2h ago</p>
                  </div>
                  <button className="text-gray-600">⋯</button>
                </div>

                {/* Feed image with gradient */}
                <div
                  className={`flex-1 bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden transition-all duration-500`}
                >
                  {/* Image placeholder with pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-grid-pattern" />
                  </div>
                  <div className="relative z-10 text-center">
                    <p className="text-white text-lg font-bold">{item.title}</p>
                    <div className="mt-4 flex justify-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      {feedItems.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentFeed ? 'bg-white' : 'bg-white/40'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Post actions */}
                <div className="bg-white border-t border-gray-200">
                  <div className="px-3 py-2 flex gap-4">
                    <button className="text-xl hover:opacity-70 transition-opacity">♡</button>
                    <button className="text-xl hover:opacity-70 transition-opacity">💬</button>
                    <button className="text-xl hover:opacity-70 transition-opacity">📤</button>
                  </div>
                  <div className="px-3 py-2 text-xs">
                    <p className="font-semibold text-gray-800">1,234 likes</p>
                    <p className="text-gray-600 text-xs mt-1">Explore the moment and connect with friends</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom navigation */}
            <div className="h-16 bg-white border-t border-gray-200 flex items-center justify-around">
              <button className="flex items-center justify-center w-10 h-10 text-gray-800 hover:text-black">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              </button>
              <button className="flex items-center justify-center w-10 h-10 text-gray-500 hover:text-gray-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="flex items-center justify-center w-10 h-10 text-gray-500 hover:text-gray-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <button className="flex items-center justify-center w-10 h-10 text-gray-500 hover:text-gray-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="flex items-center justify-center w-10 h-10 text-gray-500 hover:text-gray-800">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Home indicator */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full" />
      </div>
    </div>
  )
}
