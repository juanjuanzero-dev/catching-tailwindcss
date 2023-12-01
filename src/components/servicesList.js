import React from 'react'
import iconMug from "../images/icons/mug-hot.svg"
import iconShop from "../images/icons/shop.svg"
import iconThumbs from "../images/icons/thumbs-up.svg"

const services = [
    {  icon: iconMug, title: "Consulting", subtitle: "Let's work together to find your best solution that fits you best" },
    {  icon: iconShop, title: "E-Commerce", subtitle: "Get a modern shop up and running in no time" },
    {  icon: iconThumbs, title: "Social Media", subtitle: "Build an audience for your brand, and stand out in the crowd" },
]

const ServicesList = () => (
    <section className='relative bg-slate-200 p-6'>
        <h2 id="services" className='text-3xl font-extrabold text-center'>Services</h2>
        <div className='container flex flex-col mx-auto items-center md:flex-row justify-evenly'>
            {/* loop through all services listed */}
            {services.map(s =>
                <div className='bg-white rounded-lg flex flex-col w-48 m-2 p-4 items-center'>
                    <img className="w-1/2 fill-white" src={s.icon}></img>
                    <h2 className='text-xl text-center text-amber-500 font-extrabold mt-2'>{s.title}</h2>
                    <div className='text-center text-slate-600'>{s.subtitle}</div>
                </div>
            )}
        </div>
    </section>
)

export default ServicesList;