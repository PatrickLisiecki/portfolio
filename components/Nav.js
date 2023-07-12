import Link from "next/link";
import { useRouter } from "next/router";

import {
    HiHome,
    HiUser,
    HiRectangleGroup,
    HiViewColumns,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
} from "react-icons/hi2";

//  Links
const links = [
    { name: "home", path: "/", icon: <HiHome /> },
    { name: "about", path: "/about", icon: <HiUser /> },
    { name: "services", path: "/services", icon: <HiRectangleGroup /> },
    { name: "work", path: "/work", icon: <HiViewColumns /> },
    {
        name: "testimonials",
        path: "/testimonials",
        icon: <HiChatBubbleBottomCenterText />,
    },
    {
        name: "contact",
        path: "/contact",
        icon: <HiEnvelope />,
    },
];

const Nav = () => {
    const router = useRouter();
    const pathname = router.pathname;

    return (
        <nav className="w-full h-max fixed flex flex-col items-center gap-y-4 top-0 bottom-0 z-50 mt-auto xl:justify-center xl:right-[2%] xl:w-16 xl:max-w-md xl:h-screen">
            <div className="w-full h-[80px] flex justify-between items-center gap-y-10 px-4 py-8 bg-white/10 text-3xl md:px-40 xl:px-0 xl:flex-col xl:justify-center xl:h-max xl:text-2xl xl:rounded-full backdrop-blur-sm">
                {links.map((currentLink, i) => {
                    return (
                        <Link
                            className={`${
                                currentLink.path === pathname && "text-accent"
                            } relative flex items-center group hover:text-accent transition-all duration-300`}
                            href={currentLink.path}
                            key={i}
                        >
                            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                                <div className="relative flex items-center p-[6px] rounded-[5px] bg-white text-primary">
                                    <div className="text-base font-semibold leading-none capitalize">
                                        {currentLink.name}
                                    </div>

                                    <div className="absolute -right-2 border-solid border-l-white border-l-8 border-y-transparent border-y-[6px]"></div>
                                </div>
                            </div>

                            <div>{currentLink.icon}</div>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default Nav;
