import WallpaperImg from "../assets/wallpaper.jpeg"
import CategoryImg from "../assets/category.jpeg"
import NatureImg from "../assets/nature.jpeg"
import Navbar from "../components/Navbar"
import PopularCategoryCard from "../components/PopularCategoryCard"
import ContentGrid from "../components/ContentGrid"
import Image from "../components/Image"
function Home() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="px-20">
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
                            <input
                                type="text"
                                className="border border-blue-300 w-[450px] rounded-md px-4 py-3 font-roboto focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Search for Anime, Nature..."
                            />
                            <button className="px-6 py-3 text-white font-semibold font-rubik tracking-wider shadow-lg bg-blue-600 hover:bg-blue-700 transition-all rounded-md">
                                Search
                            </button>
                        </div>
                    </div>

                    <div className="bg-blue-500 rounded-2xl overflow-hidden px-4 py-3 shadow-xl drop-shadow-2xl relative">
                        <h1 className="text-[18px] text-white font-rubik font-[400]">Trending categories</h1>

                        <div className="pt-2 flex flex-wrap gap-2 ">
                            <div className="px-4 text-[13.5px] cursor-pointer py-1.5 border border-white rounded-full text-white font-roboto">Anime</div>
                        </div>
                        <div className="blur-2xl h-[150px] w-[150px] -bottom-15 -right-12 bg-blue-800 absolute">
                        </div>
                    </div>
                </div>

                <ContentGrid gridTitle="Most Popular Wallpapers">
                    <Image src={WallpaperImg} alt="WallpaperImg" className="rounded-md" />
                </ContentGrid>

                <ContentGrid gridTitle="Most Popular Categories">
                    <PopularCategoryCard imgSrc={CategoryImg} name="Anime" />
                </ContentGrid>
            </div>

        </div>
    )
}

export default Home