import './Library.scss';
import { IoLocationSharp, IoHomeSharp, IoBook } from 'react-icons/io5';

const LibraryCard = ({ name, address, phone, closed, homepage }) => {
    const naverMapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(
        address,
    )}`;

    return (
        <article className="library-card">
            <h3>
                <IoBook className="icon" />
                <span className="title">{name}</span>
            </h3>
            <div className="library-info">
                <p>
                    주소 : <span>{address}</span>
                </p>
                <p>
                    전화번호 : <span>{phone}</span>
                </p>
                <p>
                    휴무일 : <span>{closed}</span>
                </p>
            </div>
            <div className="library-btn">
                <a
                    href={
                        homepage.startsWith('http')
                            ? homepage
                            : `https://${homepage}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="go"
                >
                    <IoHomeSharp />
                    홈페이지
                </a>
                <a
                    href={naverMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="go"
                >
                    <IoLocationSharp />
                    네이버 지도
                </a>
            </div>
        </article>
    );
};

export default LibraryCard;
