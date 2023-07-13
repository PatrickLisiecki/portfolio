// Link
import Link from "next/link";

// Icons
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";

const Socials = () => {
    return (
        <div className="flex items-center gap-x-5 text-2xl">
            <Link
                href={"https://www.linkedin.com/in/patricklisiecki"}
                target="_blank"
                className="hover:text-accent transition-all duration-300"
            >
                <FaLinkedin />
            </Link>
            <Link
                href={"https://github.com/PatrickLisiecki"}
                target="_blank"
                className="hover:text-accent transition-all duration-300"
            >
                <FaSquareGithub />
            </Link>
        </div>
    );
};

export default Socials;
