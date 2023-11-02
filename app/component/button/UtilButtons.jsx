'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import useResize from '@/app/hook/useResize';

const UtilButtons = ({ name, color }) => {
  const router = useRouter();
  const { isDesktop } = useResize();
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  const boxEvents = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleMouseEnter,
    onBlur: handleMouseLeave,
  };

  let boxHover = `box ${isHovered ? 'hover' : ''}`;
  let iconHover = `${isHovered ? '' : `${color}`}`;

  const handleBtnCart = (e) => {
    e.preventDefault();
    router.push('/order/cart');
  };

  return (
    <>
  {name === 'user' && (
    <Link href="#" className={boxHover} {...boxEvents}>
      <i className={`icon medium h-login ${iconHover}`}></i>
      <span className="text">로그인</span>
    </Link>
  )}
  {name === 'my' && (
    <Link href="#" className={boxHover} {...boxEvents}>
      <i className={`icon medium h-my ${iconHover}`}></i>
      <span className="text">나의정보</span>
    </Link>
  )}
  {name === 'notify' && (
    <Link href="#" className={boxHover} {...boxEvents}>
      <i className={`icon medium h-notify ${iconHover}`}></i>
      <span className="text">알림보기</span>
    </Link>
  )}
  {name === 'cs' && (
    <Link href="#" className={boxHover} {...boxEvents}>
      <i className={`icon medium h-cs ${iconHover}`}></i>
      <span className="text">고객센터</span>
    </Link>
  )}
  {name === 'cart' && (
    isDesktop ? (
      <Link href="/order/cart" className={`count-box ${boxHover}`} {...boxEvents} onClick={handleBtnCart}>
        <i className={`icon medium h-cart ${iconHover}`}></i>
        <span className="count">0</span>
        <span className="text">장바구니</span>
      </Link>
    ) : (
      <Link href="/order/cart" className="count-box" onClick={handleBtnCart}>
        <i className={`icon medium h-cart-m ${color}`}>장바구니</i>
        <span className="count">0</span>
      </Link>
    )
  )}
  {name === 'recently' && (
    <Link href="#" className={boxHover} {...boxEvents}>
      <div className="thumb">
        {/* <Image src={`/static/images/sample/product/sample-4.jpg`} width={30} height={30} alt="상품명" /> */}
      </div>
      <span className="text">최근상품</span>
    </Link>
  )}
    </>
  )
}

export default UtilButtons;