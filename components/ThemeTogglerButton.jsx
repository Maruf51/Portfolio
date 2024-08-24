'use client'

import { useEffect, useState } from "react";
import '@/styles/theme-toggler.css'
import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "next-themes";

export default function ThemeTogglerButton() {
    // const [theme, setTheme] = useState('dark');
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <span className="secondary-bg rounded-lg w-10 h-10 sm:h-9 flex justify-center items-center cursor-pointer">
        <p>···</p>
    </span>;

    const toggleTheme = (e) => {
        if (e === true) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    };
    return (
        <span onClick={() => {
            toggleTheme(theme === 'dark' ? false : true)
        }} className="secondary-bg rounded-lg w-10 h-10 sm:h-9 flex justify-center items-center cursor-pointer">
            <FaMoon className={`w-4 h-4 secondary-text absolute ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`} />
            <FaSun className={`w-4 h-4 secondary-text absolute ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`} />
        </span>
    )
}