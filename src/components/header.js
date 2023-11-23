import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="flex bg-blue-300 py-4 px-2 justify-between">
      <div><Link className="text-3xl" to="/" >
        {siteTitle}
      </Link></div>
      <div className="flex gap-4">
        <Link className="bg-blue-200" to="#services">Services</Link>
        <Link className="bg-blue-200" to="#testimonials">Testimonials</Link>
        <Link className="bg-blue-200" to="#contact">Contact</Link>
      </div>
    </nav>

  </header>
)

export default Header
