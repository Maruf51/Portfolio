import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Image from "next/image";
import { IoEyeSharp } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import { FaCode, FaLink } from 'react-icons/fa6';

const Project = ({ data, selectedCategory }) => {
    const { title, tags, image, link, id } = data;
    const [exists, setExists] = useState(selectedCategory);
    const [isInView, setIsInView] = useState(false);
    const divRef = useRef(null);
    const [projectActive, setProjectActive] = useState(false);

    useEffect(() => {
        if (selectedCategory === 'All') {
            setExists(true);
        } else {
            const exist = tags.includes(selectedCategory);
            setExists(exist);
        }

        setIsInView(false);
    }, [selectedCategory]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(divRef.current);
                }
            },
            { threshold: 0.1 }
        );

        if (divRef.current) {
            observer.observe(divRef.current);
        }

        return () => {
            if (divRef.current) {
                observer.unobserve(divRef.current);
            }
        };
    }, [selectedCategory]);

    return (
        <>
            <div
                onClick={() => setProjectActive(true)}
                className={twMerge('w-full group/project cursor-pointer scale-0', isInView && 'project-animation', !exists && 'project-animation-hidden')}
            >
                <div className={twMerge('duration-300', projectActive && 'opacity-0')}>
                    <div className="w-full h-48 overflow-hidden rounded-2xl relative">
                        <Image className="w-full h-full group-hover/project:scale-110 object-cover duration-300" src={image} width={300} height={300} sizes="300px" alt="Profile" />
                        <div className="w-full h-full absolute left-0 top-0 flex justify-center items-center opacity-0 group-hover/project:opacity-100 duration-300 bg-[#ffffff4d] dark:bg-[#00000071]">
                            <IoEyeSharp className="secondary-bg w-14 sm:w-12 h-14 sm:h-12 rounded-lg p-4 sm:p-[14px] highlight-text scale-0 group-hover/project:scale-100" />
                        </div>
                    </div>
                    <h1 className="primary-text font-medium mt-3 px-3">{title}</h1>
                    <div ref={divRef} className="flex gap-3 text-sm secondary-text mx-3 overflow-hidden text-ellipsis line-clamp-1">
                        {
                            tags.map((tag, index) => <p className=' whitespace-nowrap inline' key={index}>{tag}</p>)
                        }
                    </div>
                </div>
            </div>
            {projectActive && ReactDOM.createPortal(
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                    <ActiveProject projectActive={projectActive} setProjectActive={setProjectActive} data={data} />
                </div>,
                document.body
            )}
        </>
    );
}

export default Project;


const ActiveProject = ({ projectActive, setProjectActive, data }) => {
    const { title, tags, image, link, id } = data;
    const [projectCloseAnimation, setProjectCloseAnimation] = useState(null)


    useEffect(() => {
        if (projectCloseAnimation === false) setProjectActive(false)
    }, [projectCloseAnimation])
    return (
        <>
            <div className={twMerge('w-full h-full duration-300 opacity-animation bg-[#00000091] dark:bg-[#ffffff4a] backdrop-blur-md', projectCloseAnimation && 'reverse-opacity-animation')} onClick={() => setProjectCloseAnimation(true)} onAnimationEnd={(e) => {
                if (e.animationName === 'reverse-opacity-animation') {
                    setProjectCloseAnimation(false)
                }
            }}>

            </div>
            <div className={twMerge('absolute z-10 primary-bg w-[90%] md:w-[80%] max-h-[80%] h-auto max-w-[1000px] primary-text rounded-xl p-5 xl:p-8 grid grid-cols-1 xl:grid-cols-2 overflow-auto gap-3 xl:gap-8 project-animation', projectCloseAnimation && 'project-animation-hidden')}>
                <div className='md:grid gap-3 grid-cols-5 xl:grid-cols-1'>
                    <Image className="w-full h-[230px] sm:h-[300px] xl:h-auto xl:aspect-[1/.6] rounded-lg object-cover duration-300 mb-2 md:col-span-3" src={image} width={300} height={300} sizes="300px 500px 700px" alt="Profile" />
                    <div className='flex gap-1.5 overflow-auto md:col-span-2 md:grid grid-cols-2 md:gap-2.5 md:max-h-[300px] xl:flex'>
                        <Image className="w-[100px] aspect-[1/0.65] shrink-0 md:w-full xl:w-[120px] rounded-md object-cover duration-300" src={image} width={100} height={75} sizes="100px" alt="Profile" />
                        <Image className="w-[100px] aspect-[1/0.65] shrink-0 md:w-full xl:w-[120px] rounded-md object-cover duration-300" src={image} width={100} height={75} sizes="100px" alt="Profile" />
                        <Image className="w-[100px] aspect-[1/0.65] shrink-0 md:w-full xl:w-[120px] rounded-md object-cover duration-300" src={image} width={100} height={75} sizes="100px" alt="Profile" />
                        <Image className="w-[100px] aspect-[1/0.65] shrink-0 md:w-full xl:w-[120px] rounded-md object-cover duration-300" src={image} width={100} height={75} sizes="100px" alt="Profile" />
                        <Image className="w-[100px] aspect-[1/0.65] shrink-0 md:w-full xl:w-[120px] rounded-md object-cover duration-300" src={image} width={100} height={75} sizes="100px" alt="Profile" />
                        <Image className="w-[100px] aspect-[1/0.65] shrink-0 md:w-full xl:w-[120px] rounded-md object-cover duration-300" src={image} width={100} height={75} sizes="100px" alt="Profile" />
                        <Image className="w-[100px] aspect-[1/0.65] shrink-0 md:w-full xl:w-[120px] rounded-md object-cover duration-300" src={image} width={100} height={75} sizes="100px" alt="Profile" />
                    </div>
                </div>
                <div className=''>
                    <h1 className='text-2xl font-medium mb-2.5 flex items-center gap-3'>
                        {title}
                        <a href="#">
                            <FaCode className='hover:border-b border-blue' />
                        </a>
                        <a href="#">
                            <FaLink className='hover:border-b border-blue' />
                        </a>
                    </h1>
                    <div className='flex gap-2 leading-4 mb-1.5'>
                        <p>Tags: </p>
                        <div className='flex flex-wrap gap-2 secondary-text'>
                            {
                                tags.map((tag, index) => <p className='underline' key={index}>{tag}</p>)
                            }
                        </div>
                    </div>
                    <div className='flex gap-2 mb-1.5'>
                        <p>Link: </p>
                        <a className=' break-all' target='_blank' href="https://maruf-portfolio-pied.vercel.app/">https://maruf-portfolio-pied.vercel.app/</a>
                    </div>
                    <div className='flex gap-2 leading-4 mb-1.5'>
                        <p>Language: </p>
                        <div className='flex flex-wrap gap-2 secondary-text'>
                            <p>Next.js</p>
                            <p>Javascript</p>
                            <p>Tailwind Css</p>
                            <p>Socket.io</p>
                            <p>Socket.io</p>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <h2 className='primary-text font-medium text-xl underline mb-2'>About this website:</h2>
                        <ul className='text-sm secondary-text flex flex-col gap-1'>
                            <li className=' marker:text-black dark:marker:text-white list-disc ml-4'>Chat with ease on Chat App, where every conversation is seamless and secure.</li>
                            <li className=' marker:text-black dark:marker:text-white list-disc ml-4'>Join Chat App for instant messaging and vibrant discussions!</li>
                            <li className=' marker:text-black dark:marker:text-white list-disc ml-4'>Experience real-time chatting with Chat App fast, fun, and user-friendly.</li>
                            <li className=' marker:text-black dark:marker:text-white list-disc ml-4'>Connect and communicate effortlessly on Chat App, your go-to chat hub.</li>
                            <li className=' marker:text-black dark:marker:text-white list-disc ml-4'>Meet new people and share ideas on Chat App, where chatting is made simple.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}