'use client'

const Navbar = ({ selectedNav, setSelectedNav }) => {
    return <nav className="px-5 sm:px-10 w-full h-16 z-10 fixed lg:absolute bottom-0 lg:bottom-auto left-0 lg:left-auto lg:top-0 lg:right-0 lg:w-auto lg:h-14 lg:px-0">
        <div className="bg-[#cbcbcbd1] dark:bg-[#282829cc] w-full h-full border-t primary-border rounded-tl-3xl rounded-tr-3xl backdrop-blur-sm flex items-center justify-center gap-5 sm:gap-8 text-sm sm:text-base primary-text font-medium lg:px-8 lg:border-l lg:border-b lg:border-t-0 lg:rounded-tl-none lg:rounded-bl-3xl select-none">
            <span onClick={() => setSelectedNav('About')} className={`cursor-pointer py-3 ${selectedNav === 'About' && 'highlight-text'}`}>About</span>
            <span onClick={() => setSelectedNav('Resume')} className={`cursor-pointer py-3 ${selectedNav === 'Resume' && 'highlight-text'}`}>Resume</span>
            <span onClick={() => setSelectedNav('Projects')} className={`cursor-pointer py-3 ${selectedNav === 'Projects' && 'highlight-text'}`}>Projects</span>
            <span onClick={() => setSelectedNav('Blog')} className={`cursor-pointer py-3 ${selectedNav === 'Blog' && 'highlight-text'}`}>Blog</span>
            <span onClick={() => setSelectedNav('Contact')} className={`cursor-pointer py-3 ${selectedNav === 'Contact' && 'highlight-text'}`}>Contact</span>
        </div>
    </nav>
}

export default Navbar