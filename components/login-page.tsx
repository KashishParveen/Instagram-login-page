'use client'

import { useState, useCallback } from 'react'
import { useTheme } from 'next-themes'
import InstagramLogo from './instagram-logo'
import LoginForm from './login-form'
import MobilePreview from './mobile-preview'
import Carousel from './carousel'
import SignUpForm from './signup-form'

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
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950">
      {/* Main content area - carousel extends to footer */}
      <div className="flex flex-col lg:flex-row flex-1">
        {/* Left side - Carousel (hidden on mobile and tablet, shown on large screens) */}
        <div className="hidden lg:flex lg:w-1/2 relative">
          <Carousel />
        </div>

        {/* Right side - Login form section */}
        <div className="w-full lg:w-1/2 flex flex-col px-3 py-6 sm:px-4 sm:py-8 bg-gradient-to-br from-white via-white to-gray-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-900">
          {/* Theme Toggle */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 18a6 6 0 100-12 6 6 0 000 12zM12 2v4m0 12v4M4.22 4.22l2.83 2.83m8.04 8.04l2.83 2.83M2 12h4m12 0h4M4.22 19.78l2.83-2.83m8.04-8.04l2.83-2.83" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>

          {/* Form container with flex-1 to push footer down */}
          <div className="flex-1 flex items-center justify-center w-full">
            <div className="w-full max-w-sm">
              {/* Main content container */}
              <div className="flex flex-col gap-3 sm:gap-4 animate-fade-in">

              {/* Main form box with enhanced styling */}
              <div className="border border-gray-300 dark:border-zinc-700 rounded-lg p-6 sm:p-10 bg-white dark:bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Instagram Logo */}
                <div className="mb-6 sm:mb-8 flex justify-center">
                  <InstagramLogo />
                </div>

                {/* Login Form */}
                {!showSignUp && <LoginForm onSignUpClick={handleSwitchToSignUp} />}

                {/* Sign-up Form - shown as modal overlay */}
                {showSignUp && (
                  <SignUpForm onClose={handleCloseModal} onSwitchToLogin={handleSwitchToLogin} />
                )}
              </div>

              {/* Sign up section - shown only during login */}
              {!showSignUp && (
                <div className="border border-gray-300 dark:border-zinc-700 rounded-lg p-4 sm:p-6 text-center bg-white dark:bg-zinc-900 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Don't have an account?{' '}
                    <button
                      onClick={handleSwitchToSignUp}
                      className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-all duration-200 bg-transparent border-none cursor-pointer p-0"
                    >
                      Sign up
                    </button>
                  </p>
                </div>
              )}

              {/* Get the app section - shown only during login */}
              {!showSignUp && (
                <div className="mt-2 sm:mt-4 text-center">
                  <p className="text-xs sm:text-sm font-semibold mb-3 text-gray-800 dark:text-gray-200">Get the app.</p>
                  <div className="flex gap-2 sm:gap-3 justify-center flex-wrap">
                    <a
                      href="https://play.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 sm:gap-2 bg-black text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs font-medium hover:bg-gray-800 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 6v15a2 2 0 002 2h14a2 2 0 002-2V6M3 6a2 2 0 012-2h14a2 2 0 012 2m0 0h-4.18C18.4 4.4 17.3 3 16 3h-8C6.7 3 5.6 4.4 4.18 6H3z" />
                      </svg>
                      <span>Google Play</span>
                    </a>
                    <a
                      href="https://apps.apple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 sm:gap-2 bg-black text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs font-medium hover:bg-gray-800 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.05 13.5c-.91 0-1.82-.44-2.28-1.07.46-1.39 1.48-4.4 1.48-4.4H9.5c-.6 0-1.1.5-1.1 1.1v10.7c0 .6.5 1.1 1.1 1.1h2.8c.6 0 1.1-.5 1.1-1.1v-3.2c.46-.63 1.37-1.07 2.28-1.07 1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7c-1.49 0-2.7-1.21-2.7-2.7" />
                      </svg>
                      <span>App Store</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Full width at bottom */}
      <footer className="w-full text-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-300 dark:border-zinc-800 px-3 py-6 sm:px-4 sm:py-8 bg-white dark:bg-zinc-950">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 text-xs sm:text-sm">
          <a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200 font-medium">
            Meta
          </a>
          <span className="hidden sm:inline text-gray-400 dark:text-gray-600">·</span>
          <a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200">
            About
          </a>
          <span className="hidden sm:inline text-gray-400 dark:text-gray-600">·</span>
          <a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200">
            Blog
          </a>
          <span className="hidden sm:inline text-gray-400 dark:text-gray-600">·</span>
          <a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200">
            Jobs
          </a>
          <span className="hidden sm:inline text-gray-400 dark:text-gray-600">·</span>
          <a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200">
            Help
          </a>
          <span className="hidden sm:inline text-gray-400 dark:text-gray-600">·</span>
          <a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200">
            API
          </a>
          <span className="hidden sm:inline text-gray-400 dark:text-gray-600">·</span>
          <a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200">
            Privacy
          </a>
          <span className="hidden sm:inline text-gray-400 dark:text-gray-600">·</span>
          <a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200">
            Terms
          </a>
          <span className="hidden sm:inline text-gray-400 dark:text-gray-600">·</span>
          <a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200">
            Locations
          </a>
          <span className="hidden sm:inline text-gray-400 dark:text-gray-600">·</span>
          <a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200">
            Language
          </a>
        </div>
        <p className="text-gray-500 dark:text-gray-500 text-xs font-medium">© 2026 Instagram from Meta</p>
      </footer>
    </div>
  )
}
