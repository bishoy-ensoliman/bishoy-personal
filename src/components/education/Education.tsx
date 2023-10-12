import React from 'react';
import tumPic from '../../../public/tum.svg';
import foePic from '../../../public/foe.jpeg';
import SkillsCard from '../skills/SkillsCard';
import { Skill } from '../skills/SkillsElement';

const education: Skill[] = [{
    placeName: 'TUM',
    detail: 'B.Sc. Aerospace Engineering',
    from: 'Oct 2023',
    to: 'PRESENT',
    imageSrc: tumPic,
    city: 'Munich, DE'
},
{
    placeName: 'Faculty of Engineering, Alexandria University',
    detail: 'M.Sc. Computer & Systems Engineering (Course work)',
    from: 'Sep 2017',
    to: 'Dec 2018',
    imageSrc: foePic,
    city: 'Alexandria, EG'
},
{
    placeName: 'Faculty of Engineering, Alexandria University',
    detail: 'B.Sc. Computer & Systems Engineering',
    from: 'Sep 2012',
    to: 'Jul 2017',
    imageSrc: foePic,
    city: 'Alexandria, EG'
}];




export default function Education() {
    return (
        <SkillsCard cardTile='Education' elements={education} />
    );
};