'use client';

import { FC, useState, MouseEvent } from 'react';

import Button from '@/components/Button';

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
		label: 'About',
		href: '#intro',
  },
  {
	  label: 'Selected Works',
	  href: '#projects',
  },
  {
	  label: 'Testimonials',
	  href: '#testimonials',
  },
  {
	  label: 'FAQs',
	  href: '#faqs',
  },
  {
	  label: 'Contact',
	  href: '#contact',
  },
];

// Frontend Tribe uses motion/react to animate the menu. But I had troubles using react/motion when adding animations for the menu, so I used the built-in CSS transition properties instead.
// Personally, I think since we're only animating the menu, it's better to use the built-in CSS transition propertis instead of using motion which is a heavier library. Overall the animation is not that complex and the performance is better.

const Header: FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	// Smooth scroll to the target element when the nav item is clicked
	const handleClickNavItem = (ev: MouseEvent<HTMLAnchorElement>) => {
		ev.preventDefault();
		setIsOpen(false);

		const href = ev.currentTarget.getAttribute('href');
		if (!href) return;

		const targetElement = document.querySelector(href);
		if (!targetElement) return;

		targetElement.scrollIntoView({ behavior: 'smooth' });
	}

	return (
	// Header is fixed to the top of the page and takes up the full width of the page and takes no space from the bottom of the page.
		<header>
			{/* Hamburger Menu Animation
				Animation classes:
				- transition-all: Enables smooth transitions for all properties
				- duration-300: 300ms animation duration
				- ease-in-out: Smooth acceleration/deceleration
				- h-full/h-0: Animated height change
				- opacity-100/opacity-0: Fade in/out effect
				- visible/invisible: Ensures transitions work (unlike hidden)
			*/}
			<div
				className={`fixed top-0 left-0 w-full bg-stone-900 transition-all duration-500 ease-in-out z-10 ${isOpen ? 'h-full opacity-100 visible' : 'h-0 opacity-0 invisible'
					}`}
			>
				<nav className='mt-20 flex flex-col'>
					{navItems.map(({ label, href }) => (
						<a
							href={href}
							key={label}
							className='text-stone-200 border-t last:border-b border-stone-800 py-8 transition-opacity duration-300 group/nav-item relative isolate'
							style={{
								opacity: isOpen ? 1 : 0,
								transform: `translateY(${isOpen ? '0' : '-20px'})`,
								transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
							}}
							onClick={handleClickNavItem}
						>
							<div className="container !max-w-full flex items-center justify-between">
								<span className='text-3xl group-hover/nav-item:pl-4 transition-all duration-500 ease-in-out'>{label}</span>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
								</svg>
							</div>
							{/* This is the underline effect for the nav items, it's a pseudo element that is hidden when the nav item is not hovered. When the nav item is hovered, the pseudo element is shown and the height of the pseudo element is animated to the full height of the nav item. */}
							<div className='absolute w-full h-0 bg-stone-800 group-hover/nav-item:h-full transition-all duration-500 ease-in-out bottom-0 -z-10'></div>
						</a>
					))}
				</nav>
			</div>
			{/* mix-blend-difference: What this does is it makes the background color of the header transparent. So the LOGO to make the backround color transparent, so the logo is visible on the background of the page  */}
			<div className="fixed left-0 top-0 w-full mix-blend-difference backdrop-blur-md z-10">
				<div className="container !max-w-full">
					<div className="flex h-20 items-center justify-between">
						{/* Left Side: Logo */}
						<div>
							<a href="/">
								<span className="text-xl font-bold uppercase text-white">CHIHTENG&nbsp; MA</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* Since we don't want the button and menu affected by the mix-blend-differnce and backdrop-blur-mid, we need to put it in a new div */}
			<div className="fixed left-0 top-0 w-full z-10">
				<div className="container !max-w-full">
					<div className="flex h-20 items-center justify-end">
						{/* Right Side: Navbar and Contact Me Button */}
						<div className="flex items-center gap-4">
							{/*
            inline-flex: Makes the element a flex container and inline-level. Inline-flex is important for the bars SVG to be properly aligned with other elements.
            */}
							<button
								onClick={() => setIsOpen(!isOpen)}
								className="inline-flex size-11 items-center justify-center rounded-full border border-stone-400 bg-stone-200"
							>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="3"
										y="7"
										width="18"
										height="2"
										fill="currentColor"
										className={`transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-[4px] rotate-45' : ''
											}`}
										style={{ transformOrigin: '12px 8px' }}
									/>
									<rect
										x="3"
										y="15"
										width="18"
										height="2"
										fill="currentColor"
										className={`transform transition-transform duration-300 ease-in-out ${isOpen ? '-translate-y-[4px] -rotate-45' : ''
											}`}
										style={{ transformOrigin: '12px 16px' }}
									/>
								</svg>
							</button>
							{/* Contact Me Button: hidden on mobile */}
							<Button variant="primary" className="hidden md:inline-flex">
								Contact Me
							</Button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
