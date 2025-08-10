import { useParams } from "react-router-dom";
import Container from "../components/Container"
import ContentGrid from "../components/ContentGrid"
import Hero from "../components/Hero"
import WallpaperImg from "../assets/wallpaper.jpeg"
import Image from "../components/Image";
import Footer from "../components/Footer";

function SearchWallpaper() {
    const { search } = useParams();

    return (
        <div>
            <Container>
                <Hero />
                <ContentGrid gridTitle={`Searched wallpaper "${search}"`}>
                    <Image src={WallpaperImg} alt="wallpaper" className="rounded-md" />
                </ContentGrid>
            </Container>
            <Footer />
        </div>
    )
}

export default SearchWallpaper