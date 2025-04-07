'use client';

import { FC, useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';

import Testimonial from '@/components/Testimonial';
import image1 from '@/assets/images/testimonial-1.jpg';
import image2 from '@/assets/images/testimonial-2.jpg';
import image3 from '@/assets/images/testimonial-3.jpg';

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const testimonials = [
	{
		name: 'Sarah Chen',
		company: 'Pixel Perfect',
		role: 'Head of Design',
		quote:
			"Alex's expertise in both technical development and design created a beautiful, high-performing website.",
		image: image1,
		imagePositionY: 0.2,
	},
	{
		name: 'Marcus Rodriguez',
		company: 'Craft Coffee Co.',
		role: 'Founder',
		quote:
			'Alex transformed our boutique coffee brand with a website that perfectly balances aesthetics and functionality.',
		image: image2,
		imagePositionY: 0.1,
	},
	{
		name: 'Emily Watson',
		company: 'Studio Minimal',
		role: 'Creative Director',
		quote:
			'The collaborative process was amazing. Alex brought lots of fresh perspectives and innovative solutions.',
		image: image3,
		imagePositionY: 0.55,
	},
];

const Testimonials: FC = () => {

	const titleRef = useRef<HTMLHeadingElement>(null);
	const { scrollYProgress } = useScroll({
		target: titleRef,
		offset: ["start end", "end start"]
	})

	// These two are used to animate the title
	const transformTop = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
	const transformBottom = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

	// These two are used to handle the testimonial index and the transition flag
	const [testimonialIndex, setTestimonialIndex] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);

	// For both prev and next buttons, Found a bug when clicking the button multiple times quickly, the animation was overlapping, and thus the animiation was not working as expected. So to prevent this, we have a flag to check if the transition is already happening. If it is, don't do anything on the click event.
	// This is used to handle the previous testimonial
	const handleClickPrev = useCallback(() => {
		// If the transition is already happening, don't do anything
		if (isTransitioning) return;

		setIsTransitioning(true);
		setTestimonialIndex((curr) => {
			if (curr === 0) {
				return testimonials.length - 1;
			}
			return curr - 1;
		});

		// Reset the transition flag after animation completes
		setTimeout(() => {
			setIsTransitioning(false);
		}, 500); // Adjust this timeout to match animation duration
	}, [isTransitioning]);

	const handleClickNext = useCallback(() => {
		if (isTransitioning) return;

		setIsTransitioning(true);
		setTestimonialIndex((curr) => {
			if (curr === testimonials.length - 1) {
				return 0;
			}
			return curr + 1;
		});

		// Reset the transition flag after animation completes
		setTimeout(() => {
			setIsTransitioning(false);
		}, 500); // Adjust this timeout to match your animation duration
	}, [isTransitioning]);

	return (
		<section className="section" id='testimonials'>
			<h2 className="flex flex-col overflow-hidden text-4xl md:text-7xl lg:text-8xl" ref={titleRef}>
				<motion.span className="whitespace-nowrap relative z-10" style={{ x: transformBottom }}>Some nice words from my colleagues and friends</motion.span>
				<motion.span className="self-end whitespace-nowrap text-red-orange-500 relative z-0" style={{ x: transformTop }}>
					Some nice words from my colleagues and friends
				</motion.span>
			</h2>
			<div className="container">
				<div className="mt-20">
					{/* AnimatePresence: This is used to animate the testimonial when it is changed,
						mode: 'wait' - This is used to wait for the current testimonial to finish animating before animating the next one
						initial: false - This is used to prevent the first testimonial from animating when the page is loaded
					*/}
					<AnimatePresence mode='wait' initial={false}>
						{
							// testimonialIndex: This is the index of the current testimonial that is being displayed
							testimonials.map(
								({ name, company, role, quote, image, imagePositionY }, index) =>
									index === testimonialIndex && (
										<Testimonial name={name} company={company} role={role} quote={quote} image={image} imagePositionY={imagePositionY} key={name} />
									)
							)
						}
					</AnimatePresence>
				</div>
				<div className="mt-6 flex gap-4 lg:mt-10">
					<button
						className={`inline-flex size-11 items-center justify-center rounded-full border border-stone-400 hover:bg-red-orange-500 hover:text-white hover:border-red-orange-500 transition-all duration-300 ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
						onClick={handleClickPrev}
						disabled={isTransitioning}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="size-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
							/>
						</svg>
					</button>
					<button
						className={`inline-flex size-11 items-center justify-center rounded-full border border-stone-400 hover:bg-red-orange-500 hover:text-white hover:border-red-orange-500 transition-all duration-300 ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
						onClick={handleClickNext}
						disabled={isTransitioning}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="size-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
