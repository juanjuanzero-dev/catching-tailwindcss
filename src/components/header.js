import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="flex shadow-md py-4 px-2 justify-between">
      <div><Link className="text-xl bg-red-500" to="/" >
        {siteTitle}
      </Link></div>
      <div className="flex gap-4">
        <Link className="bg-red-500" to="#services">Services</Link>
        <Link className="bg-red-500" to="#testimonials">Testimonials</Link>
        <Link className="bg-red-500" to="#contact">Contact</Link>
      </div>
    </nav>

  </header>
)

export default Header
