'use client';
import * as React from 'react';

export default function MenuModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='pointer-events-auto md:hidden'>
            <button onClick={handleOpen}
                className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                type="button">Menu
                <svg viewBox="0 0 8 6"
                    className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400">
                    <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none"
                        strokeWidth="1.5" strokeLinecap="round"
                        strokeLinejoin="round">
                    </path>
                </svg>
            </button>
            <div className={open ? '' : 'hidden'}>
                <div onClick={handleClose} className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100"></div>
                <div className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100"
                    tabIndex={-1}>
                    <div className="flex flex-row-reverse items-center justify-between">
                        <button className="-m-1 p-1" type="button" onClick={handleClose}>
                            <svg viewBox="0 0 24 24" className="h-6 w-6 text-zinc-500 dark:text-zinc-400">
                                <path d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5" fill="none" stroke="currentColor"
                                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                        <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Navigation</h2>
                    </div>
                    <nav className="mt-6">
                        <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                            <li><a className="block py-2" href="/about">About</a></li>
                            {/* <li><a className="block py-2" href="/articles">Articles</a></li>
                            <li><a className="block py-2" href="/projects">Projects</a></li> */}
                        </ul>
                    </nav>
                </div>
            </div>
        </div >
    );
}