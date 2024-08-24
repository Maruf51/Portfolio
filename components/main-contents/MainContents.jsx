'use client'

import Navbar from "../navbar/Navbar"
import About from "./about/About"
import Resume from "./resume/Resume"
import Blog from "./blog/Blog"
import Contact from "./contact/Contact"
import Projects from "./projects/Projects"

const MainContents = ({ selectedNav, setSelectedNav }) => {
    return <div className="w-full h-auto min-h-96 primary-bg rounded-3xl border primary-border lg:relative p-5 md:p-7">
        <Navbar selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
        <About selected={selectedNav} />
        <Resume selected={selectedNav} />
        <Projects selected={selectedNav} />
        <Blog selected={selectedNav} />
        <Contact selected={selectedNav} />
    </div>
}

export default MainContents