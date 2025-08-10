import clsx from "clsx";

interface IProp extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

function Input({ className, ...prop }: IProp) {
    return (
        <input
            type="text"
            className={clsx("border border-blue-300 w-[450px] rounded-md px-4 py-3 font-roboto focus:outline-none focus:ring-2 focus:ring-blue-400", className)}
            {...prop}

        />
    )
}

export default Input