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
code ./src/components/services.js
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

Here is the code that im going to put in:

```js
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
```

In gatsby a way you can put in your static assets is using the import statement. You can't just put a reference as a part of testimonial object. This is a thing with how webpack packages these assets up. The design we want to use forces the assets to stay as a row even on mobile which is why we use `flex-nowrap` to let the content overflow off the page. Then we use `overflow-x-auto` so that when we do reach a breakpoint users can scroll to see the content.

## Contact Form
Here we will create our last section, our call to action to get customers to send us their email with a message. 

```shell
code ./src/components/contact.js
```

Here we are using form2channel to send emails to our own email. Its a free service and build for devs. If you don't want to use that you can use formspree or other form to email providers.

```js
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
```

## Conclusion
We've reached the end of this video on learning the basics of working with tailwind and gatsby. You essentially can create components and construct them using this pattern. We didn't get into other pages with gatsby that comes with it. Here are some things you can do to move forward:

### Tailwind
- implement dark mode

### React
- make the navbar collapse into a hamburger to open a menu for smaller screens.

### Gatsby
- add a blog to the site
- add a page to say thank you for adding the email

## Questions
- What is postcss?
PostCss is a css processor, that compiles your css into css that works for any thing. In this case, it compiles tailwind classes you type in your files into css that you can use.