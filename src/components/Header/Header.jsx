import './Header.scss';

const Header = () => {
    return (
        <nav className="header">
            <div className="inner">
                <h1>
                    <img src="./images/logo.png" alt="경기도 로고" />
                    PLF
                </h1>
            </div>
        </nav>
    );
};

export default Header;
