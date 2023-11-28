import React from 'react'

const ContactSection = () => (
    <>
        <section className='relative'>
            <div className='flex justify-center'>
                <div className='w-1/2 h-60 border-slate-300 rounded-lg bg-white'>
                    <h2 className='text-3xl font-extrabold text-center'>Connect With Me</h2>
                </div>
            </div>
            <div className="hidden lg:block h-48 w-full bg-amber-300  absolute -bottom-5 -z-10"></div>
        </section>
    </>
)

export default ContactSection;