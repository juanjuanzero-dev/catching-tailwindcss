import React from 'react'

import benDen from '../images/profiles/matheus-ferrero-W7b3eDUb_2I-unsplash.jpg'
import joe from '../images/profiles/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg'
import podmatch from '../images/profiles/podmatch-UpiF461EAHU-unsplash.jpg'

const testimonials = [
    { name: "John Doe", testimonial: "Working with them was an absolute delight. They are always willing to lend a helping hand and has a great sense of humor.", image: joe},
    { name: "Samantha Smith", testimonial: "I had the pleasure of working with you on a project and you were a true professional.", image: benDen },
    { name: "Daniel David", testimonial: "It was a pleasure working with you. You were a great communicator and always goes above and beyond to ensure that everyone is on the same page." , image: podmatch}
]

const TestimonialList = () => (
    <>
        <section className='relative p-6'>
            <h2 id="testimonials" className='text-3xl font-extrabold text-center'>Testimonials</h2>
            <div className=' flex flex-nowrap gap-12 overflow-x-auto p-6 md:justify-center'>
                {testimonials.map(t =>
                    <div className='flex flex-row h-48 w-80 bg-slate-200 rounded-lg shadow-md overflow-hidden flex-none'>
                        <img className=' object-fill w-2/5' src={t.image}></img>
                        <div className='flex flex-col p-4 w-3/5'>
                            <h2 className='text-xl font-extrabold'>{t.name}</h2>
                            <div className='text-sm'>{t.testimonial}</div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    </>
)

export default TestimonialList;