import './FilterBar.scss';
import { IoChevronDownOutline } from 'react-icons/io5';

const RegionSelect = ({ region, setRegion, regions }) => {
    return (
        <div className="select-box">
            <select value={region} onChange={(e) => setRegion(e.target.value)}>
                <option value="">경기도 전체</option>
                {regions.map((name) => (
                    <option key={name} value={name}>
                        {name}
                    </option>
                ))}
            </select>
            <span className="arrow">
                <IoChevronDownOutline />
            </span>
        </div>
    );
};

export default RegionSelect;
