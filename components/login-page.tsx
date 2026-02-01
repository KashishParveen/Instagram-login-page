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
                    {/* Google Play Button */}
                    <a
                      href="https://play.google.com/store/apps/details?id=com.instagram.android"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <div className="h-10 px-4 bg-black dark:bg-white rounded-lg flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <svg className="w-5 h-5 text-white dark:text-black" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                        <div className="text-left">
                          <div className="text-[8px] text-white dark:text-black leading-none">GET IT ON</div>
                          <div className="text-sm font-semibold text-white dark:text-black leading-tight">Google Play</div>
                        </div>
                      </div>
                    </a>

                    {/* App Store Button */}
                    <a
                      href="https://apps.apple.com/app/instagram/id389801252"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <div className="h-10 px-4 bg-black dark:bg-white rounded-lg flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <svg className="w-5 h-5 text-white dark:text-black" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                        </svg>
                        <div className="text-left">
                          <div className="text-[8px] text-white dark:text-black leading-none">Download on the</div>
                          <div className="text-sm font-semibold text-white dark:text-black leading-tight">App Store</div>
                        </div>
                      </div>
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
            <a href="#" className="hover:underline">Meta AI</a>
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