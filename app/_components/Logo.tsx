import { TbBone } from "react-icons/tb";
import { Quicksand } from "next/font/google"

const quickSand = Quicksand({
    weight: ["700"],
    subsets: ['latin']
})
function Logo() {
    return (
        <div
            className={`${quickSand.className} flex text-ms font-quicksand font-bold  sm:text-xl md:text-2xl p-2`}>
            <TbBone />
            <h1>MI-PERRO</h1>
        </div>
    )
}

export default Logo
