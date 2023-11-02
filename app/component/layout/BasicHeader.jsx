'use client'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import useResize from '@/app/hook/useResize';
import ActionBar from './ActionBar';
import BasicMenu from './BasicMenu';
import SearchBar from './SearchBar';
import GnbMenu from './gnbMenu';
import TitleBox from './TitleBox';
import HistoryBack from '../button/HistoryBack';
import UtilButtons from '../button/UtilButtons';
import LogoImg from '../icon/LogoImg';

const BasicHeader = () => {
  const { isDesktop } = useResize();
  const pathname = usePathname();
  const [isMenuActive, setMenuActive] = useState(false);

  let headerType = 'default';
  let fill = '#000';
  let color;
  if(pathname === '/') {
    headerType = 'type-1';
    fill = '#fff';
    color = 'white';
  }
  const type = 'koreanAir'
  const currentTitle = '메인';

  const handleMenuView = () => {
    setMenuActive(!isMenuActive);
  }

  return (
    <>
    <header className={headerType}>
      <div className="header-wrapper">
{isDesktop || pathname === '/' ? (
      <>
        <div className="main">
          <h1>
            <Link href="/" className="logo">
              <LogoImg type={type} color={fill} />
            </Link>
          </h1>
          <SearchBar type="default" color={color} />
          <div className="util">
          {isDesktop ? (
            <>
            <UtilButtons name="user" color={color} />
            <UtilButtons name="my" color={color} />
            <UtilButtons name="notify" color={color} />
            <UtilButtons name="cs" color={color} />
            <UtilButtons name="cart" color={color} />
            <UtilButtons name="recently" color={color} />
            </>
          ) : (
            <>
            <UtilButtons name="cart" color={color} />
            </>
          )}
          </div>
        </div>
        <div className="menu">
        {isDesktop && (
          <div className="all">
            <button type="button" onClick={handleMenuView} className="btn-menu"><i className={`icon medium menu ${color}`}>전체메뉴</i></button>
            <BasicMenu active={isMenuActive} />
          </div>
        )}
          <GnbMenu />
        {isDesktop && (
          <div className="other">
            <Link href="#">임직원몰</Link>
            <Link href="#" className="btn-airplane">
              <span>고객님이 탑승하는 노선 선택</span>
              <Image src={`/static/images/icon/img-airplane.png`} width={60} height={60} className="icon" alt="대한항공" />
            </Link>
          </div>
        )}
        </div>
      </>
) : (
      <>
        <div className="sub">
          <h1><span className="blind">대한항공 기내면세점</span> <TitleBox title={currentTitle} /></h1>
          <HistoryBack />
          <div className="btn-search">
            <SearchBar type="sub" />
          </div>
          <div className="btn-cart">
            <UtilButtons name="cart" />
          </div>
        </div>
      </>
)}
      </div>
    </header>
{isDesktop || <ActionBar />}
    </>
  )
}

export default BasicHeader;