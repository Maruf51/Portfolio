'use client'

import Title from "@/components/shared/Title"
import Skills from "./skills/Skills"
import { IoBookOutline } from "react-icons/io5"
import { useEffect, useState } from "react"

const dummyEducation = [
  {
    institute: 'Satkhira Polytechnic Institute',
    year: '2018 ~ 2022',
    desc: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
  },
  {
    institute: 'Parulia S.S. High School',
    year: '2013 ~ 2018',
    desc: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
  },
  {
    institute: 'Uttar Sakhipur Govt. Primary School',
    year: '2008 ~ 2013',
    desc: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
  },
]

const Resume = ({ selected }) => {
  return (
    <div className={`duration-300 gap-7 hidden ${selected === 'Resume' && 'nav-active'}`}>
      <Title text="Resume" />
      <div className="flex flex-col gap-5 overflow-hidden">
        <div className="flex items-center relative duration-300 before:duration-300 before:w-[1px] before:h-[30px] before:absolute before:left-[24px] before:top-full before:bg-secondary-bg-light dark:before:bg-secondary-bg-dark">
          <div className="w-12 xl:w-12 h-12 xl:h-12 rounded-2xl relative border-design shrink-0 z-[1]">
            <IoBookOutline className="z-[2] w-5 h-5 highlight-text" />
          </div>
          <h1 className="ml-3 text-xl font-medium primary-text">Education</h1>
        </div>
        {
          dummyEducation.map((data, index) => <EducationItem key={index} data={data} />)
        }
      </div>
      <Skills selected={selected} />
    </div>
  )
}

export default Resume

const EducationItem = ({ data }) => {
  const { institute, year, desc } = data
  return (
    <div className="flex flex-col gap-1 ml-[60px] relative duration-300 before:duration-300 before:w-[1px] before:h-[150%] before:absolute before:-left-[36px] before:top-[-50%] last:before:h-[100%] last:before:top-[-95%] before:bg-secondary-bg-light dark:before:bg-secondary-bg-dark">
      <h3 className=" primary-text duration-300 before:duration-300 after:duration-300 before:w-4 before:h-4 before:absolute before:top-[3px] before:-left-[43px] before:rounded-full before:bg-secondary-bg-light dark:before:bg-secondary-bg-dark after:w-2 after:h-2 after:absolute after:top-[7px] after:-left-[39px] after:rounded-full after:bg-highlight-light dark:after:bg-highlight-dark after:z-[1]">{institute}</h3>
      <p className="highlight-text text-sm">{year}</p>
      <p className="secondary-text text-sm">{desc}</p>
    </div>
  )
}