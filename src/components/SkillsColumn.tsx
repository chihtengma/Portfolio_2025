import Image from 'next/image';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

import { SkillsType } from '@/sections/Skills';
import { Fragment } from 'react';

const SkillsColumn = (props: { skills: SkillsType; className?: string; reverse?: boolean; }) => {
  const { skills, className, reverse } = props;

  return (

    <motion.div className={twMerge('flex flex-col gap-4 pb-4', className)} initial={{ y: reverse ? '-50%' : 0 }} animate={{ y: reverse ? "0" : "-50%" }} transition={{ duration: 65, repeat: Infinity, ease: 'linear' }}>
      {Array.from({ length: 2 }).map((_, index) => (
        <Fragment key={index}>
          {
            skills.map(({ name, icon }) => (
              <div key={name} className='p-6'>
                <div className='flex justify-center'>
                  <Image src={icon} alt={`${name} icon`} width={200} height={200} className='size-28' />
                </div>
              </div>
            ))
          }
        </Fragment>
      ))}
      {
        skills.map(({ name, icon }) => (
          <div key={name} className='border border-black/10 rounded-3xl p-6'>
            <div className='flex justify-center'>
              <Image src={icon} alt={`${name} icon`} width={200} height={200} className='size-28' />
            </div>
          </div>
        ))
      }
    </motion.div>
  )
}

export default SkillsColumn;