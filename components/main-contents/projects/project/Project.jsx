import Image from "next/image";
import { IoEyeSharp } from "react-icons/io5";

const Project = ({ data }) => {
    const { title, tags, image, link } = data
    return (
        <div className="w-full group/project cursor-pointer project-animation">
            <div className="w-full h-48 overflow-hidden rounded-2xl relative">
                <Image className="w-full h-full group-hover/project:scale-110 object-cover duration-300" src={image} width={300} height={300} sizes="300px" alt="Profile" />
                <div className="w-full h-full absolute left-0 top-0 flex justify-center items-center opacity-0 group-hover/project:opacity-100 duration-300 bg-[#ffffff4d] dark:bg-[#00000071]">
                    <IoEyeSharp className="secondary-bg w-14 sm:w-12 h-14 sm:h-12 rounded-lg p-4 sm:p-[14px] highlight-text scale-0 group-hover/project:scale-100" />
                </div>
            </div>
            <h1 className="primary-text font-medium mt-3 px-3">{title}</h1>
            <div className="flex gap-3 text-sm secondary-text px-3">
                {
                    tags.map((tag, index) => <p key={index}>{tag}</p>)
                }
            </div>
        </div>
    )
}

export default Project;