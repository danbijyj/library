import { IoChevronUp } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import './TopButton.scss';

const TopButton = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setShow(window.scrollY > 300);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!show) return null;

    return (
        <button className="top-button" onClick={scrollToTop}>
            <IoChevronUp />
        </button>
    );
};

export default TopButton;
