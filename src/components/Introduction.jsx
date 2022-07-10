import React from 'react'

import cardarray from '../lib/photos/card array.png'

function Introduction() {
  return (
    <div className='flex-col max-w-90 justify-center bg-gradient-to-b from-yellow-300 to-white'>

        <div class="flex flex-row font-bold italic text-3xl justify-between active-scale:80 mx-24 p-12">
            <div className='cursor-pointer hover:text-white active:scale-90 '>omnispark labs</div>
            <div className='cursor-pointer hover:text-white active:scale-90 '>whitecircle</div>
            <div className='cursor-pointer hover:text-white active:scale-90 '>collection</div>
        </div>
        
        <div class="relative flex min-h-12 flex-col justify-center overflow-hidden py-4">
            <div class="mx-auto max-w-3xl border-solid border-4 border-black bg-gradient-to-b from-white to bg-slate-200 p-12 text-center">
                <h2 class="text-5xl font-bold leading-tight text-black">
                    welcome to 404:
                    <h3 class='text-4xl italic'>
                    artistnotfound
                    </h3>
                </h2>
                <p class="mt-4 text-xl leading-8 text-black">
                    a hand-crafted NFT project revolving around your favorite artists and musicians.
                </p>
            </div>
        </div>
        
                <div class="relative flex min-h-12 flex-col justify-center overflow-hidden py-4">
                    <div class="mx-auto max-w-4xl border-solid border-2 border-black bg-gradient-to-b from-white to bg-slate-200 text-center">
                        <h1 className='my-4 mx-4 text-l text-center'>
                        in perpetuity, artists fade in and out of spotlights, ebbing and flowing with culture and society. 
                        as some recede into obscurity, others carve their own niche and create their own claimed space. artistnotfound aims to document 
                        the peaks and valleys of these artists through trading cards, initially documenting rappers and rnb artists, before moving on to different genres.        
                        </h1>
                    </div>
                </div>

                <div class="relative flex min-h-12 flex-col justify-center overflow-hidden py-4">
                    <div class="mx-auto max-w-5xl border-solid border-1 border-black p-2 text-center">  
                        <img src={cardarray} className='relative flex min-h-12 flex-col justify-center'></img>
                    </div>
                </div>

                <div class="relative flex min-h-12 flex-col justify-center overflow-hidden py-4">
                    <div class="mx-auto max-w-4xl border-solid border-2 border-black bg-gradient-to-b from-white to bg-slate-200  p-4 text-center">
                        <p className='my-4 mx-4 text-l font-bold italic text-center'>
                            with an initial release of 150 cards and a staggered release of 50 *new* cards every quarter, the supply is limited and curtailed.
                            each edition will bring it's own theme, musical genres, and beautiful art.
                        </p>
                    </div>
                </div>

                <div class="relative flex hidden min-h-12 flex-col justify-center overflow-hidden py-4">
                    <div class="mx-auto max-w-4xl border-solid border-4 border-black bg-gradient-to-b from-white to bg-slate-200 p-4 text-center">
                        <button>
                            mint now
                        </button>
                    </div>
                </div>

                <div class="relative flex min-h-12 flex-col justify-center overflow-hidden py-4">
                    <div class="opacity-50 mx-auto max-w-4xl border-solid border-4 border-black bg-gradient-to-b from-white to bg-slate-200 p-4 text-center">
                        <button>
                            mint unavailable
                        </button>
                    </div>
                </div>
    </div>    
  )
}

export default Introduction