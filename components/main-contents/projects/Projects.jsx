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
    title: 'Meta Blog NEXT',
    tags: ['Web development', 'Application'],
    link: 'www.google.com',
    image: projectImage
  },
  {
    title: 'Meta Blog NEXT',
    tags: ['Application', 'Web design'],
    link: 'www.google.com',
    image: projectImage
  },
  {
    title: 'Meta Blog NEXT',
    tags: ['Web development', 'Web design'],
    link: 'www.google.com',
    image: projectImage
  },
  {
    title: 'Meta Blog NEXT',
    tags: ['Web development', 'Web design'],
    link: 'www.google.com',
    image: projectImage
  },
  {
    title: 'Meta Blog NEXT',
    tags: ['Application', 'Web design'],
    link: 'www.google.com',
    image: projectImage
  },
  {
    title: 'Meta Blog NEXT',
    tags: ['Web development', 'Application'],
    link: 'www.google.com',
    image: projectImage
  },
  {
    title: 'Meta Blog NEXT',
    tags: ['Web design'],
    link: 'www.google.com',
    image: projectImage
  },
  {
    title: 'Meta Blog NEXT',
    tags: ['Web development'],
    link: 'www.google.com',
    image: projectImage
  },
]

const Projects = ({ selected }) => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProjects, setSelectedProjects] = useState(dummyProjects)

  const have = (e) => {
    for (let i = 0; i < e.length; i++) {
      if (e[i] === selectedCategory) {
        return true;
      }
    }
    return false;
  }

  useEffect(() => {
    if (selectedCategory === 'All') {
      setSelectedProjects(dummyProjects)
    } else {
      const selected = dummyProjects.filter(project => have(project.tags))
      setSelectedProjects(selected)
    }
  }, [selectedCategory])

  useEffect(() => {
    setSelectedCategory('All')
  }, [selected])
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
          selectedProjects.map((project, index) => <Project data={project} key={index} />)
        }
      </div>
    </div>
  )
}

export default Projects