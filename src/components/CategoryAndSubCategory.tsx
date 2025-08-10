import type { ICategory } from "../types"


function CategoryAndSubCategory({ name, subcategory = [] }: ICategory) {
    return (
        <div className="mt-4">
            <h1 className="text-lg font-semibold">{name}</h1>
            <ul className="flex flex-wrap items-center gap-x-0.5 text-lg font-medium text-gray-700 list-none p-0 m-0">
                {subcategory.map((item, index, arr) => (
                    <li key={index} className="flex items-center">
                        {index !== 0 && <span className="mr-0.5 text-xs">·</span>}
                        <span className="hover:text-blue-600 transition-colors duration-200 cursor-pointer text-sm">
                            {item}
                        </span>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default CategoryAndSubCategory