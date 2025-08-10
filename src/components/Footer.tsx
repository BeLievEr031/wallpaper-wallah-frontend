import CategoryAndSubCategory from "./CategoryAndSubCategory"
import Container from "./Container"

function Footer() {
    return (
        <div className="mt-16 py-2 font-rubik border-t-2">
            <Container>
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
            </Container>
        </div>
    )
}

export default Footer