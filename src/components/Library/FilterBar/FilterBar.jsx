import './FilterBar.scss';
import RegionSelect from './RegionSelect';
import SearchInput from './SearchInput';

const FilterBar = ({ region, setRegion, keyword, setKeyword, regions }) => {
    const handleReset = () => {
        setKeyword('');
        setRegion('');
    };

    return (
        <section className="filter-bar">
            <div className="inner">
                <RegionSelect
                    region={region}
                    setRegion={setRegion}
                    regions={regions}
                />
                <SearchInput
                    keyword={keyword}
                    setKeyword={setKeyword}
                    onReset={handleReset}
                />
            </div>
        </section>
    );
};

export default FilterBar;
