import React from 'react'
import { BackgroundGradient } from './ui/BackgorundGradients'
import Image from 'next/image'

const SyncWithGithub = () => {
    return (
        <section className='mx-auto max-w-full px-6 lg:px-20 3xl:px-0 relative py-5 w-full bg-black text-white flex flex-col items-center'>
            <div className='flex flex-col justify-center items-start max-w-3xl mx-4 md:mx-8 lg:mx-36 lg:mt-12'>
                <h1 className='font-bold text-2xl md:text-3xl lg:text-7xl tracking-tight font-marten'>
                    Online + Offline
                </h1>
                <h1 className='font-bold text-2xl md:text-3xl lg:text-7xl tracking-tight font-marten'>
                    Innovatsion Ilova
                </h1>
                <div className='flex flex-col text-gray-400 mt-4'>
                    <p>Ilovamiz yordamida savdo jarayonlarini avtomatlashtiring, mijozlar bilan ishlashni osonlashtiring va biznesingizni istalgan joydan boshqaring!</p>
                </div>
                <div className=' mt-16 lg:mt-24 flex items-center justify-center w-full'>
                    <BackgroundGradient className='w-full max-w-4xl flex justify-center'>
                        <Image
                            src="/images/hero.webp"
                            alt='sync'
                            width={800}
                            height={800}
                            className='object-contain rounded-3xl'
                        />
                    </BackgroundGradient>
                </div>
                <div className='flex flex-col items-center justify-center mb-10 mt-8'>
                    <div className='flex flex-col lg:flex-row mt-8 w-full gap-6'>
                        <div className='flex flex-col gap-4 p-6 bg-black rounded-xl shadow-sm w-full lg:w-1/3 lg:basis-1/3'>
                            <Image
                                src="/images/profile.webp"
                                alt='Customize workspace icon'
                                width={48}
                                height={48}
                                className="text-blue-500"
                            />
                            <div className="space-y-2">
                                <h3 className="font-semibold text-3xl text-white">Real vaqtda buyurtmalar</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Buyurtmalarni qabul qilish, kuzatish va bajarish jarayonlarini istalgan joydan nazorat qiling. Hech bir buyurtma e'tibordan chetda qolmaydi!
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 p-6 bg-black rounded-xl shadow-sm w-full lg:w-1/3 lg:basis-1/3'>
                            <Image
                                src="/images/profile.webp"
                                alt='Video call icon'
                                width={48}
                                height={48}
                            />
                            <div className="space-y-2">
                                <h3 className="font-semibold text-3xl text-white">Ombor va tovar nazorati</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Mahsulot zaxiralarini avtomatik hisoblash, yetishmovchilik haqida bildirishnomalar va tovar harakatlarini kuzatish imkoniyati.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 p-6 bg-black rounded-xl shadow-sm w-full lg:w-1/3 lg:basis-1/3'>
                            <Image
                                src="/images/profile.webp"
                                alt='Invite guests icon'
                                width={48}
                                height={48}
                            />
                            <div className="space-y-2">
                                <h3 className="font-semibold text-3xl text-white">Mijozlar bilan aloqa</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Har bir mijoz uchun shaxsiy profil, xabar yuborish, mijoz tarixi va sodiqlik dasturlarini boshqarish orqali ularni yanada yaqinroq qiling!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row mt-8 w-full gap-6'>
                        <div className='flex flex-col gap-4 p-6 bg-black rounded-xl shadow-sm w-full lg:w-1/3 lg:basis-1/3'>
                            <Image
                                src="/images/profile.webp"
                                alt='Customize workspace icon'
                                width={48}
                                height={48}
                                className="text-blue-500"
                            />
                            <div className="space-y-2">
                                <h3 className="font-semibold text-3xl text-white">AI asosida tahlil</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Savdo statistikasi, foyda va xarajatlarni real vaqtda tahlil qiling. Sun’iy intellekt yordamida eng foydali biznes qarorlarini qabul qiling!
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 p-6 bg-black rounded-xl shadow-sm w-full lg:w-1/3 lg:basis-1/3'>
                            <Image
                                src="/images/profile.webp"
                                alt='Video call icon'
                                width={48}
                                height={48}
                            />
                            <div className="space-y-2">
                                <h3 className="font-semibold text-3xl text-white">Hisobot va monitoring</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Moliyaviy va savdo hisobotlarini avtomatik shakllantiring, biznes faoliyatini aniq raqamlar asosida baholang va nazorat qiling!
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 p-6 bg-black rounded-xl shadow-sm w-full lg:w-1/3 lg:basis-1/3'>
                            <Image
                                src="/images/profile.webp"
                                alt='Invite guests icon'
                                width={48}
                                height={48}
                            />
                            <div className="space-y-2">
                                <h3 className="font-semibold text-3xl text-white">Xodimlar nazorati</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Turli xodimlar uchun rollar va huquqlar tayinlang, jamoangiz bilan birga samarali ishlang va ish jarayonlarini yanada soddalashtiring!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SyncWithGithub