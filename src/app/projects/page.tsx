import React from 'react';
import ProjectOverviewCard from '@/components/projects/ProjectOverviewCard';
import carSimPic from '../../../public/car_sim.jpg';
import rcCarPic from '../../../public/rcCar.jpg';
import flightSimPic from '../../../public/car_sim.jpg';
import tvPic from '../../../public/car_sim.jpg';
import selfBalRobPic from '../../../public/car_sim.jpg';

export default function Projects() {
    return (
        <main className="flex-auto">
            <div className="sm:px-8 mt-16 sm:mt-32">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <header className="max-w-2xl">
                                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Things I’ve enjoyed Creating.</h1>
                                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                                    I’ve worked on lots of little projects over the years. Most of them are just for fun, but some of them are actually useful. Here are a few of my favorites.
                                </p>
                            </header>
                            <div className="mt-16 sm:mt-20">
                                <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                                    <ProjectOverviewCard title='VW Polo Driving Sim' imageSrc={carSimPic} description='Creating a car driving simulator for teaching beginners the basics.' link='#' linkLabel='comming soon...' />
                                    <ProjectOverviewCard title='esp32 based RC car' imageSrc={rcCarPic} description='converting a model RC car to a smart self-driving or remotely controlled car.' link='#' linkLabel='comming soon...' />
                                    <ProjectOverviewCard title='Flight Sim' imageSrc={flightSimPic} description='Creating a flight simulator based on MSFS, Xplane & G1000.' link='#' linkLabel='comming soon...' />
                                    <ProjectOverviewCard title='Self-balancing robot' imageSrc={selfBalRobPic} description='Implementing self balancing robot using classical and modern control theories.' link='#' linkLabel='comming soon...' />
                                    <ProjectOverviewCard title='DIY TV' imageSrc={tvPic} description='Creating a smart TV from a screen of a non functioning laptop & chromcast' link='#' linkLabel='comming soon...' />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
};