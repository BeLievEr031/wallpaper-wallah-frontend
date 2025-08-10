import CategoryAndSubCategory from "./CategoryAndSubCategory"

function Footer() {
    return (
        <div className="pt-18 font-rubik">
            <h1 className="text-3xl font-semibold font-rubik text-zinc-900 capitalize">Explore other wallpaper categories</h1>

            <div className="grid grid-cols-5 gap-x-6">
                <CategoryAndSubCategory
                    name="Animal"
                    subcategory={[
                        "Kuromi",
                        "Cinnamoroll",
                        "Itachi",
                        "Sanrio",
                        "My melody",
                        "Luffy gear 5",
                        "Alastor",
                    ]}
                />

            </div>
        </div>
    )
}

export default Footer