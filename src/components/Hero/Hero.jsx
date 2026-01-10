import './Hero.scss';

const Hero = () => {
    return (
        <section className="hero">
            <div className="inner">
                <img src="./images/hero.png" alt="" />
                <h2>
                    <img src="./images/logo.png" alt="경기도" />
                    Public Library Finder
                </h2>
                <p className="line"></p>
                <h3>경기도 공공 도서관 찾기</h3>
                <p>
                    경기도의 모든 공공 도서관 정보를 검색 할 수 있는 편리한
                    파인더
                </p>
            </div>
        </section>
    );
};

export default Hero;
