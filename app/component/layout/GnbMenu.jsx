import Link from "next/link";

const GnbMenu = () => {
  return (
    <div className="gnb">
      <ul>
        <li className="active">
          <Link href="#" className="box"><span className="text">베스트</span></Link>
        </li>
        <li>
          <div className="box"><span className="text">세일</span></div>
        </li>
        <li>
          <Link href="#" className="box"><span className="text">선물하기</span></Link>
        </li>
        <li>
          <Link href="#" className="box"><span className="text">주류전문관</span></Link>
        </li>
        <li>
          <Link href="#" className="box"><span className="text">스토리</span></Link>
        </li>
        <li>
          <Link href="#" className="box"><span className="text">이벤트</span></Link>
        </li>
        <li>
          <Link href="#" className="box"><span className="text">혜택</span></Link>
        </li>
        <li>
          <Link href="#" className="box"><span className="text">카달로그</span></Link>
        </li>
      </ul>
    </div>
  )
}

export default GnbMenu;