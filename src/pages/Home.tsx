import WallpaperImg from "../assets/wallpaper.jpeg"
import CategoryImg from "../assets/category.jpeg"
import NatureImg from "../assets/nature.jpeg"
function Home() {
    return (
        <div className="min-h-screen">
            <div className="flex justify-between items-center py-4 border-b px-20">
                <h1 className="text-3xl font-bold font-rubik text-blue-700">Wallpaper Wallah</h1>
                <button className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition-all duration-200">
                    Explore
                </button>
            </div>
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

                <div className="pt-16">
                    <h1 className="text-2xl font-semibold font-rubik text-zinc-900 capitalize">Most Popular Wallpapers</h1>
                    <div className="grid grid-cols-8 mt-5 gap-2">
                        <img src={WallpaperImg} alt="WallpaperImg" className="rounded-md" />
                        <img src={WallpaperImg} alt="WallpaperImg" className="rounded-md" />
                        <img src={WallpaperImg} alt="WallpaperImg" className="rounded-md" />
                        <img src={WallpaperImg} alt="WallpaperImg" className="rounded-md" />
                        <img src={WallpaperImg} alt="WallpaperImg" className="rounded-md" />
                        <img src={WallpaperImg} alt="WallpaperImg" className="rounded-md" />
                        <img src={WallpaperImg} alt="WallpaperImg" className="rounded-md" />
                        <img src={WallpaperImg} alt="WallpaperImg" className="rounded-md" />
                        <img src={WallpaperImg} alt="WallpaperImg" className="rounded-md" />
                        <img src={WallpaperImg} alt="WallpaperImg" className="rounded-md" />
                        <img src={WallpaperImg} alt="WallpaperImg" className="rounded-md" />
                        <img src={WallpaperImg} alt="WallpaperImg" className="rounded-md" />
                        <img src={WallpaperImg} alt="WallpaperImg" className="rounded-md" />
                        <img src={WallpaperImg} alt="WallpaperImg" className="rounded-md" />
                        <img src={WallpaperImg} alt="WallpaperImg" className="rounded-md" />
                        <img src={WallpaperImg} alt="WallpaperImg" className="rounded-md" />
                    </div>
                </div>


                <div className="pt-16">
                    <h1 className="text-2xl font-semibold font-rubik text-zinc-900 capitalize">Most Popular Categories</h1>
                    <div className="grid grid-cols-8 mt-5 gap-2">
                        <div className="relative rounded-md overflow-hidden">
                            <img src={CategoryImg} alt="WallpaperImg" className="object-cover" />
                            <h1 className="absolute left-2 bottom-2 font-semibold text-2xl z-[9999999] text-white [-webkit-text-stroke:0.5px_black]">Anime</h1>
                            <div className="absolute top-0 left-0 w-full h-full bg-black/20">

                            </div>
                        </div>
                        <div className="relative rounded-md overflow-hidden">
                            <img src={NatureImg} alt="WallpaperImg" className="object-cover" />
                            <h1 className="absolute left-2 bottom-2 font-semibold text-2xl z-[9999999] text-white [-webkit-text-stroke:0.5px_black]">Nature</h1>
                            <div className="absolute top-0 left-0 w-full h-full bg-black/20">

                            </div>
                        </div>
                        <div className="relative rounded-md overflow-hidden">
                            <img src={CategoryImg} alt="WallpaperImg" className="object-cover" />
                            <h1 className="absolute left-2 bottom-2 font-semibold text-2xl z-[9999999] text-white [-webkit-text-stroke:0.5px_black]">Anime</h1>
                            <div className="absolute top-0 left-0 w-full h-full bg-black/20">

                            </div>
                        </div>
                        <div className="relative rounded-md overflow-hidden">
                            <img src={NatureImg} alt="WallpaperImg" className="object-cover" />
                            <h1 className="absolute left-2 bottom-2 font-semibold text-2xl z-[9999999] text-white [-webkit-text-stroke:0.5px_black]">Nature</h1>
                            <div className="absolute top-0 left-0 w-full h-full bg-black/20">

                            </div>
                        </div>
                        <div className="relative rounded-md overflow-hidden">
                            <img src={CategoryImg} alt="WallpaperImg" className="object-cover" />
                            <h1 className="absolute left-2 bottom-2 font-semibold text-2xl z-[9999999] text-white [-webkit-text-stroke:0.5px_black]">Anime</h1>
                            <div className="absolute top-0 left-0 w-full h-full bg-black/20">

                            </div>
                        </div>
                        <div className="relative rounded-md overflow-hidden">
                            <img src={NatureImg} alt="WallpaperImg" className="object-cover" />
                            <h1 className="absolute left-2 bottom-2 font-semibold text-2xl z-[9999999] text-white [-webkit-text-stroke:0.5px_black]">Nature</h1>
                            <div className="absolute top-0 left-0 w-full h-full bg-black/20">

                            </div>
                        </div>
                        <div className="relative rounded-md overflow-hidden">
                            <img src={CategoryImg} alt="WallpaperImg" className="object-cover" />
                            <h1 className="absolute left-2 bottom-2 font-semibold text-2xl z-[9999999] text-white [-webkit-text-stroke:0.5px_black]">Anime</h1>
                            <div className="absolute top-0 left-0 w-full h-full bg-black/20">

                            </div>
                        </div>
                        <div className="relative rounded-md overflow-hidden">
                            <img src={NatureImg} alt="WallpaperImg" className="object-cover" />
                            <h1 className="absolute left-2 bottom-2 font-semibold text-2xl z-[9999999] text-white [-webkit-text-stroke:0.5px_black]">Nature</h1>
                            <div className="absolute top-0 left-0 w-full h-full bg-black/20">

                            </div>
                        </div>
                        <div className="relative rounded-md overflow-hidden">
                            <img src={CategoryImg} alt="WallpaperImg" className="object-cover" />
                            <h1 className="absolute left-2 bottom-2 font-semibold text-2xl z-[9999999] text-white [-webkit-text-stroke:0.5px_black]">Anime</h1>
                            <div className="absolute top-0 left-0 w-full h-full bg-black/20">

                            </div>
                        </div>
                        <div className="relative rounded-md overflow-hidden">
                            <img src={NatureImg} alt="WallpaperImg" className="object-cover" />
                            <h1 className="absolute left-2 bottom-2 font-semibold text-2xl z-[9999999] text-white [-webkit-text-stroke:0.5px_black]">Nature</h1>
                            <div className="absolute top-0 left-0 w-full h-full bg-black/20">

                            </div>
                        </div>
                        <div className="relative rounded-md overflow-hidden">
                            <img src={CategoryImg} alt="WallpaperImg" className="object-cover" />
                            <h1 className="absolute left-2 bottom-2 font-semibold text-2xl z-[9999999] text-white [-webkit-text-stroke:0.5px_black]">Anime</h1>
                            <div className="absolute top-0 left-0 w-full h-full bg-black/20">

                            </div>
                        </div>
                        <div className="relative rounded-md overflow-hidden">
                            <img src={NatureImg} alt="WallpaperImg" className="object-cover" />
                            <h1 className="absolute left-2 bottom-2 font-semibold text-2xl z-[9999999] text-white [-webkit-text-stroke:0.5px_black]">Nature</h1>
                            <div className="absolute top-0 left-0 w-full h-full bg-black/20">

                            </div>
                        </div>
                        <div className="relative rounded-md overflow-hidden">
                            <img src={CategoryImg} alt="WallpaperImg" className="object-cover" />
                            <h1 className="absolute left-2 bottom-2 font-semibold text-2xl z-[9999999] text-white [-webkit-text-stroke:0.5px_black]">Anime</h1>
                            <div className="absolute top-0 left-0 w-full h-full bg-black/20">

                            </div>
                        </div>
                        <div className="relative rounded-md overflow-hidden">
                            <img src={NatureImg} alt="WallpaperImg" className="object-cover" />
                            <h1 className="absolute left-2 bottom-2 font-semibold text-2xl z-[9999999] text-white [-webkit-text-stroke:0.5px_black]">Nature</h1>
                            <div className="absolute top-0 left-0 w-full h-full bg-black/20">

                            </div>
                        </div>
                        <div className="relative rounded-md overflow-hidden">
                            <img src={CategoryImg} alt="WallpaperImg" className="object-cover" />
                            <h1 className="absolute left-2 bottom-2 font-semibold text-2xl z-[9999999] text-white [-webkit-text-stroke:0.5px_black]">Anime</h1>
                            <div className="absolute top-0 left-0 w-full h-full bg-black/20">

                            </div>
                        </div>
                        <div className="relative rounded-md overflow-hidden">
                            <img src={NatureImg} alt="WallpaperImg" className="object-cover" />
                            <h1 className="absolute left-2 bottom-2 font-semibold text-2xl z-[9999999] text-white [-webkit-text-stroke:0.5px_black]">Nature</h1>
                            <div className="absolute top-0 left-0 w-full h-full bg-black/20">

                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Home