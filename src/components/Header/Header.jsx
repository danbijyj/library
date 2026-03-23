import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Header.scss';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', onScroll);
        onScroll();

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                headerRef.current,
                {
                    y: -60,
                    autoAlpha: 0,
                },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.7,
                    ease: 'power3.out',
                },
            );
        }, headerRef);

        return () => ctx.revert();
    }, []);

    return (
        <nav ref={headerRef} className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="inner">
                <h1 className="logo">
                    <img src="./images/logo.png" alt="경기도 로고" />
                    <span>Public Library Finder</span>
                </h1>
            </div>
        </nav>
    );
};

export default Header;
