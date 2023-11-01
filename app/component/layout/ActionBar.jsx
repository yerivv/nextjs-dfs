import Link from "next/link";

const ActionBar = () => {
  return (
    <div className="action-bar">
      <ul>
        <li>
          <Link href="#"><i className="icon medium menu"></i>메뉴</Link>
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