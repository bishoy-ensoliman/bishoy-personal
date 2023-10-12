import React from 'react';
import EducationElement from './EducationElement';
import tumPic from '../../../public/tum.svg';
import foePic from '../../../public/foe.jpeg';

export default function Education() {
    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 flex-none">
                    <path
                        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" />
                    <path
                        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                        className="stroke-zinc-400 dark:stroke-zinc-500" />
                </svg>
                <span className="ml-3">Education</span>
            </h2>
            <ol className="mt-6 space-y-4 overflow-y-scroll max-h-64">
                <EducationElement instituteName={'TUM'} program={'B.Sc. Aerospace Engineering'} from={'Oct 2023'} to={'PRESENT'} imageSrc={tumPic} city='Munich, DE' />
                <EducationElement instituteName={'Faculty of Engineering, Alexandria University'} program={'M.Sc. Computer & Systems Engineering (Course work)'} from={'Sep 2017'} to={'Dec 2018'} imageSrc={foePic} city='Alexandria, EG' />
                <EducationElement instituteName={'Faculty of Engineering, Alexandria University'} program={'B.Sc. Computer & Systems Engineering'} from={'Sep 2012'} to={'Jul 2017'} imageSrc={foePic} city='Alexandria, EG' />
            </ol>
        </div>
    );
};