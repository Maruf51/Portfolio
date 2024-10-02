import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Image from "next/image";
import { IoEyeSharp } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import { FaCode, FaLink } from 'react-icons/fa6';
import ImageView from '@/components/image-view/ImageView';

const Project = ({ data, selectedCategory }) => {
    const { title, tags, images, link, id } = data;
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
                        <Image className="w-full h-full group-hover/project:scale-110 object-cover object-top duration-300" src={images[0]} width={300} height={300} sizes="300px" alt="Profile" />
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
    const { title, tags, images, links, id, languages, description } = data;
    const [projectCloseAnimation, setProjectCloseAnimation] = useState(null)
    const [selectedImage, setSelectedImage] = useState(images[0])

    const [imageView, setImageView] = useState(null)


    useEffect(() => {
        if (projectCloseAnimation === false) setProjectActive(false)
    }, [projectCloseAnimation])
    return (
        <>
            {
                imageView && <ImageView image={imageView} closeImageView={setImageView} />
            }
            <div className={twMerge('w-full h-full duration-300 opacity-animation bg-[#00000091] dark:bg-[#ffffff4a] backdrop-blur-md', projectCloseAnimation && 'reverse-opacity-animation')} onClick={() => setProjectCloseAnimation(true)} onAnimationEnd={(e) => {
                if (e.animationName === 'reverse-opacity-animation') {
                    setProjectCloseAnimation(false)
                }
            }}>

            </div>
            <div className={twMerge('absolute z-10 primary-bg w-[90%] md:w-[80%] max-h-[80%] h-auto max-w-[1000px] primary-text rounded-xl p-5 xl:p-8 grid grid-cols-1 xl:grid-cols-2 overflow-auto gap-3 xl:gap-8 project-animation', projectCloseAnimation && 'project-animation-hidden')}>
                <div className='md:grid gap-3 grid-cols-5 xl:grid-cols-1'>
                    <Image className="w-full h-[230px] sm:h-[300px] xl:h-auto xl:aspect-[1/.6] rounded-lg object-cover object-top duration-300 mb-2 md:col-span-3 hover:cursor-zoom-in" onClick={() => setImageView(selectedImage)} src={selectedImage} width={300} height={300} sizes="300px 500px 700px" alt="Profile" />
                    <div className='flex gap-1.5 overflow-auto md:col-span-2 md:grid grid-cols-2 md:gap-2.5 md:max-h-[300px] xl:flex grid-rows-[min-content] '>
                        {
                            images.map((image, index) =>
                                <Image
                                    onClick={() => setSelectedImage(image)}
                                    key={index}
                                    className={twMerge("w-[100px] aspect-[1/0.65] shrink-0 md:w-full xl:w-[120px] rounded-md object-cover object-top duration-300 cursor-pointer", image === selectedImage && 'border highlight-border')}
                                    src={image}
                                    width={100}
                                    height={75}
                                    sizes="100px"
                                    alt="Profile"
                                />)
                        }
                    </div>
                </div>
                <div className=''>
                    <h1 className='text-2xl font-medium mb-2.5 flex items-center gap-3'>
                        {title}
                        {/* <a target='_blank' href={links[1]}>
                            <FaCode className='hover:border-b border-blue' />
                        </a> */}
                        <a target='_blank' href={links[0]}>
                            <FaLink className='hover:border-b border-blue' />
                        </a>
                    </h1>
                    <div className='flex gap-2 leading-4 mb-1.5'>
                        <p>Tags: </p>
                        <div
                            className='flex flex-wrap gap-2 secondary-text'
                        >
                            {
                                tags.map((tag, index) =>
                                    <>
                                        <p className='underline' key={index}>{tag}</p>
                                        {tags.length !== index + 1 && <span className=' font-extrabold'>·</span>}
                                    </>)
                            }
                        </div>
                    </div>
                    <div className='flex gap-2 mb-1.5'>
                        <p>Link: </p>
                        <a className=' break-all' target='_blank' href={links[0]}>{links[0]}</a>
                    </div>
                    <div className='flex gap-2 leading-4 mb-1.5'>
                        <p>Langs: </p>
                        <div className='flex flex-wrap gap-2 secondary-text'>
                            {
                                languages.map((language, index) =>
                                    <>
                                        <p>{language}</p>
                                        {languages.length !== index + 1 && <span className=' font-extrabold'>·</span>}
                                    </>)
                            }
                        </div>
                    </div>
                    <div className='mt-3'>
                        <h2 className='primary-text font-medium text-xl underline mb-2'>About this website:</h2>
                        <ul className='text-sm secondary-text flex flex-col gap-1'>
                            {
                                description?.map((desc, index) => <li key={index} className=' marker:text-black dark:marker:text-white list-disc ml-4'>{desc}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}