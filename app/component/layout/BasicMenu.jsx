const BasicMenu = ( {active} ) => {
  let activeClass;
  if(active == true){
    activeClass = 'active';
  }

  return (
    <div className={`menu-wrapper ${activeClass}`}>공통 메뉴 오픈</div>
  )
}

export default BasicMenu;