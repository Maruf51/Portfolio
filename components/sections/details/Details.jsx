'use client'

import Image from "next/image"
import photo from '@/images/maruf.jpg'
import { IoCalendar, IoMailOutline } from "react-icons/io5";
import { FaAngleDown, FaFacebook, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhoneVolume, FaTwitter } from "react-icons/fa6";
import { useState } from "react";
import ThemeTogglerButton from "@/components/ThemeTogglerButton";
import { twMerge } from "tailwind-merge";

const Details = ({ }) => {
    const [detailsOpen, setDetailsOpen] = useState(false)
    return (
        <div className="w-full xl:w-80 h-[fit-content] primary-bg rounded-3xl p-5 xl:p-7 xl:pb-5 border primary-border relative xl:sticky xl:top-10 shrink-0">
            <div onClick={() => setDetailsOpen(prevState => !prevState)} className={`absolute top-[-0.5px] sm:top-[-1px] right-[0] rounded-se-3xl rounded-bl-3xl w-12 sm:w-32 h-10 text-sm cursor-pointer xl:hidden ${detailsOpen ? 'border-design-highlight' : 'border-design'}`}>
                <button className={twMerge('z-[1] highlight-text', detailsOpen && 'rotate-180 sm:rotate-0')}>
                    <span className="sm:hidden"><FaAngleDown /></span>
                    <span className="hidden sm:block">Show Contacts</span>
                </button>
            </div>
            <div className="flex xl:flex-col gap-5 items-center text-lg font-medium xl:mt-3">
                <Image className="w-[100px] xl:w-[200px] h-[100px] xl:h-[200px] object-cover rounded-2xl" src={photo} width={100} height={100} sizes="100px 200px" alt="Profile" />
                <div className="flex flex-col gap-2 w-full primary-text xl:items-center">
                    <h1>MD. Maruf Hossain</h1>
                    <div className="flex gap-3">
                        <span className="secondary-bg text-sm px-4 xl:px-5 h-10 xl:h-9 flex justify-center items-center sm:py-2 rounded-lg w-[fit-content] secondary-text">Web Developer</span>
                        <ThemeTogglerButton />
                    </div>
                </div>
            </div>
            <div className={` duration-300 h-auto overflow-hidden xl:opacity-100 xl:max-h-[max-content] xl:mt-5 ${detailsOpen ? 'opacity-100 mt-5 max-h-96 md:max-h-56' : 'opacity-0 max-h-0 mt-0'}`}>
                <div className={`border-t primary-border py-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 w-full xl:gap-5 ${detailsOpen ? 'gap-5' : 'gap-0'}`}>
                    <div className="gap-3 flex items-center">
                        <div className="w-14 xl:w-12 h-14 xl:h-12 rounded-2xl relative border-design shrink-0">
                            <IoMailOutline className="z-[1] w-5 h-5 highlight-text" />
                        </div>
                        <div className="text-sm primary-text overflow-hidden">
                            <h3 className="secondary-text">EMAIL</h3>
                            <a href="mailto:marufhossain.main@gmail.com" className=" line-clamp-1">marufhossain.main@gmail.com</a>
                        </div>
                    </div>
                    <div className="gap-3 flex items-center">
                        <div className="w-14 xl:w-12 h-14 xl:h-12 rounded-2xl relative border-design shrink-0">
                            <FaPhoneVolume className="z-[1] w-5 h-5 highlight-text" />
                        </div>
                        <div className="text-sm primary-text overflow-hidden">
                            <h3 className="secondary-text">PHONE</h3>
                            <a href="tel:01993980666" className=" line-clamp-1">+88 01993-980666</a>
                        </div>
                    </div>
                    <div className="gap-3 flex items-center">
                        <div className="w-14 xl:w-12 h-14 xl:h-12 rounded-2xl relative border-design shrink-0">
                            <IoCalendar className="z-[1] w-5 h-5 highlight-text" />
                        </div>
                        <div className="text-sm primary-text overflow-hidden">
                            <h3 className="secondary-text">BIRTHDAY</h3>
                            <p>June 29, 2002</p>
                        </div>
                    </div>
                    <div className="gap-3 flex items-center">
                        <div className="w-14 xl:w-12 h-14 xl:h-12 rounded-2xl relative border-design shrink-0">
                            <FaLocationDot className="z-[1] w-5 h-5 highlight-text" />
                        </div>
                        <div className="text-sm primary-text overflow-hidden">
                            <h3 className="secondary-text">LOCATION</h3>
                            <p>Satkhira, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className="border-t primary-border pt-5 flex w-full gap-5 justify-center">
                    <a href="#" className=" secondary-text hover-highlight-text cursor-pointer">
                        <FaFacebook className="w-5 h-5" />
                    </a>
                    <a href="#" className=" secondary-text hover-highlight-text cursor-pointer">
                        <FaTwitter className="w-5 h-5" />
                    </a>
                    <a href="#" className=" secondary-text hover-highlight-text cursor-pointer">
                        <FaInstagram className="w-5 h-5" />
                    </a>
                    <a href="#" className=" secondary-text hover-highlight-text cursor-pointer">
                        <FaLinkedinIn className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Details