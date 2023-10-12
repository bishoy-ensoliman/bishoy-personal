import React from 'react';
import WorkElement from './WorkElement';
import aviPic from '../../../public/avi.jpeg';
import flixPic from '../../../public/flix.jpeg';
import baPic from '../../../public/ba.jpeg';
import egymPic from '../../../public/egym.jpeg';
import foePic from '../../../public/foe.jpeg';
import pixelogicPic from '../../../public/pixelogic.jpeg';
import ppcPic from '../../../public/ppc.jpeg';
import vitanoiaPic from '../../../public/vitanoia.jpeg';

const Work = () => {
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
                <span className="ml-3">Work</span>
            </h2>
            <ol className="mt-6 space-y-4 overflow-y-scroll max-h-64">
                <WorkElement companyName={'Avi Medical'} role={'Senior Software Engineer'} from={'Oct 2022'} to={'Jan 2024'} imageSrc={aviPic} city='Munich, DE' />
                <WorkElement companyName={'Flix'} role={'Integration Manager'} from={'Jul 2021'} to={'Sep 2022'} imageSrc={flixPic} city='Munich, DE' />
                <WorkElement companyName={'EGYM'} role={'Software Engineer'} from={'Dec 2019'} to={'Jun 2021'} imageSrc={egymPic} city='Munich, DE' />
                <WorkElement companyName={'Pixelogic Media'} role={'Software Engineer'} from={'Jan 2019'} to={'Nov 2019'} imageSrc={pixelogicPic} city='Cairo, EG' />
                <WorkElement companyName={'Bibliotheca Alexandrina'} role={'Junior Software Engineer'} from={'Sep 2017'} to={'Dec 2018'} imageSrc={baPic} city='Alexandria, EG' />
                <WorkElement companyName={'Vetanoia - Part-time'} role={'Junior Software Engineer'} from={'Jan 2018'} to={'Dec 2018'} imageSrc={vitanoiaPic} city='Alexandria, EG' />
                <WorkElement companyName={'Faculty of Engineering, Alexandria University'} role={'Teaching Assistant'} from={'Sep 2017'} to={'Dec 2017'} imageSrc={foePic} city='Alexandria, EG' />
                <WorkElement companyName={'Petroleum Pipelines Company'} role={'Intern Control Systems Engineer'} from={'Jul 2016'} to={'Aug 2016'} imageSrc={ppcPic} city='Alexandria, EG' />
            </ol>
            <a className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
                href="/Bishoy_Soliman_CV.pdf" target='_blank'>Download CV
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"
                    className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50">
                    <path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>
        </div>
    );
};

export default Work;