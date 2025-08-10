import Container from "../components/Container"
import WallpaperImg from "../assets/wallpaper.jpeg"
import Image from "../components/Image"
import ContentGrid from "../components/ContentGrid"
import Footer from "../components/Footer"
function ViewWallpaper() {
    return (
        <div>
            <Container>
                <div className="grid grid-cols-[2fr_1fr] mt-5 gap-5">
                    <div className="flex justify-center bg-white border-1 rounded-md">
                        <Image src={WallpaperImg} alt="wallpaper" className="w-1/3" />
                    </div>

                    <div className="flex flex-col justify-between border py-3 rounded-md px-4">

                        <div>
                            <h1>Volley ball</h1>
                            <p>Description</p>

                            <h1>Tags: </h1>
                            <div className="pt-2 flex flex-wrap gap-2">
                                <div className="px-4 text-[13.5px] cursor-pointer py-1.5 border border-black rounded-full font-roboto">Anime</div>
                                <div className="px-4 text-[13.5px] cursor-pointer py-1.5 border border-black rounded-full font-roboto">Anime</div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button className="px-6 py-2 rounded-sm w-[75%] bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition-all duration-200 cursor-pointer">
                                Download
                            </button>
                        </div>
                    </div>

                </div>
                <ContentGrid gridTitle="Related wallpapers">
                    <Image src={WallpaperImg} alt="WallpaperImg" className="rounded-md" />
                </ContentGrid>
            </Container>

            <Footer />
        </div>
    )
}

export default ViewWallpaper