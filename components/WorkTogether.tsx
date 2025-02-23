import Image from 'next/image'
import React from 'react'

const WorkTogether = () => {
    return (
        <section className='mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative py-5 w-full z-50 mt-12'>
            <div className='flex flex-col justify-center items-start max-w-3xl mx-auto'>
                <h1 className='font-bold text-black text-3xl lg:text-7xl tracking-tight font-marten'>
                    AI + Biznes
                </h1>
                <h1 className='font-bold text-black text-3xl lg:text-7xl tracking-tight font-marten'>
                    Yangi boshqich!
                </h1>
                <p className='text-gray-600 mt-6 text-[10px] lg:text-xl'>
                    Sun’iy Intellekt Yordamida Biznesingizni Yangi Bosqichga Olib Chiqaramiz. AI bilan avtomatlashtiring, tezlashtiring va yanada samarali ishlang!
                </p>
                <div className='mt-4 w-full border-2 border-gray-300 rounded-md'>
                    <video
                        className='w-full h-auto object-cover p-2' src='/images/bento/waves.mp4' autoPlay loop muted
                    />
                </div>
                <p className='text-black mt-6 text-[10px] lg:text-xl lg:max-w-[650px] p-2 font-semibold'>
                    Biznesingiz jarayonlarini yanada optimallashtirish va unumdorlikni oshirish uchun sun’iy intellekt texnologiyalaridan foydalaning! AI yordamida avtomatik tavsiyalar, mijozlarga individual yondashuv, savdo tahlillari va bozor prognozlarini qo‘lga kiriting. Aqlli tizimlar orqali foydalanuvchilar xatti-harakatlarini tahlil qiling, talabni oldindan bashorat qiling va eng yaxshi biznes qarorlarini qabul qiling!
                </p>

                <div className='flex flex-col lg:flex-row mt-2 w-full gap-6'>
                    {/* Customize workspace */}
                    <div className='flex flex-col gap-4 p-6 bg-white rounded-xl shadow-sm flex-1'>
                        <Image
                            src="/images/profile.webp"
                            alt='Customize workspace icon'
                            width={48}
                            height={48}
                            className="text-blue-500"
                        />
                        <div className="space-y-2">
                            <p className="font-semibold text-xl text-gray-900">Tavsiyalar va Tahlillar</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Sun’iy intellekt asosida foydalanuvchilarning xatti-harakatlarini chuqur tahlil qiling va ularga mos keladigan mahsulot yoki xizmatlarni tavsiya qiling. Aqlli tizimlar savdo jarayonlarini avtomatlashtiradi va biznesingizni yangi darajaga olib chiqadi!
                            </p>
                        </div>
                    </div>

                    {/* Audio and video calls */}

                    <div className='flex flex-col gap-4 p-6 bg-white rounded-xl shadow-sm flex-1'>
                        <Image
                            src="/images/profile.webp"
                            alt='Video call icon'
                            width={48}
                            height={48}
                        />
                        <div className="space-y-2">
                            <p className="font-semibold text-xl text-gray-900">Mijozlarga Shaxsiy Yondashuv</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                AI yordamida har bir mijoz uchun individual takliflar tayyorlang! Aqlli algoritmlar mijozlar tarixi va qiziqishlarini tahlil qilib, ularga eng mos mahsulotlarni taqdim etadi. Natijada sodiq mijozlar soni ortib, sotuvlar hajmi oshadi.
                            </p>
                        </div>
                    </div>

                    {/* Invite guests */}
                    <div className='flex flex-col gap-4 p-6 bg-white rounded-xl shadow-sm flex-1'>
                        <Image
                            src="/images/profile.webp"
                            alt='Invite guests icon'
                            width={48}
                            height={48}
                        />
                        <div className="space-y-2">
                            <p className="font-semibold text-xl text-gray-900">Bozor Prognozlari va Trendlar</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                AI vositalari orqali bozorni tahlil qiling va kelajakdagi talabni oldindan bilib oling! Bizning aqlli tizimlarimiz savdo tendensiyalarini bashorat qilib, sizga to‘g‘ri strategiyalar ishlab chiqishda yordam beradi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkTogether