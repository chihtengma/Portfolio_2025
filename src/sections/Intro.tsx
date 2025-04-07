'use client'

import { useInView } from 'motion/react';
import { FC, useEffect, useRef } from 'react';

import useTextRevealAnimation from '@/hooks/useTextRevealAnimation';

const Intro: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scope, entranceAnimation } = useTextRevealAnimation();

  const inView = useInView(sectionRef, {
    once: true
  });

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation])

  return (
    <section className="section mt-12 md:mt-16 lg:mt-20" id='intro' ref={sectionRef}>
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:w-[80%] lg:text-8xl" ref={scope}>
          Engineering robust digital experiences from database to deployment, turning complex challenges into elegant solutions
        </h2>
      </div>
    </section>
  );
};

export default Intro;
