'use client'

import React from "react"

import { useState, useCallback } from 'react'

interface SignUpFormProps {
  onClose: () => void
  onSwitchToLogin: () => void
}

export default function SignUpForm({ onClose, onSwitchToLogin }: SignUpFormProps) {
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const validateForm = useCallback(() => {
    if (!fullName.trim() || !email.trim() || !username.trim() || !password.trim()) {
      setError('Please fill in all fields')
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Invalid email address')
      return false
    }

    const usernameRegex = /^[a-zA-Z0-9_.]{3,30}$/
    if (!usernameRegex.test(username)) {
      setError('Username must be 3-30 characters (letters, numbers, . and _)')
      return false
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return false
    }

    return true
  }, [fullName, email, username, password])

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setError('')
      setSuccess('')

      if (!validateForm()) return

      setIsLoading(true)
      try {
        await new Promise((resolve) => setTimeout(resolve, 1200))
        setSuccess('Sign up successful! Redirecting to login...')
        setTimeout(() => {
          onClose()
          onSwitchToLogin()
        }, 1500)
      } catch {
        setError('Sign up failed. Please try again.')
      } finally {
        setIsLoading(false)
      }
    },
    [validateForm, onClose, onSwitchToLogin]
  )

  const isFormValid =
    fullName.trim() && email.trim() && username.trim() && password.trim()

  return (
    <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3 w-full">
      <p className="text-center text-gray-700 text-xs sm:text-sm mb-4 sm:mb-6">
        Sign up to see photos and videos from your friends.
      </p>

      {/* Full Name Input */}
      <input
        type="text"
        placeholder="Full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        disabled={isLoading}
        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-300 rounded-sm text-sm placeholder-gray-500 focus:bg-white focus:border-gray-400 focus:outline-none transition-colors disabled:opacity-60"
      />

      {/* Email Input */}
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-300 rounded-sm text-sm placeholder-gray-500 focus:bg-white focus:border-gray-400 focus:outline-none transition-colors disabled:opacity-60"
        autoComplete="email"
      />

      {/* Username Input */}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value.toLowerCase())}
        disabled={isLoading}
        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-300 rounded-sm text-sm placeholder-gray-500 focus:bg-white focus:border-gray-400 focus:outline-none transition-colors disabled:opacity-60"
        autoComplete="username"
      />

      {/* Password Input */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-300 rounded-sm text-sm placeholder-gray-500 focus:bg-white focus:border-gray-400 focus:outline-none transition-colors disabled:opacity-60"
        autoComplete="new-password"
      />

      {/* Error Message */}
      {error && <p className="text-xs text-red-600 text-center font-medium">{error}</p>}

      {/* Success Message */}
      {success && <p className="text-xs text-green-600 text-center font-semibold">{success}</p>}

      {/* Sign Up Button */}
      <button
        type="submit"
        disabled={!isFormValid || isLoading}
        className={`w-full py-2 sm:py-2.5 rounded-sm font-semibold text-white text-sm sm:text-base transition-all ${
          isFormValid && !isLoading
            ? 'bg-blue-500 hover:bg-blue-600 active:scale-98 cursor-pointer'
            : 'bg-blue-300 cursor-not-allowed'
        }`}
      >
        {isLoading ? 'Signing up...' : 'Sign up'}
      </button>

      {/* Terms Message */}
      <p className="text-xs text-gray-600 text-center leading-relaxed">
        People who use our service may have uploaded your contact information to Instagram.{' '}
        <a href="#" className="text-blue-600 hover:text-blue-700">
          Learn more
        </a>
        . By signing up, you agree to our Terms, Data Policy and Cookies Policy.
      </p>

      {/* Switch to Login */}
      <div className="pt-2 sm:pt-4 text-center">
        <button
          type="button"
          onClick={onSwitchToLogin}
          disabled={isLoading}
          className="text-sm text-gray-700 hover:text-gray-900 transition-colors font-medium disabled:opacity-60"
        >
          Already have an account? <span className="text-blue-600 font-semibold">Log in</span>
        </button>
      </div>
    </form>
  )
}
