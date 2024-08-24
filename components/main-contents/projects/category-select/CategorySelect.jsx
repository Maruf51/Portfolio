import { useState } from "react"
import { FaSortDown } from "react-icons/fa6"

const CategorySelect = ({ selectedCategory, setSelectedCategory, categories }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="block sm:hidden w-full border primary-border rounded-xl relative z-[1]">
            <div onClick={() => setIsOpen(prevState => !prevState)} className="cursor-pointer w-full h-full px-4 py-2 flex justify-between primary-text">
                <p>{selectedCategory}</p>
                <FaSortDown />
            </div>
            <div className={`overflow-hidden absolute primary-bg top-[110%] left-0 w-full px-1.5 border primary-border rounded-xl ${isOpen ? 'max-h-[174px] py-1.5 opacity-100' : 'max-h-0 opacity-0'}`}>
                {
                    categories.map((category, index) => <p onClick={() => {
                        setSelectedCategory(category)
                        setIsOpen(false)
                    }} className={`${isOpen ? 'px-3 h-10' : 'h-0 px-3'} ${selectedCategory === category ? 'highlight-text' : 'primary-text'} flex items-center rounded-lg hover-secondary-bg text-sm`} key={index}>{category}</p>)
                }
            </div>
        </div>
    )
}

export default CategorySelect