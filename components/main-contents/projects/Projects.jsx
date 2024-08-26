import Title from "@/components/shared/Title"
import { useEffect, useState } from "react"
import CategorySelect from "./category-select/CategorySelect"
import projectImage from '@/images/project.jpg'
import Project from "./project/Project"

const categories = [
  'All', 'Web design', 'Application', 'Web development'
]

const dummyProjects = [
  {
    id: 1,
    title: 'Meta Blog NEXT 1',
    tags: ['Web development', 'Application'],
    link: 'www.google.com',
    image: projectImage
  },
  {
    id: 2,
    title: 'Meta Blog NEXT 2',
    tags: ['Application', 'Web design'],
    link: 'www.google.com',
    image: projectImage
  },
  {
    id: 3,
    title: 'Meta Blog NEXT 3',
    tags: ['Web development', 'Web design'],
    link: 'www.google.com',
    image: projectImage
  },
  {
    id: 4,
    title: 'Meta Blog NEXT 4',
    tags: ['Web development', 'Web design'],
    link: 'www.google.com',
    image: projectImage
  },
  {
    id: 5,
    title: 'Meta Blog NEXT 5',
    tags: ['Application', 'Web design'],
    link: 'www.google.com',
    image: projectImage
  },
  {
    id: 6,
    title: 'Meta Blog NEXT 6',
    tags: ['Web development', 'Application'],
    link: 'www.google.com',
    image: projectImage
  },
  {
    id: 7,
    title: 'Meta Blog NEXT 7',
    tags: ['Web design'],
    link: 'www.google.com',
    image: projectImage
  },
  {
    id: 8,
    title: 'Meta Blog NEXT 8',
    tags: ['Web development'],
    link: 'www.google.com',
    image: projectImage
  },
];


const Projects = ({ selected }) => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  return (
    <div className={`duration-300 hidden gap-7 ${selected === 'Projects' && 'nav-active'}`}>
      <Title text="Projects" />
      <div className="gap-3 cursor-pointer hidden sm:flex">
        {
          categories.map((category, index) => <span onClick={() => setSelectedCategory(category)} className={`primary-text ${selectedCategory === category ? 'highlight-text hover-highlight-text' : 'hover-secondary-text'}`} key={index}>{category}</span>)
        }
      </div>
      <CategorySelect selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} categories={categories} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          dummyProjects.map((project, index) => <Project data={project} selectedCategory={selectedCategory} key={index} />)
        }
      </div>
    </div>
  )
}

export default Projects