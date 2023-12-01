import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="flex flex-col shadow-md p-4 md:flex-row md:justify-between">
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
