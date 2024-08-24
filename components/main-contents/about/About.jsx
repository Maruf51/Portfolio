import Title from "@/components/shared/Title"
import Work from "./work/Work"
import Details from "./details/Details"

const workData = [
  {
    title: 'Full-Stack Web Development',
    desc: 'Professional development of full-stack applications using the MERN stack with a focus on scalable, performant, and secure solutions.',
    icon: 'dev'
  },
  {
    title: 'Next.js & React.js Development',
    desc: 'Expertise in building dynamic, high-performance web applications with Next.js and React.js, leveraging SSR/SSG for optimal performance and SEO.',
    icon: 'next'
  },
  {
    title: 'API Development & Integration',
    desc: 'Design and implementation of APIs with Node.js and Express, ensuring seamless integration and data flow.',
    icon: 'api'
  },
  {
    title: 'Responsive UI/UX with Tailwind CSS',
    desc: 'Crafting visually stunning, responsive user interfaces with Tailwind CSS, focusing on user experience and mobile-first design principles.',
    icon: 'design'
  },
]

const About = ({ selected }) => {
  return (
    <div className={`duration-300 gap-7 hidden ${selected === 'About' && 'nav-active'}`}>
      <Title text="About Me" />
      <Details />
      <Work workData={workData} />
    </div>
  )
}

export default About