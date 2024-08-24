import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

const Project = ({ data, selectedCategory }) => {
    const { title, tags, image, link, id } = data
    const [exists, setExists] = useState(selectedCategory)
    const [isInView, setIsInView] = useState(false);
    const divRef = useRef(null);

    useEffect(() => {
        if (selectedCategory === 'All') {
            setExists(true)
        } else {
            const exist = tags.includes(selectedCategory)
            setExists(exist)
        }

        setIsInView(false)
    }, [selectedCategory])
    

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    // Optionally unobserve the element
                    observer.unobserve(divRef.current);
                }
            },
            {
                threshold: 0.1, // Adjust this as needed
            }
        );

        if (divRef.current) {
            observer.observe(divRef.current);
        }

        // Cleanup observer on component unmount
        return () => {
            if (divRef.current) {
                observer.unobserve(divRef.current);
            }
        };
    }, [selectedCategory]);
    return (
        <div className={twMerge('w-full group/project cursor-pointer scale-0', isInView && 'project-animation', !exists && 'project-animation-hidden')}>
            <div className="w-full h-48 overflow-hidden rounded-2xl relative">
                <Image className="w-full h-full group-hover/project:scale-110 object-cover duration-300" src={image} width={300} height={300} sizes="300px" alt="Profile" />
                <div className="w-full h-full absolute left-0 top-0 flex justify-center items-center opacity-0 group-hover/project:opacity-100 duration-300 bg-[#ffffff4d] dark:bg-[#00000071]">
                    <IoEyeSharp className="secondary-bg w-14 sm:w-12 h-14 sm:h-12 rounded-lg p-4 sm:p-[14px] highlight-text scale-0 group-hover/project:scale-100" />
                </div>
            </div>
            <h1 className="primary-text font-medium mt-3 px-3">{title}</h1>
            <div ref={divRef} className="flex gap-3 text-sm secondary-text px-3">
                {
                    tags.map((tag, index) => <p key={index}>{tag}</p>)
                }
            </div>
        </div>
    )
}

export default Project;