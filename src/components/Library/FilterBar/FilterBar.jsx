import './FilterBar.scss';
import RegionSelect from './RegionSelect';
import SearchInput from './SearchInput';

const FilterBar = ({ region, setRegion, keyword, setKeyword, regions }) => {
    return (
        <section className="filter-bar">
            <div className="inner">
                <RegionSelect
                    region={region}
                    setRegion={setRegion}
                    regions={regions}
                />
                <SearchInput keyword={keyword} setKeyword={setKeyword} />
            </div>
        </section>
    );
};

export default FilterBar;
