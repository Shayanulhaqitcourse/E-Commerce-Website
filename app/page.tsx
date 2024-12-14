import React from 'react'
import Navbar from './components/Navar'
import Hero from './components/Hero'
import Category from './components/Category'

export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
    </div>
  )
}