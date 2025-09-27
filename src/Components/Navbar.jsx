import { TextAlignCenter } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        
        <div class="bg-white-100 shadow-lg">
            <div class="container mx-auto">
                <nav class="px-8 py-4 flex justify-between items-center">
                    <h1 class="md:text-xl text-sm font-bold">CS — Ticket System</h1>
                    <div class="md:flex items-center gap-5">
                        <a href="#" class="text-black-500">Home</a>
                        <a href="#" class="text-black-500">FAQ</a>
                        <a href="#" class="text-black-500">Changelog</a>
                        <a href="#" class="text-black-500">Blog</a>
                        <a href="#" class="text-black-500">Download</a>
                        <a href="#" class="text-black-500">Contact</a>
                        <button class="bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-semibold px-5 py-3 rounded-lg hover:cursor-pointer">+ New Ticket</button>
                    </div>
                    <div class="block md:hidden">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h16H3z"></path>
                        </svg>
                    </div>
                </nav>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar