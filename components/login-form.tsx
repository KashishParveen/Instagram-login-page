'use client'

import React from "react"

import { useState, useCallback } from 'react'

interface LoginFormProps {
  onSignUpClick: () => void
}

export default function LoginForm({ onSignUpClick }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [facebookLoading, setFacebookLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const validateEmail = useCallback((value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/
    const usernameRegex = /^[a-zA-Z0-9_.]{3,}$/
    return emailRegex.test(value) || phoneRegex.test(value) || usernameRegex.test(value)
  }, [])

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setError('')
      setSuccess('')

      const trimmedEmail = email.trim()
      const trimmedPassword = password.trim()

      if (!trimmedEmail || !trimmedPassword) {
        setError('Please fill in all fields')
        return
      }

      if (!validateEmail(trimmedEmail)) {
        setError('Invalid email, phone, or username')
        return
      }

      if (trimmedPassword.length < 6) {
        setError('Password must be at least 6 characters')
        return
      }

      setIsLoading(true)
      try {
        await new Promise((resolve) => setTimeout(resolve, 1200))
        setSuccess('Login successful! Redirecting...')
        setTimeout(() => {
          setEmail('')
          setPassword('')
          setSuccess('')
        }, 1500)
      } catch {
        setError('Login failed. Please try again.')
      } finally {
        setIsLoading(false)
      }
    },
    [email, password, validateEmail]
  )

  const handleFacebookLogin = useCallback(async () => {
    setFacebookLoading(true)
    setError('')
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSuccess('Facebook login successful!')
      setTimeout(() => setSuccess(''), 1500)
    } catch {
      setError('Facebook login failed')
    } finally {
      setFacebookLoading(false)
    }
  }, [])

  const isFormValid = email.trim() && password.trim() && validateEmail(email)

  return (
    <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3 w-full">
      {/* Email/Phone/Username Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Phone number, username or email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-50 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg text-sm placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:bg-white dark:focus:bg-zinc-700 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 focus:outline-none transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          autoComplete="username"
        />
      </div>

      {/* Password Input */}
      <div className="relative">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-50 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg text-sm placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:bg-white dark:focus:bg-zinc-700 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 focus:outline-none transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          autoComplete="current-password"
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-2.5 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg animate-pulse">
          <p className="text-xs text-red-700 dark:text-red-400 text-center font-medium">{error}</p>
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className="p-2.5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg animate-pulse">
          <p className="text-xs text-green-700 dark:text-green-400 text-center font-semibold">{success}</p>
        </div>
      )}

      {/* Login Button */}
      <button
        type="submit"
        disabled={!isFormValid || isLoading || facebookLoading}
        className={`w-full py-2 sm:py-2.5 rounded-lg font-semibold text-white text-sm sm:text-base transition-all duration-200 ${
          isFormValid && !isLoading && !facebookLoading
            ? 'bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 hover:shadow-md active:scale-95 cursor-pointer'
            : 'bg-blue-300 dark:bg-blue-800 cursor-not-allowed opacity-70'
        }`}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Logging in...
          </span>
        ) : (
          'Log in'
        )}
      </button>

      {/* Divider */}
      <div className="flex items-center gap-3 sm:gap-4 my-4 sm:my-5">
        <div className="flex-1 border-t border-gray-300 dark:border-zinc-700" />
        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">OR</span>
        <div className="flex-1 border-t border-gray-300 dark:border-zinc-700" />
      </div>

      {/* Facebook Login Button */}
      <button
        type="button"
        onClick={handleFacebookLogin}
        disabled={isLoading || facebookLoading}
        className="w-full py-2 sm:py-2.5 flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-blue-900 dark:text-blue-400 bg-white dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 border border-gray-300 dark:border-zinc-700 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed rounded-lg hover:shadow-md active:scale-95"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        {facebookLoading ? 'Logging in...' : 'Log in with Facebook'}
      </button>

      {/* Forgot Password */}
      <div className="text-center pt-2 sm:pt-3">
        <a href="#" className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-all duration-200 font-medium">
          Forgotten your password?
        </a>
      </div>
    </form>
  )
}
