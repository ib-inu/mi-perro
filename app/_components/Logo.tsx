import { TbBone } from "react-icons/tb";
import { Quicksand } from "next/font/google";

const quickSand = Quicksand({
    weight: ["700"],
    subsets: ["latin"],
});

function Logo() {
    return (
        <div
            className={`${quickSand.className} flex items-center gap-2 text-ms sm:text-xl md:text-2xl p-2`}
            aria-label="Mi-Perro Logo"
        >
            <TbBone aria-hidden="true" />
            <h1 translate="no" className="text-primary">MI-PERRO</h1>
        </div>
    );
}

export default Logo;
