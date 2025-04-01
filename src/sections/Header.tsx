import Button from "@/components/Button";
import { FC } from "react";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  return (
    // Header is fixed to the top of the page and takes up the full width of the page and takes no space from the bottom of the page.
    <header className="fixed top-0 left-0 w-full backdrop-blur-md">
      <div className="container !max-w-full">
        <div className="flex justify-between h-20 items-center">
          {/* Left Side: Logo */}
          <div>
            <a href="/">
              <span className="text-xl font-bold uppercase">CHIHTENG&nbsp; MA</span>
            </a>
          </div>
          {/* Right Side: Navbar and Contact Me Button */}
          <div className="flex items-center gap-4">
            {/* 
            inline-flex: Makes the element a flex container and inline-level. Inline-flex is important for the bars SVG to be properly aligned with other elements.
            */}
            <div className="size-11 border border-stone-400 rounded-full inline-flex items-center justify-center bg-stone-200">
              {/* Bars SVG */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="15" width="18" height="2" fill="currentColor" />
                <rect x="3" y="7" width="18" height="2" fill="currentColor" />
              </svg>
            </div>
            {/* Contact Me Button: hidden on mobile */}
            <Button variant="primary" className="hidden md:inline-flex">Contact Me</Button>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;
