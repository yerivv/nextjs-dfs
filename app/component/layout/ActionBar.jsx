'use client'
import Link from "next/link";
import { useState } from "react";
import BasicMenu from './BasicMenu';

const ActionBar = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const handleMenuView = (e) => {
    e.preventDefault();
    setMenuActive(!isMenuActive);
  }
  return (
    <div className="action-bar">
      <ul>
        <li>
          <Link href="#" onClick={handleMenuView}><i className="icon medium menu"></i>메뉴</Link>
          <BasicMenu active={isMenuActive} />
        </li>
        <li>
          <Link href="#"><i className="icon medium liquor"></i>주류전문관</Link>
        </li>
        <li>
          <Link href="/"><i className="home"></i><span className="blind">홈으로</span></Link>
        </li>
        <li>
          <Link href="#"><i className="icon medium mypage"></i>마이페이지</Link>
        </li>
        <li>
          <Link href="#"><i className="icon medium wish"></i>찜</Link>
        </li>
      </ul>
    </div>
  )
}

export default ActionBar;