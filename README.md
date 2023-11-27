# Learning Tailwind
Hello today i am learning how to use tailwindcss with gatsby. I am using this resource for from the docs to get caught up with it. [Here](https://tailwindcss.com/docs/guides/gatsby) is the doc link.

This approach uses the following versions:
- gatsby-cli: 5.12.4
- tailwindcss: 3.3.5

## Process
Ive created a new directory where i plan to build a gatsby site using tailwind. This will be a blog site powered by markdown data for blog posts.

In the terminal lets create the project

```shell
gatsby new catching-tailwind
```

Going into that directory gatsby creates a starter site for us. Lets continue to follow the doc by installing the dependencies and updating the config files.

# Our goal
Our goal for this exercise is to create a few basic components that can constitute as a landing page for someone. This will be a one page landing page that has 4 sections:

- A Hero Section
- A Services Section
- A Testimonials Section
- A Contact Form at the bottom.

Of course there will also be a nav/header and a footer. Bonus points if we can fit in a recent post section that links to some recent articles that someone has.

# Header
Lets create a header which will serve as our nav for our page. The starter already includes a header.js file in our components so we'll modify that.

```jsx
import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="flex flex-col shadow-md md:py-4 md:flex-row md:justify-between">
      <div><Link className="text-3xl" to="/" >
        {siteTitle}
      </Link></div>
      <div className="flex gap-4 justify-between">
        <Link className=" flex items-center" to="#services">Services</Link>
        <Link className=" flex items-center" to="#testimonials">Testimonials</Link>
        <Link className=" flex items-center" to="#contact">Contact</Link>
      </div>
    </nav>

  </header>
)

export default Header

```
At the `nav` element here we are using flex and flex-col which means the `siteTitle` and the div containing the links to other pages are displays them as a column. Then we use `md:` to specify a change in behavior for larger screens (md and above breakpoint). We change it to `flex-row` and renders the page with a row after reachinging and exceeding the medium breakpoint. In side the links for servies, contact and testimonials we needed to justify the content of the anchor tag, so here we use `flex items-center` to center the text (items inside the anchor) vertically.

Tailwind uses a mobile first approach, meaning you only apply styles at certain breakpoints and above.

## Footer
We'll take the footer element out of the pages/index.js file and create a new component called footer.

```shell
code ./src/components/footer.js
```
We'll remove the item footer from the layout and add our own
```js
import * as React from "react"

const Footer = ({ siteTitle }) => (
    <footer className="">
    {`${siteTitle}`} © {new Date().getFullYear()} &middot; Built with
    {` `}
    <a href="https://www.gatsbyjs.com">Gatsby</a>
  </footer>
)

export default Footer

```

## Hero Section
Next we are going to work on the here section which will feature some content on one side and an image on the other side. Lets create a hero-image-right.js file and 

```shell
code ./src/components/hero-image-right.js
```

Here are the contents of the file

```js
import React from "react"

const HeroImageRight = () => (
    <>
        <section className="relative">
            <div className="container flex flex-col items-center p-6 md:my-6 lg:my-12 mx-auto md:flex-row-reverse ">
                {/* image on the right */}
                <div className="basis-1/2 grid justify-items-center">
                    <img className="object-cover md:h-48 md:w-96 rounded-lg shadow-md" src="https://images.unsplash.com/photo-1444962668425-360f59fa2c24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                </div>
                {/* content on left */}
                <div className="basis-1/2 p-3">
                    <h2 className="text-3xl md:text-6xl font-bold md:font-extrabold">Learning <span className="text-amber-300">Tailwind</span></h2>
                    <p>Just learning tailwind because I wanted to learn more about UI frameworks and make good looking landing pages using gatsby. Building up projects is how I best learn. How about you? Tag me @juanjuanzero and let me know!</p>
                </div>
            </div>
            <div className="hidden lg:block h-48 w-96 bg-amber-300 rounded-full absolute -right-0.5 -bottom-5 -z-10"></div>
        </section>
    </>
)

export default HeroImageRight;
```

So we add an accent dive that is positioned absolute, relative from its parent. This is why you'll see that the section has a relative className. This accent div will actually be hidden for smaller screens and only display when it hits the lg breakpoint, which sets the display block with `lg:block`. We'll want to it display the image at the top on mobile so its going to start with `flex-col` and then at the medium breakpoint we'll reverse it with `flex-col-reverse`.

# Services
The sevices section will be a list of services it will be 3 to start they will be displayed in grid featuring an icon, and a small one word or phrase service that is added. 

```shell
code ./src/components/services.md
```

We'll create another section and add the following code.

```js
import React from 'react'
import iconMug from "../images/icons/mug-hot.svg"
import iconShop from "../images/icons/shop.svg"
import iconThumbs from "../images/icons/thumbs-up.svg"

const services = [
    { href: "../images/icons/mug-hot.svg", icon: iconMug, title: "Consulting", subtitle: "Let's work together to find your best solution that fits you best" },
    { href: "../images/icons/mug-hot.svg", icon: iconShop, title: "E-Commerce", subtitle: "Get a modern shop up and running in no time" },
    { href: "../images/icons/mug-hot.svg", icon: iconThumbs, title: "Social Media", subtitle: "Build an audience for your brand, and stand out in the crowd" },
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
```

See how we are using a services array and maping over them? This is a react pattern that you see often. If you want to convert this into a theme for gatsby this list can be added as part of the site metadata. Also we learned more about how webpack treats icons, for gatsby, we bring the icons as static elemens. There is a way to bring them in as components but we'd need to use another plugin.

## Testimonials
Next we will use create testimonials. This will be similar in the function of the services list where we display a few block, so we'll start with a

```shell
code ./src/components/testimonialList.js
```

## Questions
- What is postcss?
PostCss is a css processor, that compiles your css into css that works for any thing. In this case, it compiles tailwind classes you type in your files into css that you can use.