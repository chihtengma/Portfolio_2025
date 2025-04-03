'use client'

import SplitType from 'split-type';
import { FC, useEffect } from 'react';
import { stagger, useAnimate, useInView } from 'motion/react';

const Intro: FC = () => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, {
    once: true
  });

  useEffect(() => {
    new SplitType(scope.current.querySelector('h2')!, {
      types: 'lines,words',
      tagName: 'span'
    });

  }, [scope]);

  useEffect(() => {
    if (inView) {
      animate(scope.current.querySelectorAll('.word'), {
        transform: "translateY(0%)"
      }, {
        duration: .5,
        delay: stagger(.2)
      });
    }
  }, [inView]);

  return (
    <section className="section mt-12 md:mt-16 lg:mt-20" id='intro' ref={scope}>
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:w-[80%] lg:text-8xl">
          Engineering robust digital experiences from database to deployment, turning complex challenges into elegant solutions
        </h2>
      </div>
    </section>
  );
};

export default Intro;
