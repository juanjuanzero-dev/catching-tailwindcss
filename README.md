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

## Questions
- What is postcss?
PostCss is a css processor, that compiles your css into css that works for any thing. In this case, it compiles tailwind classes you type in your files into css that you can use.