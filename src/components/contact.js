import React from 'react'

const ContactSection = () => (
    <>
        <section className='relative'>
            <div className='flex justify-center'>
                <div className='md:w-1/2 border-slate-300 rounded-lg bg-white shadow-md p-4'>
                    <h2 id='contact' className='text-3xl font-extrabold text-center p-3'>Connect With Me</h2>
                    <div>
                    <form action="https://form2channel.com" method="POST">
                            <div className='flex p-2 gap-2'>
                                <label for='email' className='p-1 font-bold'>Email</label>
                                <input className=' rounded-md' placeholder='email@you.com' id='email' name='Email' type='email'></input>
                            </div>
                            <div className='flex flex-col p-2'>
                                <label for='message' className='font-bold p-1'>Message</label>
                                <textarea id='message' className='rounded-md bg-slate-200 border-slate-400'></textarea>
                            </div>
                            <input type="hidden" name="formto_email" value="juanjuanzero.dev@gmail.com"></input>
                            <div className='flex flex-row-reverse p-2'>

                            <button type='submit' className=' bg-amber-400 font-bold rounded-md p-2'>Send</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <div className="block h-48 w-full bg-amber-300  absolute -bottom-5 -z-10"></div>
        </section>
    </>
)

export default ContactSection;