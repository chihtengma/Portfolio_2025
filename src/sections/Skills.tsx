'use client';

import { FC } from 'react';

import SkillsColumn from '@/components/SkillsColumn';

const skills = [
	{ name: 'React', icon: '/icons/react.svg', description: 'Advanced' },
	{ name: 'Javascript', icon: '/icons/javascript.svg', description: 'Advanced' },
	{ name: 'Typescript', icon: '/icons/typescript.svg', description: 'Advanced' },
	{ name: 'Next.js', icon: '/icons/nextjs.svg', description: 'Advanced' },
	{ name: 'Tailwind CSS', icon: '/icons/tailwind.svg', description: 'Advanced' },
	{ name: 'Node.js', icon: '/icons/nodejs.svg', description: 'Advanced' },
	{ name: 'AWS', icon: '/icons/aws.svg', description: 'Intermediate' },
	{ name: 'Docker', icon: '/icons/docker.svg', description: 'Intermediate' },
	{ name: 'Python', icon: '/icons/python.svg', description: 'Intermediate' },
	{ name: 'MySQL', icon: '/icons/mysql.svg', description: 'Intermediate' },
	{ name: 'Git', icon: '/icons/github.svg', description: 'Advanced' },
	{ name: 'Firebase', icon: '/icons/firebase.svg', description: 'Intermediate' },
	{ name: 'GraphQ', icon: '/icons/graphql.svg', description: 'Intermediate' },
	{ name: 'PostgreSQL', icon: '/icons/postgresql.svg', description: 'Advanced' },
	{ name: 'MongoDB', icon: '/icons/mongodb.svg', description: 'Advanced`' },
	{ name: 'Java', icon: '/icons/java.svg', description: 'Intermediate' },
	{ name: 'Angular', icon: '/icons/angular.svg', description: 'Intermediate' },

]

export type SkillsType = typeof skills;

const Skills: FC = () => {

	return (
		<section className="py-24 overflow-hidden">
			<div className="container">
				<div className='grid lg:grid-cols-2 items-center lg:gap-16'>
					<div>
						<h2 className="text-6xl lg:text-8xl font-medium mt-6">My <span className='text-red-orange-500'>Skills</span></h2>
						<p className='text-lg mt-4'>Layers of skills that I have built over the years, from the basics to the most complex ones.</p>
					</div>
					<div>
						<div className='h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'>
							<SkillsColumn skills={skills} />
							<SkillsColumn skills={skills.slice().reverse()} className='hideen md:flex' reverse />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Skills;