import * as React from "react"

const Footer = ({ siteTitle }) => (
    <footer className="">
    {`${siteTitle}`} © {new Date().getFullYear()} &middot; Built with
    {` `}
    <a href="https://www.gatsbyjs.com">Gatsby</a>
  </footer>
)

export default Footer
