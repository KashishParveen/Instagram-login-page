'use client'

import { useState, useEffect, useCallback } from 'react'
import InstagramLogo from './instagram-logo'

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  const slides = [
    {
      id: 1,
      gradient: 'from-fuchsia-600 via-purple-600 to-blue-600',
      bgColor: 'bg-gradient-to-br from-fuchsia-50 to-purple-50',
      title: 'See every moment',
      subtitle: 'Share photos and videos with the people you love.',
      icon: '📸',
      animationDelay: 0,
    },
    {
      id: 2,
      gradient: 'from-blue-600 via-cyan-600 to-green-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      title: 'Connect with everyone',
      subtitle: 'Connect with friends and discover new interests with Reels, Stories, and more.',
      icon: '🌐',
      animationDelay: 1,
    },
    {
      id: 3,
      gradient: 'from-orange-600 via-pink-600 to-red-600',
      bgColor: 'bg-gradient-to-br from-orange-50 to-pink-50',
      title: 'Express yourself',
      subtitle: 'Write captions, share your thoughts, and show off your personality.',
      icon: '✨',
      animationDelay: 2,
    },
    {
      id: 4,
      gradient: 'from-green-600 via-teal-600 to-blue-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-teal-50',
      title: 'Grow your community',
      subtitle: 'Build meaningful connections and inspire others with your creativity.',
      icon: '💫',
      animationDelay: 3,
    },
  ]

  useEffect(() => {
    if (!isAutoplay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isAutoplay, slides.length])

  const handleSlideChange = useCallback((index) => {
    setCurrentSlide(index)
    setIsAutoplay(false)
    setTimeout(() => setIsAutoplay(true), 8000)
  }, [])

  const currentSlideData = slides[currentSlide]

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 flex flex-col overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.gradient} opacity-0 dark:opacity-0 transition-opacity duration-1000`} />
      </div>

      {/* Instagram Logo */}
      <div className="absolute top-6 lg:top-8 left-6 lg:left-8 z-30">
        <div className="scale-50 lg:scale-75 origin-top-left">
          <InstagramLogo />
        </div>
      </div>

      {/* Main Carousel Container */}
      <div className="flex-1 relative overflow-hidden flex items-center justify-center">
        {/* Carousel Slides */}
        {slides.map((slide, index) => {
          const isActive = index === currentSlide
          const isPrev = index === (currentSlide - 1 + slides.length) % slides.length
          const isNext = index === (currentSlide + 1) % slides.length

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-out flex items-center justify-center px-8 ${
                isActive ? 'opacity-100 scale-100 z-20' : isPrev ? 'opacity-0 scale-95 -translate-x-full z-10' : isNext ? 'opacity-0 scale-95 translate-x-full z-10' : 'opacity-0 scale-90 z-0'
              }`}
            >
              {/* Content Container */}
              <div className="max-w-lg text-center relative z-10">
                {/* Icon Animation */}
                <div className="mb-6 lg:mb-8">
                  <div className={`inline-flex items-center justify-center w-16 lg:w-20 h-16 lg:h-20 rounded-full ${slide.bgColor} dark:bg-gradient-to-br dark:from-zinc-800 dark:to-zinc-700 shadow-lg animate-bounce`} style={{ animationDelay: '0.1s' }}>
                    <span className="text-4xl lg:text-5xl">{slide.icon}</span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4 leading-tight">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 lg:mb-8">
                  {slide.subtitle}
                </p>

                {/* Decorative Elements */}
                <div className="flex justify-center gap-4 mb-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 opacity-60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 opacity-60" />
                </div>
              </div>

              {/* Floating Shapes Background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute top-1/4 -left-12 w-32 h-32 rounded-full blur-3xl opacity-30 ${slide.bgColor}`} />
                <div className={`absolute bottom-1/4 -right-12 w-40 h-40 rounded-full blur-3xl opacity-20 ${slide.bgColor}`} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Slide Indicators - Modern Design */}
      <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'bg-gradient-to-r from-fuchsia-500 to-purple-500 w-8 h-2.5 shadow-lg hover:shadow-xl'
                : 'bg-white/40 w-2.5 h-2.5 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-1/2 right-6 lg:right-8 transform -translate-y-1/2 z-30 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          <span className="text-gray-900 dark:text-white font-bold">{currentSlide + 1}</span>
          <span className="mx-1">/</span>
          <span>{slides.length}</span>
        </p>
      </div>

      {/* Navigation Hints */}
      <div className="absolute bottom-3 lg:bottom-4 right-6 lg:right-8 z-30 text-xs text-gray-500 dark:text-gray-400 font-medium">
        Click indicators to explore
      </div>
    </div>
  )
}
