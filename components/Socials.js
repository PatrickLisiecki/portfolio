// Link
import Link from "next/link";

// Icons
import { RiYoutubeLine } from "react-icons/ri";

const Socials = () => {
    return (
        <div className="flex items-center gap-x-5 text-2xl">
            <Link
                href={""}
                className="hover:text-accent transition-all duration-300"
            >
                <RiYoutubeLine />
            </Link>
            <Link
                href={""}
                className="hover:text-accent transition-all duration-300"
            >
                <RiYoutubeLine />
            </Link>
            <Link
                href={""}
                className="hover:text-accent transition-all duration-300"
            >
                <RiYoutubeLine />
            </Link>
            <Link
                href={""}
                className="hover:text-accent transition-all duration-300"
            >
                <RiYoutubeLine />
            </Link>
            <Link
                href={""}
                className="hover:text-accent transition-all duration-300"
            >
                <RiYoutubeLine />
            </Link>
        </div>
    );
};

export default Socials;
