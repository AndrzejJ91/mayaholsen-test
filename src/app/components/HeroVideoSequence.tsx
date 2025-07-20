"use client"

import { useEffect, useRef, useState } from "react";

export default function HeroVideoSequence() {

    const videoRefs = [
        useRef<HTMLVideoElement>(null),
        useRef<HTMLVideoElement>(null),
        useRef<HTMLVideoElement>(null),
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [showOverlay, setShowOverlay] = useState(false);


    useEffect(() => {
        const timer = setTimeout(() => {
            setShowOverlay(true)
        },500);

    });

    const handleEnded = () => {

        const nextIndex = (activeIndex + 1) % videoRefs.length;

        setActiveIndex(nextIndex);

        videoRefs[nextIndex].current?.play();
    };


    return (
        <div className="relative w-full h-[70vh] overflow-hidden">
            {videoRefs.map((ref, index) => (



                <video
                    key={index}
                    ref={ref}
                    src={`/video/clip${index + 1}.mp4`}
                    className={`absolute w-full h-full object-cover transition-opacity duration-700 ${index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                    autoPlay={index === activeIndex}
                    muted
                    playsInline
                    onEnded={handleEnded}
                >

                </video>
            ))};
              {showOverlay && ( 
            <div className="w-1/3 h-[85%] absolute top-10 right-10 bg-black/30 flex flex-col items-start justify-start z-20 px-6 py-6 space-y-6 fade-slide-down">
                <h1 className="text-white md:text-3xl font-serif">
                    Dachkeramik Mayaholsen GmbH Hüllhorst
                </h1>

                <div className="w-full h-px bg-white opacity-50" />

                <ul className="text-white list-disc pl-5 space-y-3 text-base md:text-lg">
                    <li>Keramische Dachziegel seit 1890</li>
                    <li>Eigene Produktions- und Brennlinien</li>
                    <li>Sonderlösungen für denkmalgeschützte Objekte</li>
                    <li>Moderne Fassaden- und Belüftungssysteme</li>
                </ul>
            </div>
            )} 
        </div>
    )

}