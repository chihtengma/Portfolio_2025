'use client';

import { FC } from 'react';

import SkillsColumn from '@/components/SkillsColumn';

const skills = [
	{ name: 'React', icon: '/assets/icons/react.svg', description: 'Advanced' },
	{ name: 'Javascript', icon: '/assets/icons/javascript.svg', description: 'Advanced' },
	{ name: 'Typescript', icon: '/assets/icons/typescript.svg', description: 'Advanced' },
	{ name: 'Next.js', icon: '/assets/icons/nextjs.svg', description: 'Advanced' },
	{ name: 'Tailwind CSS', icon: '/assets/icons/tailwind.svg', description: 'Advanced' },
	{ name: 'Node.js', icon: '/assets/icons/nodejs.svg', description: 'Advanced' },
	{ name: 'AWS', icon: '/assets/icons/aws.svg', description: 'Intermediate' },
	{ name: 'Docker', icon: '/assets/icons/docker.svg', description: 'Intermediate' },
	{ name: 'Python', icon: '/assets/icons/python.svg', description: 'Intermediate' },
	{ name: 'MySQL', icon: '/assets/icons/mysql.svg', description: 'Intermediate' },
	{ name: 'Git', icon: '/assets/icons/github.svg', description: 'Advanced' },
	{ name: 'Firebase', icon: '/assets/icons/firebase.svg', description: 'Intermediate' },
	{ name: 'GraphQ', icon: '/assets/icons/graphql.svg', description: 'Intermediate' },
	{ name: 'PostgreSQL', icon: '/assets/icons/postgresql.svg', description: 'Advanced' },
	{ name: 'MongoDB', icon: '/assets/icons/mongodb.svg', description: 'Advanced`' },
	{ name: 'Java', icon: '/assets/icons/java.svg', description: 'Intermediate' },
	{ name: 'Angular', icon: '/assets/icons/angular.svg', description: 'Intermediate' },

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