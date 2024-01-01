'use client'
import { DollarSignIcon, Heart, Share2, ShoppingCart, Star, StarIcon } from 'lucide-react';
import React, { useState } from 'react';

const ProductDetailInfo = () => {
        const [quantity,setQuanty]=useState(0)
        const [color,setColor]=useState("Black")
    return (
        <div className="lg:bg-[url('/images/bg-right.png')] bg-no-repeat bg-right-bottom flex flex-col gap-y-8">
            {/* title  */}
            <div>
                <h1 className='text-[20px] font-semibold leading-[26px] text-[#2E2E2E]'>Valvet Travel Neck Pillow Folding U-Shaped Memory Foam + Eye Masks Ear buds Soft  Massage Pillow for Sleeping in Bus Car Plane </h1>
            </div>
            {/* Rating */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-x-4'>
                    <p className='text-base font-bold text-[#2E2E2E]'>4.7</p>
                    <div className='flex items-center gap-x-1'>
                    <StarIcon className='text-yellow-600'/>
                    <Star className='text-yellow-600'/>
                    <Star className='text-yellow-600'/>
                    <Star className='text-yellow-600'/>
                    <Star className='text-yellow-600'/>
                    </div>
                    <div className='flex items-center gap-x-1'>
                    <p className='text-base font-bold text-[#2E2E2E]'>4.7</p>
                    <p className='text-[#9C9C9C] text-base'>Rating</p>
                    </div>
                </div>
                <div className='flex space-x-4 items-center'>
                    <div>
                        <Heart/>
                    </div>
                    <div>
                        <Share2/>
                    </div>
                    <div>
                        <p className='text-xs text-[#9C9C9C]'>Report</p>
                    </div>
                </div>
            </div>
            {/* pricing */}
            <div className='flex items-center space-x-3 list-inside'>
                <div>
                    <h2 className='text-[#F97316] text-3xl font-bold'>$ 1990 /-</h2>
                </div>
                <div className='ml-2'>
                    <p className='text-zinc-600 line-through'>$2004</p>
                </div>
                <div className='bg-[#F97316] text-white px-2 py-1'>
                    <p className='text-xs'>-34% OFF</p>
                </div>
            </div>
            {/* brand */}
            <div>
                <p className='text-zinc-500'>Brand: <span className='text-zinc-800'>No brand</span></p>
            </div>
            {/* size  */}
            <div className='flex items-center gap-x-3'>
                <div>
                    <p>Size</p>
                </div>
                <div className='bg-gray-300 px-2 py-1'>
                    <p className='text-[#F97316]'>M</p>
                </div>
                <div className='bg-gray-300 px-2 py-1'>
                    <p className='text-[#F97316]'>L</p>
                </div>
                <div className='bg-gray-300 px-2 py-1'>
                    <p className='text-[#F97316]'>XL</p>
                </div>
                <div className='bg-[#F97316] px-2 py-1'>
                    <p className='text-white'>XXL</p>
                </div>
            </div>
            {/* color control */}

            <div className='flex flex-col gap-y-2'>
                <div>
                    <p className='text-gray-500 text-base'>Color <span className='text-black'>{color}</span></p>
                </div>
                <div className='flex space-x-4'>
                    <div onClick={()=>setColor("Yellow")} className='w-8 h-8 bg-[#FFE91F]'/>
                    <div onClick={()=>setColor("Cayan")} className='w-8 h-8 bg-[#79CAAD]'/>
                    <div onClick={()=>setColor("Orange")} className='w-8 h-8 bg-[#FF8E40]'/>
                    <div onClick={()=>setColor("Blue")} className='w-8 h-8 bg-[#1F93FF]'/>
                    <div onClick={()=>setColor("Indigo")} className='w-8 h-8 bg-[#E01FFF]'/>
                    <div onClick={()=>setColor("red")} className='w-8 h-8 bg-[#FF1F1F]'/>
                </div>
            </div>
            <div>
                <p className='text-[#707070]'>Sku: <span className='text-black'>hdgfhdgf6756dsghgf7</span></p>
            </div>
             {/* quantity */}
             <div className='flex items-center justify-between lg:w-1/2'>
                <div>
                    Quantity
                </div>
                <div className='flex items-center space-x-3 bg-gray-200 p-1 px-3'>
                    <button onClick={()=>setQuanty(pre=>pre+1)} className='px-2 py-1 bg-white'>+</button>
                    <p>{quantity}</p>
                    <button onClick={()=>setQuanty(pre=>pre-1)} className='px-2 py-1 bg-white '>-</button>
                </div>
                <div className='flex items-center'>
                    <p className='text-[#F97316]'>Only 46 pieces available</p>
                </div>
             </div>
            <div className='flex items-center gap-x-4'>
                <button className='bg-[#F97316] w-40 px-1 h-10 text-white'>Buy Now</button>
                <button className='bg-[#FCD34D] w-40 px-1 h-10 text-[#2E2E2E] flex items-center justify-center space-x-1'><ShoppingCart/> <span>Add to Cart</span></button>
            </div>
        </div>
    );
};

export default ProductDetailInfo;