'use client'

import GetIcon from "@/util/getIcon"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const Work = ({ workData }) => {
    // const theme = document.documentElement.className
    const [newTheme, setNewTheme] = useState(null)
    const { theme } = useTheme()

    useEffect(() => {
        if (theme) setNewTheme(theme)
    }, [theme])

    return <div>
        <h1 className="font-semibold inline text-xl primary-text relative after:absolute after:bottom-0 after:left-[107%] after:w-[150px] after:h-[1px] after:block after:bg-border-color-light dark:after:bg-border-color-dark after:mt-1 after:duration-300 duration-300">What I&apos;m Doing</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
            {
                workData.map((data, index) => {
                    return (
                        <div key={index} className="p-5 relative secondary-border-design rounded-2xl sm:justify-start">
                            <div className="z-[1] w-full h-full flex flex-col gap-3 sm:gap-3">
                                <div className="flex gap-3 items-center">
                                    {/* <Image className="w-[50px] h-[50px]" src={data.image} width={50} height={50} sizes="50px" alt="Profile" /> */}
                                    <div className="w-[50px] h-[50px] flex justify-center items-center">
                                        {
                                            !newTheme && <p className="primary-text text-2xl">···</p>
                                        }
                                        {
                                            newTheme && <GetIcon type={data.icon} theme={newTheme} />
                                        }
                                    </div>
                                    <h2 className="primary-text font-medium text-lg underline">{data.title}</h2>
                                </div>
                                <p className="text-left secondary-text text-sm sm:text-sm w-full">{data.desc}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
}

export default Work