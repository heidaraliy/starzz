import React from 'react'

import cardarray from '../lib/photos/card array.png'
import goldbars from '../lib/photos/gold bars.png'
import attributes from '../lib/photos/attributes.png'
import tvlines from '../lib/photos/tvlines.png'

function Introduction() {
  return (
    <div className='flex-col max-w-90 justify-center bg-gradient-to-b from-indigo-600 to-white'>


                <div className="relative flex max-h-screen flex-col justify-center overflow-hidden py-4">
                    <div className="mx-auto max-w-4xl border-solid border-2 border-black bg-gradient-to-b from-white to bg-slate-200">
                        <div className="flex flex-col md:flex-row font-bold italic text-xl justify-between p-2">
                            <div className='cursor-pointer active:scale-90 mx-4 hover:text-sky-500'>twitter</div>
                            <div className='cursor-pointer hover:text-yellow-600 active:scale-90 mx-4 '>the collection</div>
                            <div className='cursor-pointer hover:text-indigo-500 active:scale-90 mx-4 '>discord</div>
                        </div>
                    </div>
                </div>
        
                <div className="relative flex min-h-12 flex-col justify-center overflow-hidden py-4">
                    <div className="mx-auto max-w-3xl border-solid border-4 border-black bg-gradient-to-b from-white to bg-slate-200 p-12 text-center">
                        <h2 className="text-5xl font-bold leading-tight text-black">
                            welcome to 404:
                            <p className='text-4xl italic'>
                            artistnotfound
                            </p>
                        </h2>
                        <p className="mt-4 text-xl leading-8 text-black">
                            a hand-crafted NFT project revolving around your favorite artists and musicians.
                        </p>
                    </div>
                </div>
        
                <div className="relative flex min-h-12 flex-col justify-center overflow-hidden py-4">
                    <div className="mx-auto max-w-4xl border-solid border-2 border-black bg-gradient-to-b from-white to bg-slate-200 text-center">
                        <h1 className='my-4 mx-4 text-l text-center'>
                        in perpetuity, artists fade in and out of spotlights, ebbing and flowing with culture and society. 
                        as some recede into obscurity, others carve their own niche and create their own claimed space. artistnotfound aims to document 
                        the peaks and valleys of these artists through trading cards, initially documenting rappers and rnb artists, before moving on to different genres.        
                        </h1>
                    </div>
                </div>

                <div className="relative flex min-h-12 flex-col justify-center overflow-hidden py-4">
                    <div className="mx-auto max-w-5xl border-solid border-1 border-black p-2 text-center">  
                        <img src={cardarray} className='relative flex min-h-12 flex-col justify-center'></img>
                    </div>
                </div>

                <div className="relative flex min-h-12 flex-col justify-center overflow-hidden py-4">
                    <div className="mx-auto max-w-4xl border-solid border-2 border-black bg-gradient-to-b from-white to bg-slate-200  p-4 text-center">
                        <p className='my-4 mx-4 text-l font-bold italic text-center'>
                            with an initial release of 150 cards and a staggered release of 50 *new* cards every quarter, the supply is limited and curtailed.
                            each edition will bring it's own theme, musical genres, and beautiful art.
                        </p>
                    </div>
                </div>

                <div className="relative flex hidden min-h-12 flex-col justify-center overflow-hidden py-4">
                    <div className="mx-auto max-w-4xl p-4 text-center">
                        <button className="mx-auto max-w-4xl border-solid border-4 border-black bg-gradient-to-b from-white to bg-slate-200 px-12 py-4 text-center active:scale-90 hover:border-emerald-700">
                            mint now
                        </button>
                    </div>
                </div>

                <div className="relative flex min-h-12 flex-col justify-center overflow-hidden py-4">
                    <div className="opacity-50 mx-auto max-w-4xl p-4 text-center">
                        <button className="opacity-50 mx-auto max-w-4xl border-solid border-4 border-black bg-gradient-to-b from-white to bg-slate-200 px-12 py-4 text-center">
                            mint unavailable
                        </button>
                    </div>
                </div>

                <div className="relative flex min-h-12 flex-col justify-center overflow-hidden py-4">
                    <div className="mx-auto max-w-2xl border-solid border-2 border-black bg-gradient-to-b from-white to bg-slate-200 text-center">
                        <h1 className='my-4 mx-4 text-l text-center'>
                            <h2 className='text-2xl font-bold'>Rarity</h2>
                                Denoted by the gold bars right of the artist's name, rarities come in five levels, from one bar to five, five being extremely rare, one being common.
                                    <div className="relative flex min-h-12 flex-col justify-center overflow-hidden py-4">
                                        <div className="mx-auto max-w-5xl border-solid border-1 border-black p-2 text-center">  
                                            <img src={goldbars} className='relative flex w-24 min-h-12 flex-col justify-center'></img>
                                        </div>
                                    </div>       
                        </h1>
                    </div>
                </div>

                <div>
                <p className='text-center'>
                    ----------------------------------------------------------------
                </p>
                </div>

                <div className="relative flex min-h-12 flex-col justify-center overflow-hidden py-4">
                    <div className="mx-auto max-w-2xl border-solid border-2 border-black bg-gradient-to-b from-white to bg-slate-200 text-center">
                        <h1 className='my-4 mx-4 text-l text-center'>
                            <h2 className='text-2xl font-bold'>Attributes</h2>
                                Attributes are based on a numerical scale ranging from 0.0 to 10. With the Edition 1.0 Pack, Attributes will be composed of: Rapping, Singing, Production, Eccentricity, Lyricism, and Energy.
                                With higher attribute scores come higher rarities.
                                    <div className="relative flex min-h-12 flex-col justify-center overflow-hidden py-4">
                                        <div className="mx-auto max-w-5xl border-solid border-1 border-black p-2 text-center">  
                                            <img src={attributes} className='relative flex w-64 min-h-12 flex-col justify-center'></img>
                                        </div>
                                    </div>       
                        </h1>
                    </div>
                </div>

                
                <div>
                <p className='text-center'>
                    ----------------------------------------------------------------
                </p>
                </div>

                <div className="relative flex min-h-12 flex-col justify-center overflow-hidden py-4">
                    <div className="mx-auto max-w-2xl border-solid border-2 border-black bg-gradient-to-b from-white to bg-slate-200 text-center">
                        <h1 className='my-4 mx-4 text-l text-center'>
                            <h2 className='text-2xl font-bold'>Card Styles</h2>
                                Each rarity tier has its own styled artwork ranging from a vibrant portrait with lively colors, to darker, understated looks.
                                    <div className="relative flex min-h-12 flex-col justify-center overflow-hidden py-4">
                                        <div className="mx-auto max-w-5xl border-solid border-1 border-black p-2 text-center">  
                                            <img src={tvlines} className='relative flex min-h-12 flex-col justify-center'></img>
                                        </div>
                                    </div>       
                        </h1>
                    </div>
                </div>

                <div className="relative flex min-h-12 flex-col justify-center overflow-hidden py-4">
                    <div className="mx-auto max-w-4xl border-solid border-2 border-black bg-gradient-to-b from-white to bg-slate-200">
                        <div className="flex flex-col md:flex-row font-bold italic text-xl justify-between p-2">
                            <div className='cursor-pointer active:scale-90 mx-4 hover:text-gray-500'>omnispark labs</div>
                            <div className='cursor-pointer hover:text-gray-500 active:scale-90 mx-4 '>whitecircle</div>
                        </div>
                    </div>
                </div>


                


    </div>    
  )
}

export default Introduction