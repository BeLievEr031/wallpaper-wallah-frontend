import LogoImg from "../assets/logo.png"

function Navbar() {
    return (
        <div className="flex justify-between items-center py-4 border-b px-20">
            <img src={LogoImg} alt="" className="w-[400px]" />
            <button className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition-all duration-200">
                Explore
            </button>
        </div>
    )
}

export default Navbar