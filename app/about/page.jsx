import Link from "next/link";

const AboutIndex = () => {
  const currentTitle = '회사소개';
  return (
    <>
      <h2>회사소개</h2>
      <div className="about">
        <Link href="/">메인으로 이동</Link>
      </div>
    </>
  )
}

export default AboutIndex;


//https://velog.io/@hdpark/React-Query%EC%99%80-%ED%95%A8%EA%BB%98%ED%95%98%EB%8A%94-Next.js-%EB%AC%B4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4