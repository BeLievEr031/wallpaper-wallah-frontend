import WallpaperImg from "../assets/wallpaper.jpeg"
import CategoryImg from "../assets/category.jpeg"
import Navbar from "../components/Navbar"
import PopularCategoryCard from "../components/PopularCategoryCard"
import ContentGrid from "../components/ContentGrid"
import Image from "../components/Image"
import Container from "../components/Container"
import Hero from "../components/Hero"
import Stats from "../components/Stats"
import Footer from "../components/Footer"

function Home() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Container>
                <Hero />
                <ContentGrid gridTitle="Most Popular Wallpapers">
                    <Image src={WallpaperImg} alt="WallpaperImg" className="rounded-md" />
                </ContentGrid>
                <ContentGrid gridTitle="Most Popular Categories">
                    <PopularCategoryCard imgSrc={CategoryImg} name="Anime" />
                    <PopularCategoryCard imgSrc={CategoryImg} name="Anime" />
                </ContentGrid>
                <Stats />

                <ContentGrid gridTitle="Latest wallpaper" className="pt-0">
                    <Image src={WallpaperImg} alt="WallpaperImg" className="rounded-md" />
                </ContentGrid>

                <Footer />
            </Container>
        </div>
    )
}

export default Home