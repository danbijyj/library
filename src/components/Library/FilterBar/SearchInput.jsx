import './FilterBar.scss';
import { IoSearch } from 'react-icons/io5';

const SearchInput = ({ keyword, setKeyword }) => {
    return (
        <div className="search-input">
            <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="검색어 없이 지역 선택만 할 수도 있습니다."
            />
            <button type="button" className="search-btn">
                <IoSearch />
            </button>
        </div>
    );
};

export default SearchInput;
