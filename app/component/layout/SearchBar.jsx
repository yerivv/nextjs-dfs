import useResize from '@/app/hook/useResize';

const SearchBar = ( {type, color} ) => {
  const { isDesktop } = useResize();

  let searchClass;
  if(isDesktop) {
    searchClass = `icon medium h-search ${color}`;
  } else {
    searchClass = `icon medium h-search-m ${color}`;
  }

  return (
    <>
    <div className="search">
      <label htmlFor="globalSearch" className="blind">통합 검색</label>
      <input type="search" name="globalSearch" id="globalSearch" title="검색어를 입력하세요." placeholder="검색어를 입력하세요." />
      <button type="button">
        <i className={searchClass}>검색</i>
      </button>
    </div>
    </>
  )
}

export default SearchBar;