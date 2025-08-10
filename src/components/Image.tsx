import clsx from "clsx";

interface IProp {
    className?: string;
    src: string;
    alt: string;
}

function Image({ className, alt, src }: IProp) {
    return (
        <img className={clsx("object-cover", className)}
            src={src}
            alt={alt}
        />
    )
}

export default Image