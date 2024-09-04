'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const designOptions = [
  { name: 'Art', image: '/placeholder.svg' },
  { name: 'Stickers', image: '/placeholder.svg' },
  { name: 'Wallpaper', image: '/placeholder.svg' },
  { name: 'Poster', image: '/placeholder.svg' },
  { name: 'T-shirt', image: '/placeholder.svg' },
  { name: 'Monogram', image: '/placeholder.svg' },
  { name: 'Social Post', image: '/placeholder.svg' },
]

export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="bg-white shadow-sm">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Image src="/placeholder.svg" alt="Logo" width={32} height={32} />
              <span className="ml-2 text-xl font-bold">Aipulse</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="#" className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                API
              </Link>
              <Link href="#" className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                Pricing
              </Link>
              <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                Download iOS app
              </button>
              <button className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-md text-sm font-medium">
                Get started for free
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="#" className="bg-gray-100 text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">
                API
              </Link>
              <Link href="#" className="bg-gray-100 text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">
                Pricing
              </Link>
              <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 block w-full text-left px-3 py-2 rounded-md text-base font-medium">
                Download iOS app
              </button>
              <button className="bg-black text-white hover:bg-gray-800 block w-full text-left px-3 py-2 rounded-md text-base font-medium">
                Get started for free
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 leading-tight">
            Design <span className="text-purple-500">any</span><span className="text-pink-500">thing</span>
            <span className="text-black"> like a pro</span>
          </h1>
        </header>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 w-full ">
          {designOptions.map((option) => (
            <div key={option.name} className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
              <Image
                src={option.image}
                alt={option.name}
                width={150}
                height={150}
                className="rounded-md mb-2"
              />
              <span className="text-sm font-medium">{option.name}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <button className="bg-black text-white px-6 py-3 rounded-full font-medium">
            Start designing
          </button>
        </div>
      </main>

      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image src="/placeholder.svg?height=32&width=32" alt="Logo" width={32} height={32} className="inline-block" />
              <span className="ml-2 text-xl font-bold">Playground</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4">
              <Link href="#" className="hover:text-gray-300">Terms</Link>
              <Link href="#" className="hover:text-gray-300">Privacy</Link>
              <Link href="#" className="hover:text-gray-300">Contact</Link>
            </div>
          </div>
          <div className="mt-4 text-center md:text-left text-sm text-gray-400">
            © 2023 Aipulse. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}