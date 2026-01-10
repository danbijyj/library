import LibraryCard from './LibraryCard';
import './Library.scss';

const LibraryList = ({ data }) => {
    return (
        <div className="library-list">
            {data.map((item, idx) => (
                <LibraryCard
                    key={item.id ?? idx}
                    name={item.LIBRRY_NM}
                    address={item.LOCPLC_ADDR}
                    phone={item.TELNO}
                    closed={item.RECSROOM_REST_DE_INFO || '정보 없음'}
                    homepage={item.HMPG_ADDR}
                />
            ))}
        </div>
    );
};

export default LibraryList;
