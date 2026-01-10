import './FilterBar.scss';
import { IoSearch } from 'react-icons/io5';

const SearchInput = ({ keyword, setKeyword, onReset }) => {
    return (
        <div className="search-input">
            <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="검색어 없이 지역 선택만 할 수도 있습니다."
            />
            <p className="search-icon">
                <IoSearch />
            </p>
            <button type="button" className="reset-btn" onClick={onReset}>
                초기화
            </button>
        </div>
    );
};

export default SearchInput;
