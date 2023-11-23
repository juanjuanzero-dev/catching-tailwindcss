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



## Questions
- What is postcss?
PostCss is a css processor, that compiles your css into css that works for any thing. In this case, it compiles tailwind classes you type in your files into css that you can use.