const Blog = ({ selected }) => {
  return (
    <div className={`duration-300 hidden ${selected === 'Blog' && 'nav-active'}`}>
      <h1>Blog</h1>
    </div>
  )
}

export default Blog