import React from "react"

const HeroImageRight = () => (
    <>
    <section className="relative">
        <div className="container flex flex-col  items-center md:flex-row-reverse mt-4">
            {/* image on the right */}
            <div className="basis-1/2 grid justify-items-center">
                <img className="object-fill h-48 w-96 rounded-lg" src="https://images.unsplash.com/photo-1444962668425-360f59fa2c24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            </div>
            {/* content on left */}
            <div className="py-4 basis-1/2">
                <h2 className="text-3xl md:text-6xl md:font-extrabold">Learning Tailwind</h2>
                <p>Just learning tailwind because I wanted to learn more about UI frameworks and make good looking landing pages using gatsby. Building up projects is how I best learn. How about you? Tag me @juanjuanzero and let me know!</p>
            </div>
        </div>
        </section>
    </>
)

export default HeroImageRight;