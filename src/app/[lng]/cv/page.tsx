import React from 'react';
import DownloadCV from "@/components/DownloadCV"

export default function About() {
    return (
        <main className='mt-5'>
            <div className="flex-auto" >
                <div className="sm:px-8 mt-9">
                    <div className="mx-auto w-full max-w-7xl lg:px-8">
                        <div className="relative px-4 sm:px-8 lg:px-12">
                            <div className="mx-auto max-w-2xl lg:max-w-5xl">
                                <div className="float-left">
                                    <DownloadCV />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};