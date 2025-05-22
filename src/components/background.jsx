import { useEffect, useRef } from 'react'
import '../css/background.css'
import bg_vid from '/video/bg.mp4'
import fallback_image from '../assets/bg_white.webp'
import star from "/video/star.webm"

function Background(){
    const starRefs = useRef([]);

    useEffect(() => {
        starRefs.current.forEach((el, i) => {
            const delay = Math.random() * 5000;
            setTimeout(() => {
                el?.play().catch(() => {
                    console.warn(`Star ${i} failed to play.`);
                });
            }, delay);
        });
    }, []);


    const stars = Array.from({length: 7}).map((_, i) => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const size = 100 + Math.random() * 200;
        const delay = Math.random() * 5000;

        return(
            <video 
                key={i}
                ref={(el) => (starRefs.current[i] = el)}
                src={star}
                loop
                muted
                playsInline
                className="stars"
                style={{
                    top: `${top}%`,
                    left: `${left}%`,
                    width: `${size}px`,
                    height: "auto",
                    transform: `scale(${0.8 + Math.random() * 0.4})`,
                    animationDelay: `${delay}s`,
                    '--delay': `${delay}s`
                }}
            />
        );
    });

    return(
        <div className='bg_wrapper'>
            <video autoPlay loop muted playsInline poster={fallback_image} className='bg_video'>
                <source src={bg_vid} type='video/mp4' />
                    Browser does not support video tag
            </video>

            <div className='bg_content'>
                <div className='div_stars'>
                    {stars}
                </div>
            </div>
        </div>
    )
}

export default Background