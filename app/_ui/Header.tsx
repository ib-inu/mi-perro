import Logo from "@/app/_components/Logo"
import Image from "next/image"

function Header() {

    return (
        <header className="text-slate-800 flex justify-between p-2 mx-5 border-b-4">
            <Logo />

            <div
                className="rounded-full bg-gray-400 w-8 h-8 overflow-hidden sm:w-10 sm:h-10 md:w-12 md:h-12 cursor-pointer">
                <Image alt="user-profile" width={100} height={100} src="https://robohash.org/Otis%20Raynor.png?size=200x200" className="w-full h-full object-cover" />
            </div>
        </header>

    )
}

export default Header
