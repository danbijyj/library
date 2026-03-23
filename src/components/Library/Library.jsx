import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import './Library.scss';
import { IoAdd } from 'react-icons/io5';
import LibraryList from './LibraryList';
import FilterBar from './FilterBar/FilterBar';

const pageSize = 6;

const Library = () => {
    const [libraries, setLibraries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [region, setRegion] = useState('');
    const [keyword, setKeyword] = useState('');
    const [debouncedKeyword, setDebouncedKeyword] = useState('');

    const [visibleCount, setVisibleCount] = useState(pageSize);

    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(sectionRef.current, {
                y: 80,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedKeyword(keyword.trim());
        }, 300);
        return () => clearTimeout(timer);
    }, [keyword]);

    useEffect(() => {
        setVisibleCount(pageSize);
    }, [region, debouncedKeyword]);

    useEffect(() => {
        const fetchLibraries = async () => {
            try {
                setLoading(true);
                setError(null);
                const KEY = import.meta.env.VITE_GG_API_KEY;
                const url = `https://openapi.gg.go.kr/TBGGIBLLBR?KEY=${KEY}&Type=json&pIndex=1&pSize=1000`;
                const res = await fetch(url);
                if (!res.ok) throw new Error('API 요청 실패');
                const data = await res.json();
                const rows = data?.TBGGIBLLBR?.[1]?.row ?? [];
                setLibraries(rows);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchLibraries();
    }, []);

    const hasKeyword = keyword.trim().length > 0;
    const isFiltered = region !== '' || hasKeyword;

    const filteredLibraries = libraries.filter((item) => {
        const matchRegion = region === '' || item.SIGUN_NM === region;
        const matchKeyword =
            !hasKeyword ||
            item.LIBRRY_NM?.includes(debouncedKeyword) ||
            item.LOCPLC_ADDR?.includes(debouncedKeyword);
        return matchRegion && matchKeyword;
    });

    const sortedLibraries = isFiltered
        ? [...filteredLibraries].sort((a, b) =>
              a.LIBRRY_NM.localeCompare(b.LIBRRY_NM, 'ko-KR'),
          )
        : filteredLibraries;

    const displayedLibraries = sortedLibraries.slice(0, visibleCount);
    const more = visibleCount < sortedLibraries.length;

    const regions = [
        ...new Set(libraries.map((item) => item.SIGUN_NM).filter(Boolean)),
    ].sort((a, b) => a.localeCompare(b, 'ko-KR'));

    return (
        <section ref={sectionRef} className="library">
            <div className="inner">
                <FilterBar
                    region={region}
                    setRegion={setRegion}
                    keyword={keyword}
                    setKeyword={setKeyword}
                    debouncedKeyword={debouncedKeyword}
                    regions={regions}
                />

                <div className="result">
                    검색결과 <span>{sortedLibraries.length}</span>건
                </div>

                {loading && <p>불러오는중입니다.</p>}
                {error && <p>에러 발생: {error}</p>}

                {!loading && !error && (
                    <>
                        <LibraryList data={displayedLibraries} />

                        {more && (
                            <button
                                className="more-btn"
                                onClick={() =>
                                    setVisibleCount((prev) => prev + pageSize)
                                }
                            >
                                <IoAdd />
                                더보기
                            </button>
                        )}
                    </>
                )}
            </div>
        </section>
    );
};

export default Library;
