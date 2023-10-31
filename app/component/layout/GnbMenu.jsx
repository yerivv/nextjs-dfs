import Link from "next/link";

export async function getServerSideProps() {
  const res = await fetch('http://localhost:9016/gnbMenu')
  const repo = await res.json()
  return { props: { repo } }
}

const GnbMenu = async ({gnb}) => {
  return (
    <div className="gnb">
      <ul>
      {gnb.map((item, index) => (
        <li key={index} className="active"><Link href="#">{item.menuName}</Link></li>
      ))}
        {/* <li className="active"><Link href="#">베스트</Link></li>
        <li><Link href="#">세일</Link></li>
        <li><Link href="#">선물하기</Link></li>
        <li><Link href="#">주류전문관</Link></li>
        <li><Link href="#">스토리</Link></li>
        <li><Link href="#">이벤트</Link></li>
        <li><Link href="#">혜택</Link></li>
        <li><Link href="#">카달로그</Link></li> */}
      </ul>
    </div>
  )
}

export default GnbMenu;