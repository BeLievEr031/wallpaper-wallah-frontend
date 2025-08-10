import Input from "./Input"
import TrendingCategoryCard from "./TrendingCategoryCard"

function Hero() {
    return (
        <div className="grid grid-cols-[3fr_1fr] pt-11 font-roboto">
            <div className="">
                <h1 className="text-4xl font-semibold font-rubik tracking-wide text-shadow-2xs inset-0">
                    Download Stunning
                    <br />
                    Wallpapers in Seconds
                </h1>
                <p className="text-xl mt-3 text-black/50">
                    Discover, search, and download high-resolution wallpapers for your phone, tablet,
                    <br />
                    or desktop — all for free.
                </p>
                <div className="pt-8 w-full flex gap-2">
                    <Input placeholder="Search for Anime, Nature..." />
                    <button className="px-6 py-3 text-white font-semibold font-rubik tracking-wider shadow-lg bg-blue-600 hover:bg-blue-700 transition-all rounded-md">
                        Search
                    </button>
                </div>
            </div>
            <TrendingCategoryCard />
        </div>
    )
}

export default Hero