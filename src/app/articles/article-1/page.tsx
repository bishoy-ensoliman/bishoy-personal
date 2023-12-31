import React from 'react';

export default function Article() {
    return (
        <main className="flex-auto">
            <div className="sm:px-8 mt-16 lg:mt-32">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <div className="xl:relative">
                                <div className="mx-auto max-w-2xl">
                                    <button type="button" className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0">
                                        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"><path d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </button>
                                    <article>
                                        <header className="flex flex-col">
                                            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                                                Crafting a design system for a multiplanetary future
                                            </h1>
                                            <time dateTime="2022-09-05" className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500">
                                                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                                                <span className="ml-3">September 5, 2022</span>
                                            </time>
                                        </header>
                                        <div className="mt-8 prose dark:prose-invert" data-mdx-content="true">
                                            <p>Most companies try to stay ahead of the curve when it comes to visual design,
                                                but for Planetaria we needed to create a brand that would still inspire
                                                us 100 years from now when humanity has spread across our entire solar system.</p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};