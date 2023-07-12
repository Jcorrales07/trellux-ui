import React from 'react'
import Navbar from './Navbar'
import './css/HomePage.css'
import {
    reactIcon,
    viteIcon,
    tailwindcssIcon,
    javascriptIcon,
    nodejsIcon,
    expressIcon,
    reduxIcon,
    reactRouterIcon,
    mondodbIcon,
} from '../assets/icons'

const HomePage = () => {
    return (
        <div className="bg-slate-900">
            <Navbar />
            <div>
                <h1 className="title font-black text-pop-up-top text-gray-500 text-center mt-80 sm:text-9xl text-6xl">
                    Trellux
                </h1>
            </div>
            <div className="flex justify-center mt-10 gap-4 items-center">
                <img src={javascriptIcon} alt="js logo" className="w-10 h-10" />
                <img src={reactIcon} alt="react logo" className="w-10 h-10" />
                <img src={viteIcon} alt="vite logo" className="w-10 h-10" />
                <img
                    src={tailwindcssIcon}
                    alt="tail logo"
                    className="w-10 h-10"
                />
                <img src={nodejsIcon} alt="node logo" className="w-10 h-10" />
                <img src={expressIcon} alt="express logo" className="mt-[10px]" />
                <img src={reduxIcon} alt="redux logo" className="w-10 h-10" />
                <img
                    src={reactRouterIcon}
                    alt="react router logo"
                    className="w-10 h-10"
                />
                <img src={mondodbIcon} alt="mongo logo" className="w-10 h-10" />
            </div>
        </div>
    )
}

export default HomePage
