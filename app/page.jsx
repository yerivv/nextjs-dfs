import Link from "next/link"

export default function Home() {
  let name = 'kim'
  let url = 'http://google.com'
  return (
    <div>
      <div className="navbar">
        <Link href="/">홈</Link>
        <Link href="/list">List</Link>
        <Link href="/post">Post</Link>
      </div>
      <h4 className="title" style={{color: 'red', fontSize: '30px'}}>후레시</h4>
      <p className="title-sub">yeliii { name }</p>
      <a href={url}>링크</a>
    </div>
  )
}
