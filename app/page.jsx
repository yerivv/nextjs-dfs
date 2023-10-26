import Link from "next/link"

export default function Home() {
  let name = 'kim'
  let url = 'http://google.com'
  return (
    <div>
      <img src="/static/images/sample/banner/main-visual-mo.jpg" alt="11" />
      <h4 className="title" style={{color: 'orange', fontSize: '30px'}}>메인</h4>
      <p className="title-sub">yeri { name }</p>
      <a href={url}>링크</a>
    </div>
  )
}
