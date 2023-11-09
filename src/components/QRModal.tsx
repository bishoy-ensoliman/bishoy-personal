'use client';
import * as React from 'react';
import Image from 'next/image';
import qrCode from '../../public/qr.svg';

export default function QRModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='pointer-events-auto'>
            <div className="pointer-events-auto mr-2">
                <button type="button" onClick={handleOpen}
                    className="dark:text-teal-500 group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
                    QR
                </button>
            </div>
            <div className={open ? '' : 'hidden'}>
                <div onClick={handleClose} className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100"></div>
                <div className="max-w-md fixed mx-auto inset-x-0 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100" style={{ margin: '0 auto' }}
                    tabIndex={-1}>
                    <div className="flex flex-row-reverse items-center justify-between">
                        <button className="-m-1 p-1" type="button" onClick={handleClose}>
                            <svg viewBox="0 0 24 24" className="h-6 w-6 text-zinc-500 dark:text-zinc-400">
                                <path d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5" fill="none" stroke="currentColor"
                                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                        <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">QR Share</h2>
                    </div>
                    <div className="mt-6">
                        <div className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                            <Image alt="My Picture" src={qrCode} className="max-w-20" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}