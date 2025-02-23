import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import { motion } from "motion/react"
import Image from 'next/image'
import { InfiniteSlider } from '../ui/InfiniteScrollBar'
import { VscCircleFilled } from "react-icons/vsc";


const HeroSection = () => {
    return (
        <section className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative py-5 w-full flex flex-col">
            <div className='flex flex-col sm:text-2xl lg:text-6xl font-bold py-2 md:py-10 bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-300 to-gray-400 relative z-20'>
                <h1 className="">
                    Do'koningizni avtomatlashtiring
                </h1>
                <h1 className="">
                    samaradorlikni oshiring!
                </h1>
            </div>
            <div className='max-w-[248px] lg:max-w-[740px] flex flex-col'>
                <p className='text-gray-300 text-sm sm:text-base md:text-lg flex flex-col lg:flex-row md:flex-row'>
                Do‘koningizni boshqarishda zamonaviy texnologiyalar yordamida samaradorlikni maksimal darajaga chiqarish va vaqtni tejash imkoniyatini qo‘lga kiriting!   
                </p>
                {/* <p className='flex flex-col lg:flex-row md:flex-row'>
                    <span className='text-gray-300 text-sm sm:text-base md:text-lg'>
                        of Linear,Jira,Slack and Notion
                    </span>
                </p> */}
            </div>
            <div className='mt-2 lg:mt-10 max-w-28 lg:max-w-[248px] relative'>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className='bg-gradient-to-r from-white to-gray-200 text-black px-3 lg:px-6 py-2.5 rounded-full font-semibold text-sm w-full flex gap-2 justify-center items-center shadow-lg transition-all duration-300 hover:shadow-white/25 overflow-hidden relative'
                >
                    <span className="relative z-10">Hoziroq sinab ko'rish</span>
                    <FaArrowRight className="text-xs lg:text-sm relative z-10" />
                    <motion.div
                        initial={{ scale: 0, x: -50 }}
                        whileHover={{ scale: 1.5, x: 100 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute w-10 h-10 bg-white rounded-full blur-xl opacity-70"
                    />
                </motion.button>
            </div>
            <div className='lg:mt-44  mt-32 max-sm:-mx-6 '>
                <Image
                    src="/heroimg.png"
                    alt='hero image'
                    width={2048}
                    height={1138}
                    className="[@media(max-width:400px)]:w-full  sm:w-11/12 md:w-9/12 lg:w-[980px] overflow-hidden lg:mt-16 lg:ml-12 rounded-lg"
                />
            </div>
            <h1 className='text-gray-400 text-[10px] mt-2 lg:text-lg'>
                Hammasi bir tizimda
            </h1>
            <div className='hidden lg:flex gap-2 text-white mb-8'>
                <p className='flex justify-center items-center gap-2'>Biznes<VscCircleFilled className='text-sm text-gray-400' /></p>
                <p className='flex justify-center items-center gap-2'>Savdo<VscCircleFilled className='text-sm text-gray-400' /></p>
                <p className='flex justify-center items-center gap-2'>Xodimlar<VscCircleFilled className='text-sm text-gray-400' /></p>
                <p className='flex justify-center items-center gap-2'>Tovarlar<VscCircleFilled className='text-sm text-gray-400' /></p>
                <p className='flex justify-center items-center gap-2'>Daromad<VscCircleFilled className='text-sm text-gray-400' /></p>
                <p className='flex justify-center items-center gap-2'>Analitika</p>
            </div>
            <div className='lg:hidden mt-2 w-full max-w-[650px] text-[10px] p-1 text-gray-400 sm:text-base'>
                <InfiniteSlider durationOnHover={75} gap={12}>
                    <p>Biznes</p>
                    <p>Savdo</p>
                    <p>Xodimlar</p>
                    <p>Chat</p>
                    <p>Document</p>
                    <p>Inbox</p>
                </InfiniteSlider>
            </div>
        </section>
    )
}

export default HeroSection