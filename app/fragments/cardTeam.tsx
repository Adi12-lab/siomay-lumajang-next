"use client"
import { trigger, getClass } from '../helper';
import anime from 'animejs';
import { useEffect } from 'react';
export default function CardTeam() {
    type dataType = {
        title: string;
        value: number;
    };

    const data: dataType[] = [
        {
            title: "Food Delivered",
            value: 7767,
        },
        {
            title: "Satisfied",
            value: 1000,
        },
        {
            title: "Experience",
            value: 20,
        },
    ];

    useEffect(() => {
        
        const teamExperience = Array.from(document.getElementsByClassName("team-experience"))
        teamExperience.forEach((experience, i) => {
            trigger(experience, () => {
                const valueExp = data[i].value
                anime({
                    targets: `${getClass(experience)}.exp-${i} .expValue`,
                    innerHTML: [0, valueExp],
                    easing: 'linear',
                    duration: 2500,
                    round: 1
    
                })
            }, 0.6)
        })
    }, [])

    return (
        <>
            {data.map((item, index) => {
                return (
                    <div key={index} className={`team-experience exp-${index} p-4 flex flex-col items-center justify-center text-center w-full rounded-3xl shadow-[0_16px_48px_0_rgba(0,0,0,0.176)] lg:w-[180px]`}>
                        <h5 className="text-3xl font-semibold text-primary">
                            <span className="expValue">0</span>+
                        </h5>
                        <span className="mt-2 text-[19.2px] font-medium text-gray">
                            {item.title}
                        </span>
                    </div>
                );
            })}

        </>
    )
}
