import React from 'react';
import Image from 'next/image';

interface EducationExperience {
    instituteName: string;
    program: string;
    from: string;
    to: string;
    imageSrc: any;
    city: string;
}

export default function EducationElement({ instituteName, program, from, to, imageSrc, city }: EducationExperience) {
    return (
        <li className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image alt={instituteName}
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-10"
                    style={{ borderRadius: '50%' }}
                    src={imageSrc} />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
                <div className='flex flex-auto flex-wrap gap-x-2 w-full'>
                    <dt className="sr-only">Company</dt>
                    <dd className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{instituteName}</dd>
                    <dt className="sr-only">City</dt>
                    <dd className="ml-auto text-xs text-zinc-900 dark:text-zinc-100">{city}</dd>
                </div>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">{program}</dd>
                <dt className="sr-only">Date</dt>
                <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">{from}<span> — </span>{to}</dd>
            </dl>
        </li>
    );
};