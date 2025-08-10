
function Footer() {
    return (
        <div className="pt-18 font-rubik">
            <h1 className="text-3xl font-semibold font-rubik text-zinc-900 capitalize">Explore other wallpaper categories</h1>

            <div className="grid grid-cols-5 gap-x-6">
                <div className="mt-4">
                    <h1 className="text-lg font-semibold">Anime</h1>
                    <ul className="flex flex-wrap items-center gap-x-0.5 text-lg font-medium text-gray-700 list-none p-0 m-0">
                        {[
                            "Kuromi",
                            "Cinnamoroll",
                            "Itachi",
                            "Sanrio",
                            "My melody",
                            "Luffy gear 5",
                            "Alastor",
                        ].map((item, index, arr) => (
                            <li key={item} className="flex items-center">
                                {index !== 0 && <span className="mr-0.5 text-xs">·</span>}
                                <span className="hover:text-blue-600 transition-colors duration-200 cursor-pointer text-sm">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>

                </div>

                <div className="mt-4">
                    <h1 className="text-lg font-semibold">Animals</h1>
                    <ul className="flex flex-wrap items-center gap-x-2 text-lg font-medium text-gray-700 list-none p-0 m-0">
                        {[
                            "Butterfly",
                            "Wolf",
                            "Cat",
                            "Dog",
                            "Gorilla",
                            "Cute panda",
                            "Leopard print",
                        ].map((item, index) => (
                            <li key={item} className="flex items-center">
                                {index !== 0 && <span className="mr-0.5 text-xs">·</span>}
                                <span className="hover:text-blue-600 transition-colors duration-200 cursor-pointer text-sm">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>


                </div>

            </div>
        </div>
    )
}

export default Footer