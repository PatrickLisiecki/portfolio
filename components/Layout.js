// Import fonts
import { Sora } from "@next/font/google";

// Font settings
const sora = Sora({
    subsets: ["latin"],
    variable: "--font-sora",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// Import components
import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";

const Layout = ({ children }) => {
    return (
        <div
            className={`page relative bg-site bg-cover bg-no-repeat text-white ${sora.variable} font-sora`}
        >
            <TopLeftImg />
            <Nav />
            <Header />
            {children}
        </div>
    );
};

export default Layout;
