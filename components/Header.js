// Image
import Image from "next/image";

// Link
import Link from "next/link";

// Import components
import Socials from "../components/Socials";

const Header = () => {
    return (
        <header className="w-full absolute z-30 flex items-center px-16 xl:px-0 xl:h-[90px]">
            <div className="container mx-auto">
                <div className="flex flex-col justify-between items-center gap-y-6 lg:flex-row">
                    <Link href={"/"}>
                        <span className="text-5xl font-normal text-white">
                            patrick
                        </span>
                        <span className="ml-4 text-5xl font-thin text-white">
                            lisiecki
                        </span>
                        <span className="text-3xl font-medium text-accent">
                            .
                        </span>
                    </Link>
                    <Socials />
                </div>
            </div>
        </header>
    );
};

export default Header;
