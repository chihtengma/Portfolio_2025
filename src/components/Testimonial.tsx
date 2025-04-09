import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { HTMLAttributes, useEffect } from 'react';
import { motion, usePresence } from 'motion/react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import useTextRevealAnimation from '@/hooks/useTextRevealAnimation';

type TestimonialProps = {
	name: string;
	image: string | StaticImport
	imagePositionY: number;
	quote: string;
	role: string;
	company: string;
	className?: string;
}

const Testimonial = (props: TestimonialProps & HTMLAttributes<HTMLDivElement>) => {
	const { name, image, imagePositionY, quote, role, company, className, ...rest } = props;

	const { scope: quoteScope, entranceAnimation: quoteEntranceAnimation, exitAnimation: quoteExitAnimation } = useTextRevealAnimation();
	const { scope: citeScope, entranceAnimation: citeEntranceAnimation, exitAnimation: citeExitAnimation } = useTextRevealAnimation();

	const [isPresent, safeToRemove] = usePresence();

	useEffect(() => {
		if (isPresent) {
			quoteEntranceAnimation().then(() => {
				citeEntranceAnimation();
			})
		} else {
			Promise.all([
				quoteExitAnimation(),
				citeExitAnimation()
			]).then(() => {
				safeToRemove();
			})
		}
	}, [isPresent, quoteEntranceAnimation, citeEntranceAnimation, quoteExitAnimation, citeExitAnimation])

	return (
		<div
			key={name}
			className={twMerge("grid md:grid-cols-5 md:items-center md:gap-8 lg:gap-16", className)} {...rest}
		>
			<div className="aspect-square md:col-span-2 md:aspect-[9/16] relative">
				<motion.div className='absolute h-full bg-stone-900' initial={{ width: '100%' }} animate={{ width: '0%' }} exit={{ width: '100%' }} transition={{ duration: 0.5 }}>

				</motion.div>
				<Image
					src={image}
					alt={name}
					className="size-full object-cover"
					style={{ objectPosition: `50% ${imagePositionY * 100}%` }}
				/>
			</div>
			<blockquote className="md:col-span-3">
				<div className="mt-8 text-3xl md:mt-0 md:text-4xl lg:text-5xl" ref={quoteScope}>
					<span>&ldquo;</span>
					{quote}
					<span>&rdquo;</span>
				</div>
				{/* cite: Citation is a inline element, so we need to make it a block element to apply margin-top */}
				<cite className="md:mt8 mt-4 block not-italic md:text-lg lg:text-xl" ref={citeScope}>
					{name}, {role} at {company}
				</cite>
			</blockquote>
		</div>
	)
}

export default Testimonial;