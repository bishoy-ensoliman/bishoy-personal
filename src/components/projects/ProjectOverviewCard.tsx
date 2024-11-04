'use client';
import React from 'react';
import Image from 'next/image';

export interface ProjectDetails {
    title: string;
    description: string;
    imageSrc: any;
};

export default function ProjectOverviewCard({ title, description, imageSrc }: ProjectDetails) {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <li className="group relative flex flex-col items-start">
                <div
                    className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
                >
                    <Image alt={title} className="rounded-2xl h-10 w-10" src={imageSrc} />
                </div>
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    <div
                        className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"
                    ></div>
                    <button onClick={() => setShowModal(true)}><span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span className="relative z-10">{title}</span></button>
                </h2>
                <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
            </li>
            {showModal ? (
                <>
                    <div
                        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-6xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full dark:bg-zinc-800 bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        {title}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-red-500 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className="grid gap-4">
                                        <div>
                                            <Image className="h-auto w-full max-w-full rounded-lg object-cover object-center" alt={title} src={imageSrc} />
                                        </div>
                                        <div className="grid grid-cols-5 gap-4">
                                            <div>
                                                <Image className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt={title} src={imageSrc} />
                                            </div>
                                            <div>
                                                <Image className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt={title} src={imageSrc} />
                                            </div>
                                            <div>
                                                <Image className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt={title} src={imageSrc} />
                                            </div>
                                            <div>
                                                <Image className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt={title} src={imageSrc} />
                                            </div>
                                            <div>
                                                <Image className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt={title} src={imageSrc} />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="my-4 text-blueGray-500 text-xl leading-relaxed">
                                        Description
                                    </p>
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        {description}
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-3 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
};