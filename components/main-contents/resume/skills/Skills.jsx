import { useEffect, useRef, useState } from "react"
import { FaArrowRight, FaRightLong, FaSortDown } from "react-icons/fa6"


const dummySkills = [
    {
        title: 'HTML',
        rate: 95
    },
    {
        title: 'CSS',
        rate: 90
    },
    {
        title: 'Javascript',
        rate: 75
    },
    {
        title: 'React.js',
        rate: 90
    },
    {
        title: 'Next.js',
        rate: 85
    },
    {
        title: 'Node.js',
        rate: 60
    }
]

const dummyStateManagement = [
    'Redux',
    'Zustand',
    'Context API'
]

const dummyTools = [
    'Github',
    'VS Code',
    'Mongodb Compass',
    'React Devtools'
]

const Skills = ({ selected }) => {
    return (
        <div>
            <h1 className="font-semibold inline text-xl primary-text relative after:absolute after:bottom-0 after:left-[110%] after:w-[150px] after:h-[1px] after:block after:bg-border-color-light dark:after:bg-border-color-dark after:mt-1 after:duration-300 duration-300">My Skills</h1>
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
                <div className="flex flex-col gap-4 lg:col-span-2 lg:w-[90%]">
                    <h2 className="flex gap-2 items-center primary-text text-lg">Languages I Know <FaArrowRight /></h2>
                    {
                        selected === 'Resume' && dummySkills.map((skill, index) => <Languages selected={selected} skill={skill} key={index} />)
                    }
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-0 lg:mt-12">
                    <StateManagement state={dummyStateManagement} />
                    <Tools tools={dummyTools} />
                </div>
            </div>
        </div>
    )
}

export default Skills


const Languages = ({ skill }) => {
    const [isInView, setIsInView] = useState(false);
    const divRef = useRef(null);

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
    }, []);
    return (
        <div >
            <h4 className="secondary-text">{skill.title}</h4>
            <div className="relative">
                <div className={`w-full h-3 secondary-bg rounded-sm overflow-hidden mt-1`}>
                    <div style={{ width: `${skill.rate}%`, transitionDuration: '1s', transitionProperty: 'transform' }} className={`h-full linear-highlight-bg relative ${isInView ? '-translate-x-0' : '-translate-x-full'}`}>
                    </div>
                </div>
                <div style={{ left: `${isInView ? skill.rate : '0'}%`, transitionDuration: '1s', transitionProperty: 'left' }} className={`w-10 h-6 absolute bottom-full duration-300`}>
                    <div className={`bg-[#ff6549] dark:bg-[#ffbc5c] duration-300 w-full h-full flex justify-center items-center absolute bottom-1.5 left-[-50%] rounded-sm`}>
                        <FaSortDown className={`w-5 h-5 text-[#ff6549] dark:text-[#ffbc5c] duration-300 absolute bottom-[-7px]`} />
                        <p className="text-sm text-primary-bg-light dark:text-primary-bg-dark duration-300">{isInView ? skill.rate : 0}%</p>

                    </div>
                </div>
            </div>
            <div ref={divRef}></div>
        </div>
    )
}

const StateManagement = ({ state }) => {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="flex gap-2 items-center primary-text text-lg">State Management <FaArrowRight /></h2>
            <div className="flex flex-col gap-1">
                {
                    state.map((state, index) => <p className="secondary-text flex items-center gap-2" key={index}><FaRightLong />{state}</p>)
                }
            </div>
        </div>
    )
}

const Tools = ({ tools }) => {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="flex gap-2 items-center primary-text text-lg">Tools That I Use <FaArrowRight /></h2>
            <div className="flex flex-col gap-1">
                {
                    tools.map((tool, index) => <p className="secondary-text flex items-center gap-2" key={index}><FaRightLong />{tool}</p>)
                }
            </div>
        </div>
    )
}
