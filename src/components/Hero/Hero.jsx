import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.scss';

const Hero = () => {
    const heroRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                delay: 0.3,
            });

            tl.from('.hero-icon', {
                y: 30,
                opacity: 0,
                duration: 0.6,
            })
                .from(
                    '.hero-title',
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.6,
                    },
                    '-=0.3',
                )
                .from(
                    '.line',
                    {
                        scaleX: 0,
                        transformOrigin: 'left',
                        duration: 0.5,
                    },
                    '-=0.3',
                )
                .from(
                    '.hero-subtitle',
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.5,
                    },
                    '-=0.2',
                )
                .from(
                    '.hero-desc',
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.5,
                    },
                    '-=0.2',
                )
                .from(
                    '.scroll-indicator',
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.5,
                    },
                    '-=0.2',
                );

            gsap.set('.hero-icon', {
                y: 6,
                scale: 0.8,
            });
            gsap.to('.hero-icon', {
                y: -10,
                scale: 1,
                repeat: -1,
                yoyo: true,
                duration: 1.8,
                ease: 'power1.inOut',
            });

            gsap.to('.scroll-indicator', {
                y: 8,
                repeat: -1,
                yoyo: true,
                duration: 0.5,
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="hero">
            <div className="inner">
                <img className="hero-icon" src="./images/hero.png" alt="" />

                <h2 className="hero-title">
                    <img src="./images/logo.png" alt="경기도" />
                    Public Library Finder
                </h2>

                <p className="line"></p>

                <h3 className="hero-subtitle">경기도 공공 도서관 찾기</h3>

                <p className="hero-desc">
                    경기도의 모든 공공 도서관 정보를 검색 할 수 있는 편리한
                    파인더
                </p>

                <div className="scroll-indicator">↓</div>
            </div>
        </section>
    );
};

export default Hero;
