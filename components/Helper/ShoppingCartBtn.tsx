import { ShoppingBag } from 'lucide-react'
import React from 'react'

const ShoppingCartBtn = () => {
  return (
    <div className='relative'>
        <span className='absolute -top-3 -right-2 w-6 h-6 bg-red-700 text-center flex items-center justify-center flex-col rounded-full text-white text-xs'>6</span>
        <ShoppingBag cursor={"pointer"} size={26}/>
    </div>
  )
}

export default ShoppingCartBtn