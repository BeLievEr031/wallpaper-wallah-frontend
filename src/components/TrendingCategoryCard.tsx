
function TrendingCategoryCard() {
    return (
        <div className="bg-blue-500 rounded-2xl overflow-hidden px-4 py-3 shadow-xl drop-shadow-2xl relative">
            <h1 className="text-[18px] text-white font-rubik font-[400]">Trending categories</h1>

            <div className="pt-2 flex flex-wrap gap-2 ">
                <div className="px-4 text-[13.5px] cursor-pointer py-1.5 border border-white rounded-full text-white font-roboto">Anime</div>
            </div>
            <div className="blur-2xl h-[150px] w-[150px] -bottom-15 -right-12 bg-blue-800 absolute">
            </div>
        </div>
    )
}

export default TrendingCategoryCard