'use client';

import Image from 'next/image';
import SplitType from 'split-type';
import { FC, useEffect, useRef, useState } from 'react';
import { useAnimate, motion, stagger, useScroll, useTransform } from 'motion/react';

import Button from '@/components/Button';
import heroImage from '@/assets/images/hero-image.jpg';

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const Hero: FC = () => {
	const [titleScope, animateTitle] = useAnimate();
	const scrollingDiv = useRef<HTMLDivElement>(null);
	const [isMobile, setIsMobile] = useState(false);

	// Check if we're on mobile, prevents the parallax effect on mobile.
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	// This is used to create the parallax effect on the image
	const { scrollYProgress } = useScroll({
		target: scrollingDiv,
		// 'start end': The parallax effect starts when the top of the scrollingDiv is at the start of the viewport
		// 'end end': The parallax effect ends when the bottom of the scrollingDiv is at the end of the viewport
		offset: ['start end', 'end end']
	});

	const portraitWidth = useTransform(scrollYProgress, [0, 1], ['100%', '240%']);

	// This effect is used to split the title into lines and words and with motion/react to animate the words
	// Inside global.css we have the styles for the line set to overflow-hidden and the word set to translate-y-full
	// This allows us to create a typewriter effect when the words are animated
	useEffect(() => {
		new SplitType(titleScope.current, { types: 'lines,words', tagName: 'span' })

		animateTitle(titleScope.current.querySelectorAll('.word'), {
			transform: 'translateY(0)',
		}, {
			duration: .5,
			delay: stagger(0.2)
		})
	})

	return (
		<section>
			<div className="grid items-stretch md:h-screen md:grid-cols-12 sticky top-0">
				{/* Text & Button */}
				<div className="flex flex-col justify-center md:col-span-7">
					<div className="container !max-w-full">
						<motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} ref={titleScope} className="mt-40 text-5xl md:mt-0 md:text-6xl lg:text-7xl">
							From pixels to power: Engineering digital experiences that leave a mark
						</motion.h1>
						<div className="mt-10 flex flex-col items-start gap-6 md:flex-row md:items-center">
							{/* Both buttons have a delay to start the animation after the title */}
							<motion.div initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: 1.75 }}>
								<Button
									variant="secondary"
									iconAfter={
										// Duplicate the icon to create a hover animation that moves the icon from left to right
										<div className='overflow-hidden size-5'>
											<div className='h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-500'>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="currentColor"
													className="size-5"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
													/>
												</svg>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="currentColor"
													className="size-5"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
													/>
												</svg>
											</div>
										</div>
									}
								>
									<span>View My Works</span>
								</Button>
							</motion.div>
							<motion.div initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: 2.2 }}>
								<Button variant="text">Let&apos;s Talk</Button>
							</motion.div>
						</div>
					</div>
				</div>
				{/* Image: On mobile the image is full width, On devices above 768px the image has a parallax effect where scrolling down the page will reveal more of the image*/}
				<div className="md:col-span-5 relative">
					<motion.div
						className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:!width-full"
						style={{ width: isMobile ? '100%' : portraitWidth }}
					>
						{/* All the image properties are used for performance:
						- priority: Indicates that this image is critical for the page to render
						- quality: Specifies the quality of the image
						- placeholder: Shows a low-quality placeholder image before the full image loads
						- blurDataURL: A low-quality placeholder image to show while the full image loads
						*/}
						<Image
							src={heroImage}
							alt="Portrait"
							className="size-full object-cover"
							priority
							quality={85}
							placeholder="blur"
							blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTY3LjIyOUFTRjo/Tj4yMkhiSkhBNk1LPVBVW1xbOEVJW1v/2wBDARUXFx4aHjshITtBNkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>
				</div>
			</div>
			{/* This invisible div is used to create a scroll area for the hero-image for the parallax effect */}
			<div className="md:h-[200vh]" ref={scrollingDiv}></div>
		</section>
	);
};

export default Hero;
