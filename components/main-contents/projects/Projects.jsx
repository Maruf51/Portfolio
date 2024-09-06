import Title from "@/components/shared/Title"
import { useEffect, useState } from "react"
import CategorySelect from "./category-select/CategorySelect"
import Project from "./project/Project"
import { projectData } from "@/assets/data"

const categories = [
  'All', 'Web design', 'Application', 'Web development'
]

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
          projectData.map((project, index) => <Project data={project} selectedCategory={selectedCategory} key={index} />)
        }
      </div>
    </div>
  )
}

export default Projects