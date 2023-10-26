'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import useResize from '@/app/hook/useResize'

export default function BasicHeader() {
  const { isMobile, isDesktop } = useResize();
  const pathname = usePathname();
  //console.log(pathname)\
  return (
    <>
{isMobile && pathname !== '/' ? (
    <header>
      <div className="header-wrapper">
        <h1><span className="blind">대한항공 기내면세점</span> 페이지명</h1>
        <Link href="/" className="btn back">이전화면</Link>
        <Link href="/" className="btn search">검색</Link>
        <Link href="/" className="btn cart">장바구니</Link>
      </div>
    </header>
) : (
    <header>
      <div className="header-wrapper type-1">
        <h1>
          <Link href="/" className="logo">대한항공 기내면세점</Link>
        </h1>
        <div className="main">
          <div className="search">
            <label htmlFor="globalSearch" className="blind">통합 검색</label>
            <input type="search" name="globalSearch" id="globalSearch" title="검색어를 입력하세요." placeholder="검색어를 입력하세요." />
            <button type="button">검색</button>
          </div>
          <div className="util">
          {isMobile ? (
            <>
            <Link href="#">로그인</Link>
            <Link href="#">장바구니</Link>
            </>
          ) : (
            <>
            <Link href="#">로그인</Link>
            <Link href="#">나의 정보</Link>
            <span tabIndex={0}>알림</span>
            <Link href="#">고객센터</Link>
            <Link href="#">장바구니</Link>
            <span tabIndex={0}>최근본상품</span>
            </>
          )}
          </div>
        </div>
        <div className="menu">
        {isDesktop && (<div tabIndex={0}>전체메뉴</div>)}
          <ul>
            <li><Link href="#">베스트</Link></li>
            <li><Link href="#">세일</Link></li>
            <li><Link href="#">선물하기</Link></li>
            <li><Link href="#">주류전문관</Link></li>
            <li><Link href="#">스토리</Link></li>
            <li><Link href="#">이벤트</Link></li>
            <li><Link href="#">혜택</Link></li>
            <li><Link href="#">카달로그</Link></li>
          </ul>
        </div>
      {isDesktop && (<div tabIndex={0}>항공편검색</div>)}
      </div>
    </header>
)}

  {isMobile && (
    <div className="fixed-toolbar">
      <ul>
        <li>
          <Link href="#"><i className="icon medium menu"></i>메뉴</Link>
        </li>
        <li>
          <Link href="#"><i className="icon medium liquor"></i>주류전문관</Link>
        </li>
        <li>
          <Link href="#"><i className="home"></i><span className="blind">홈으로</span></Link>
        </li>
        <li>
          <Link href="#"><i className="icon medium mypage"></i>마이페이지</Link>
        </li>
        <li>
          <Link href="#"><i className="icon medium wish"></i>찜</Link>
        </li>
      </ul>
    </div>
  )}
    </>
  )
}