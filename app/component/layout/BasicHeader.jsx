import '@/public/styles/layout/header.scss'
import Link from 'next/link'
import BasicMenu from './BasicMenu'

//https://lee-yo-han.github.io/nextjs-react-responsive

export default function BasicHeader() {
  return (
    <>
    <header>
      <h1>
        <Link href="/" className="logo">로고</Link>
      </h1>
      {/* <div>개인화 영역</div>
      <div>검색/환율/언어</div>
      <div>메인 메뉴</div>
      <div>항공편검색</div>
      <h2>페이지명</h2> */}
    </header>
    </>
  )
}