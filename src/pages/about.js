import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {BsFillPersonFill} from 'react-icons/bs'
export default function about() {
  return (
    <section className="bg-white/30 backdrop-blur-lg dark:bg-gray-900">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-light-2 ">Made with unofficial Saavn Api from Github ..</h2>
            <p className="mb-4 font-sans text-dark-2 ">Rohit Lodhi</p>
             <p>Few Links Here...</p>
             <div className="inline-flex">
              <a href="https://github.com/rohitlodhiii"><FaGithub className=" text-6xl text-light-2 p-1 m-2 bg-dark-1 rounded" /></a>
              <a href="https://github.com/rohitlodhiii"><BsFillPersonFill className=" text-6xl text-light-2 p-1 m-2 bg-dark-1 rounded" /></a>
             </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src='/img1.jpg' alt="music"/>
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="img2.jpg" alt="music"/>
        </div>
    </div>
   </section>
  )
}
