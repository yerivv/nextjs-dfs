import Link from "next/link";
import useResize from '@/app/hook/useResize';

const FloatingBar = () => {
  const { isMobile, isDesktop } = useResize();
  return (
    <div className="floating-bar">
      <Link href="#">항공편등록</Link>
  {isMobile ? (
    <>
      <span tabIndex={0}>최근본상품</span>
    </>
  ) : (
    <>
      <Link href="#">혜택안내</Link>
      <Link href="#">이용안내</Link>
    </>
  )}
      <Link href="#">상단으로</Link>
    </div>
  )
}

export default FloatingBar;