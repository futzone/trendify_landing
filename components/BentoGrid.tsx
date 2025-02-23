import React from 'react'

const BentoGrid = () => {
    return (
        <section className='mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative py-5 w-full mt-16'>
            <div className='flex flex-col justify-center lg:mx-28'>
                <h1 className='flex text-4xl lg:text-6xl text-black mt-12 font-bold font-marten'>
                    Xizmatlar
                </h1>
                <h1 className='flex lg:max-w-[650px] mt-2 text-black mb-8'>
                Bizning maqsadimiz – do‘kon egalari va tadbirkorlar uchun zamonaviy va avtomatlashtirilgan biznes echimlarini taqdim etish. Sizning muvaffaqiyatingiz – bizning ustuvor maqsadimiz!
                </h1>

                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
                    <div className='flex flex-col lg:col-span-1 bg-black rounded-3xl p-4'>
                        <video className='w-full h-[200px] object-cover' src='/images/bento/waves.mp4' autoPlay loop muted />
                        <p className='text-gray-400 mt-2'> <span className='font-bold text-white'>ERP funksiyalari.</span>Tovarlarni qo‘lda boshqarish va buyurtmalarni hisobga olishga vaqt sarflashning hojati yo‘q! Tizimimiz sizga avtomatlashtirilgan monitoring, real vaqtda ma’lumotlarni yangilash va savdo jarayonlarini soddalashtirish imkoniyatini beradi</p>
                    </div>

                    <div className='flex flex-col lg:col-span-2 bg-black rounded-3xl p-6'>
                        <video className='w-full h-[200px] object-cover' src='/images/bento/waves.mp4' autoPlay loop muted />
                        <p className='text-gray-400 mt-2'> <span className='font-bold text-white'>CRM imkoniyatlari. </span>Mijozlaringiz bilan yanada samarali muloqot o‘rnatish, ularning ehtiyojlarini yaxshiroq tushunish va individual xizmat ko‘rsatish orqali savdo hajmini oshirish uchun zamonaviy CRM tizimimizdan foydalaning!</p>
                    </div>

                    <div className='flex flex-col lg:col-span-2 bg-black rounded-3xl p-6'>
                        <video className='w-full h-[200px] object-cover' src='/images/bento/waves.mp4' autoPlay loop muted />
                        <p className='text-gray-400 mt-2'><span className='font-bold text-white'>Integratsiyalar.</span>ERP va CRM tizimlarimiz O‘zbekistondagi yirik banklar, Telegram botlar, SMS va Email xabarnomalari, hamda boshqa ko‘plab xizmatlar bilan integratsiya qilingan bo‘lib, biznesingizning har bir bosqichini avtomatlashtirish imkonini beradi.</p>
                    </div>

                    <div className='flex flex-col lg:col-span-1 bg-black rounded-3xl p-6'>
                        <video className='w-full h-[200px] object-cover' src='/images/bento/waves.mp4' autoPlay loop muted />
                        <p className='text-gray-400 mt-2'> <span className='font-bold text-white'>Offline va online sotuv</span>Internet bo'lmaganda ham biznesingiz to'xtab qolmaydi. Tarmoqqa qayta ulangach, barcha ma'lumotlar avtomatik qayta birlashtiriladi!</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default BentoGrid