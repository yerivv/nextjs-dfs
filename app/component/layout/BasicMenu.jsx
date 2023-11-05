'use client'
import useResize from "@/app/hook/useResize";

const BasicMenu = ( {active} ) => {
  const { isDesktop } = useResize();
  let activeClass;
  if(active == true){
    activeClass = 'active';
  }

  return (
    <div className={`menu-wrapper ${activeClass}`}>
      메뉴영역
      {isDesktop || (
        <div>모바일에만 노출</div>
      )}
    </div>
  )
}

export default BasicMenu;