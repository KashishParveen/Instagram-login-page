'use client'

import { useState, useCallback } from 'react'
import { useTheme } from 'next-themes'
import InstagramLogo from './instagram-logo'
import LoginForm from './login-form'
import Carousel from './carousel'
import SignUpForm from './signup-form'
import { Moon, Sun } from 'lucide-react'

export default function LoginPage() {
  const [showSignUp, setShowSignUp] = useState(false)
  const [currentView, setCurrentView] = useState<'login' | 'signup'>('login')
  const { theme, setTheme } = useTheme()

  const handleSwitchToSignUp = useCallback(() => {
    setCurrentView('signup')
    setShowSignUp(true)
  }, [])

  const handleSwitchToLogin = useCallback(() => {
    setCurrentView('login')
    setShowSignUp(false)
  }, [])

  const handleCloseModal = useCallback(() => {
    setShowSignUp(false)
    setCurrentView('login')
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#000000] transition-colors duration-300">
      {/* Main content area */}
      <div className="flex flex-col lg:flex-row flex-1">
        {/* Left side - Carousel (hidden on mobile and tablet, shown on large screens) */}
        <div className="hidden lg:flex lg:w-[60%] relative">
          <Carousel />
        </div>

        {/* Right side - Login form section */}
        <div className="w-full lg:w-[40%] flex flex-col px-4 py-6 sm:px-6 sm:py-8 bg-white dark:bg-[#000000]">
          {/* Theme Toggle - Top Right */}
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="group relative p-2.5 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Toggle theme"
            >
              <div className="relative w-5 h-5">
                <Sun className="absolute inset-0 w-5 h-5 text-amber-500 transition-all duration-300 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute inset-0 w-5 h-5 text-blue-400 transition-all duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
              </div>
            </button>
          </div>

          {/* Form container */}
          <div className="flex-1 flex items-center justify-center w-full">
            <div className="w-full max-w-sm">
              <div className="flex flex-col gap-3 sm:gap-4">

              {/* Main form box */}
              <div className="border border-gray-200 dark:border-zinc-800 rounded-lg p-8 sm:p-10 bg-white dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm dark:shadow-zinc-900/50">
                {/* Instagram Logo */}
                <div className="mb-8 sm:mb-10 flex justify-center">
                  <InstagramLogo />
                </div>

                {/* Login Form */}
                {!showSignUp && <LoginForm onSignUpClick={handleSwitchToSignUp} />}

                {/* Sign-up Form */}
                {showSignUp && (
                  <SignUpForm onClose={handleCloseModal} onSwitchToLogin={handleSwitchToLogin} />
                )}
              </div>

              {/* Sign up section */}
              {!showSignUp && (
                <div className="border border-gray-200 dark:border-zinc-800 rounded-lg p-5 sm:p-6 text-center bg-white dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm dark:shadow-zinc-900/50">
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    Don't have an account?{' '}
                    <button
                      onClick={handleSwitchToSignUp}
                      className="font-semibold text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      Sign up
                    </button>
                  </p>
                </div>
              )}

              {/* Get the app section */}
              {!showSignUp && (
                <div className="mt-3 sm:mt-5 text-center">
                  <p className="text-sm font-normal mb-4 text-gray-800 dark:text-gray-300">Get the app.</p>
                  <div className="flex gap-2 sm:gap-3 justify-center">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.instagram.android"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 max-w-[135px]"
                    >
                      <img 
                        src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                        alt="Get it on Google Play"
                        className="w-full h-auto"
                      />
                    </a>
                    <a
                      href="https://apps.apple.com/app/instagram/id389801252"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 max-w-[135px]"
                    >
                      <img 
                        src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                        alt="Download on the App Store"
                        className="w-full h-auto"
                      />
                    </a>
                  </div>
                </div>
              )}
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center px-4 py-6 sm:py-8 bg-white dark:bg-[#000000] border-t border-gray-100 dark:border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4 text-xs text-gray-500 dark:text-gray-400">
            <a href="#" className="hover:underline">Meta</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Jobs</a>
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">API</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Locations</a>
            <a href="#" className="hover:underline">Instagram Lite</a>
            <a href="#" className="hover:underline">Threads</a>
            <a href="#" className="hover:underline">Contact Uploading & Non-Users</a>
            <a href="#" className="hover:underline">Meta Verified</a>
          </div>
          <div className="flex justify-center items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <select className="bg-transparent border-none outline-none cursor-pointer">
              <option>English</option>
            </select>
            <p>© 2026 Instagram from Meta</p>
          </div>
        </div>
      </footer>
    </div>
  )
}