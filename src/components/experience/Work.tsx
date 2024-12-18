import React from 'react';
import aviPic from '../../../public/avi.jpeg';
import flixPic from '../../../public/flix.jpeg';
import baPic from '../../../public/ba.jpeg';
import egymPic from '../../../public/egym.jpeg';
import foePic from '../../../public/foe.jpeg';
import pixelogicPic from '../../../public/pixelogic.jpeg';
import ppcPic from '../../../public/ppc.jpeg';
import vitanoiaPic from '../../../public/vitanoia.jpeg';
import arnellPic from '../../../public/arnell.jpeg';
import traclandPic from '../../../public/tracland.jpg';
import ercPic from '../../../public/erc_system_logo.jpeg';
import { Skill } from '../skills/SkillsElement';
import SkillsCard from '../skills/SkillsCard';

const workExperiences: Skill[] = [
    {
        placeName: 'eRC System',
        detail: 'Aerospace Data Science Engineer',
        from: 'Jan 2025',
        to: 'Present',
        imageSrc: ercPic,
        city: 'Munich, DE'
    },
    {
        placeName: 'Tracland',
        detail: 'Mechanical Engineer (Intern)',
        from: 'Aug 2024',
        to: 'Oct 2024',
        imageSrc: traclandPic,
        city: 'Alexandria, EG'
    },
    {
        placeName: 'Arnell',
        detail: 'Software Engineer (Student)',
        from: 'Jun 2024',
        to: 'Jul 2024',
        imageSrc: arnellPic,
        city: 'Munich, DE'
    },
    {
        placeName: 'Avi Medical',
        detail: 'Software Engineer',
        from: 'Oct 2022',
        to: 'Sep 2023',
        imageSrc: aviPic,
        city: 'Munich, DE'
    },
    {
        placeName: 'Flix',
        detail: 'Integration Manager',
        from: 'Jul 2021',
        to: 'Sep 2022',
        imageSrc: flixPic,
        city: 'Munich, DE'
    },
    {
        placeName: 'EGYM',
        detail: 'Software Engineer',
        from: 'Dec 2019',
        to: 'Jun 2021',
        imageSrc: egymPic,
        city: 'Munich, DE'
    },
    {
        placeName: 'Pixelogic Media',
        detail: 'Software Engineer',
        from: 'Jan 2019',
        to: 'Nov 2019',
        imageSrc: pixelogicPic,
        city: 'Cairo, EG'
    },
    {
        placeName: 'Bibliotheca Alexandrina',
        detail: 'Junior Software Engineer',
        from: 'Sep 2017',
        to: 'Dec 2018',
        imageSrc: baPic,
        city: 'Alexandria, EG'
    },
    {
        placeName: 'Vetanoia - Part-time',
        detail: 'Junior Software Engineer',
        from: 'Jan 2018',
        to: 'Dec 2018',
        imageSrc: vitanoiaPic,
        city: 'Alexandria, EG'
    },
    {
        placeName: 'Faculty of Engineering, Alexandria University',
        detail: 'Teaching Assistant',
        from: 'Sep 2017',
        to: 'Dec 2017',
        imageSrc: foePic,
        city: 'Alexandria, EG'
    },
    {
        placeName: 'Petroleum Pipelines Company',
        detail: 'Intern Control Systems Engineer',
        from: 'Jul 2016',
        to: 'Aug 2016',
        imageSrc: ppcPic,
        city: 'Alexandria, EG'
    }];

export default function Work() {
    return (
        <SkillsCard cardTile='Work' elements={workExperiences} />
    );
};