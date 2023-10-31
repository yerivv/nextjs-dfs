'use client'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import useResize from '@/app/hook/useResize';
import ActionBar from './ActionBar';
import BasicMenu from './BasicMenu';
import SearchBar from './SearchBar';
import GnbMenu from './gnbMenu';
import HistoryBack from '../button/HistoryBack';
import UtilButtons from '../button/UtilButtons';
import LogoImg from '../icon/LogoImg';

const BasicHeader = () => {
  const { isDesktop } = useResize();
  const pathname = usePathname();
  //console.log(pathname)

  let headerType = 'default';
  let fill = '#000';
  let color;
  if(pathname === '/') {
    headerType = 'type-1';
    fill = '#fff';
    color = 'white';
  }
  const type = 'koreanAir'

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
            <Link href="#" className="btn-menu"><i className={`icon medium menu ${color}`}>전체메뉴</i></Link>
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
          <h1><span className="blind">대한항공 기내면세점</span> 페이지명</h1>
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
    <BasicMenu />
{isDesktop || <ActionBar />}
    </>
  )
}

export default BasicHeader;