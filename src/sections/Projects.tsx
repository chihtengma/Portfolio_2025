import { FC } from 'react';
import Image from 'next/image';

import image1 from '@/assets/images/project-1.jpg';
import image2 from '@/assets/images/project-2.jpg';
import image3 from '@/assets/images/project-3.jpg';
import image4 from '@/assets/images/project-4.jpg';
import image5 from '@/assets/images/project-5.jpg';

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const projects = [
  {
    name: 'Artisan Brew Co.',
    image: image1,
  },
  {
    name: 'Wavelength Studios',
    image: image2,
  },
  {
    name: 'Nova Fitness',
    image: image3,
  },
  {
    name: 'Urban Plates',
    image: image4,
  },
  {
    name: 'Bloom Botanicals',
    image: image5,
  },
];

const Projects: FC = () => {
  return (
    <section className="section" id='projects'>
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">Selected Works</h2>
        <div className="md:mt16 mt-10 lg:mt-20">
          {projects.map(({ name, image }) => (
            <a
              href="#"
              key={name}
              className="flex flex-col border-t border-dotted border-stone-400 py-6 last:border-b md:py-8 lg:py-10"
            >
              {/* Image: It will only shown on mobile */}
              <div>
                <div className="aspect-video md:hidden">
                  <Image src={image} alt={`${name} image`} className="size-full object-cover" />
                </div>
                <div className="mt-8 flex items-center justify-between md:mt-0">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl">{name}</h3>
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
