const Title = ({text = 'TITLE'}) => {
  return (
    <div>
        <h1 className="text-2xl md:text-3xl font-semibold primary-text">{text}</h1>
        <div className="w-12 h-1.5 mt-2 linear-highlight-bg rounded-full"></div>
    </div>
  )
}

export default Title