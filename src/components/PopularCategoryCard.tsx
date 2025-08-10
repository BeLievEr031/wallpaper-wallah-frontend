import Image from "./Image";

interface IProp {
    imgSrc: string;
    name: string;
}

function PopularCategoryCard({ imgSrc, name }: IProp) {
    return (
        <div className="relative rounded-md overflow-hidden">
            <Image src={imgSrc} alt={name + ""} />
            <h1 className="absolute left-2 bottom-2 font-semibold text-2xl z-[9999999] text-white [-webkit-text-stroke:0.5px_black]">{name}</h1>
            <div className="absolute top-0 left-0 w-full h-full bg-black/20">
            </div>
        </div>
    )
}

export default PopularCategoryCard