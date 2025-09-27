import { FC } from 'react';
import Image from 'next/image';

import image1 from '@/assets/images/project-1.jpeg';
import image2 from '@/assets/images/project-2.jpeg';
import image3 from '@/assets/images/project-3.jpeg';
import image4 from '@/assets/images/project-4.jpeg';
import image5 from '@/assets/images/project-5.jpeg';
import image6 from '@/assets/images/project-6.jpeg';

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const projects = [
  {
    name: 'Evently',
    image: image1,
    link: 'https://github.com/chihtengma/event-platform',
  },
  {
    name: 'Portfolio',
    image: image2,
    link: 'https://github.com/chihtengma/Portfolio_2025',
  },
  {
    name: 'NASA Mission',
    image: image3,
    link: 'https://github.com/chihtengma/NASA-PROJECT',
  },
  {
    name: 'Podium Sports',
    image: image4,
    link: 'https://github.com/Sports-Management-FSA/cap_sports_management',
  },
  {
    name: 'Little Coder Studio',
    image: image6,
    link: 'https://www.littlecoderstudio.com/',
  },
  {
    name: 'Meow Market',
    image: image5,
    link: 'https://github.com/jerryc-jpg/MeowMarket',
  },
];

const Projects: FC = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">Selected Works</h2>
        <div className="md:mt16 mt-10 lg:mt-20">
          {projects.map(({ name, image, link }) => (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              key={name}
              className="group/project relative flex flex-col border-t border-dotted border-stone-400 py-6 last:border-b md:py-8 lg:py-10"
            >
              <div className="absolute bottom-0 left-0 h-0 w-full bg-stone-300 transition-all duration-500 ease-in-out group-hover/project:h-full"></div>
              <div className="relative">
                {/* Image: It will only shown on mobile */}
                <div className="aspect-video md:hidden">
                  <Image src={image} alt={`${name} image`} className="size-full object-cover" />
                </div>
                <div className="mt-8 flex items-center justify-between md:mt-0 md:grid md:gap-8 md:[grid-template-columns:1fr_300px_max-content]">
                  <div className="transition-all duration-700 lg:group-hover/project:pl-8">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl">{name}</h3>
                  </div>
                  <div className="relative">
                    <div className="group-hover/project:scal-100 absolute top-1/2 z-10 aspect-video w-full -translate-y-1/2 scale-90 opacity-0 transition-all duration-500 ease-in-out group-hover/project:opacity-100 lg:group-hover/project:scale-110">
                      <Image src={image} alt={`${name} image`} className="size-full object-cover" />
                    </div>
                  </div>
                  <div className="transition-all duration-700 lg:group-hover/project:pr-8">
                    <div className="size-6 overflow-hidden">
                      <div className="flex h-6 w-12 transition-transform duration-300 ease-in-out group-hover/project:-translate-x-1/2">
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
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
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
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
