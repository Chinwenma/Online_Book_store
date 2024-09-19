import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='flex flex-col justify-center h-[calc(100vh-12vh)] w-full'>
            {/* Hero Content Wrapper */}
            <div className='w-4/5 items-center mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>
                {/* hero Text */}
                <div>
                    <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-slate-900 font-bold uppercase'>Discover Your <span className='text-pink-700'>Next</span>
                        <span className=' text-red-600'>  Adventure</span>  in Pages <span className=' text-red-600'>!</span>
                    </h1>
                    <p className='text-sm md:text-base lg:text-lg text-slate-900 text-opacity-80 mt-4'>Explore a world of books, from timeless classics to modern bestsellers.
                        Find, wishlist, and purchase your favorites with ease.</p>
                    <div className='flex items-center space-x-4 mt-6 '>

                        <Button className='bg-rose-700 rounded-3xl' size={"lg"}>Shop Now!</Button>
                        <Button className='bg-green-700 rounded-3xl' size={"lg"}>Doscover More!</Button>
                    </div>
                </div>
                {/* hero img */}
                <div className='hidden lg:block'>
                    <Image src="/images/book6.png" alt="book" width={600} height= {600} className='lg:w-[50%] lg:h-[50%] xl:w-[80%] xl:h-[80%]  '/>
                </div>
            </div>
        </div>
    )
}

export default Hero
