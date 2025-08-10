import type { ReactNode } from "react"

interface IProp {
    children: ReactNode;
    gridTitle: string;
}

function ContentGrid({ children, gridTitle }: IProp) {
    return (
        <div className="pt-16">
            <h1 className="text-2xl font-semibold font-rubik text-zinc-900 capitalize">
                {gridTitle}
            </h1>
            <div className="grid grid-cols-8 mt-5 gap-2">
                {children}
            </div>
        </div>
    )
}

export default ContentGrid