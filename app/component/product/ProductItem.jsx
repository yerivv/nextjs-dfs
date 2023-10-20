'use client'
import { useState } from "react";
import Image from "next/image";
import useDesktop from "@/app/hook/useDesktop";

const ProductItem = () => {
  const isDesktop = useDesktop();
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  return (
    <div className="item">
      <div className="box-badge">
        <span className="best">1</span>
        <span className="sale">단하루</span>
      </div>
      <div className="box-image" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="box-thumb">
          <div className="thumb"><Image src="/static/images/sample/product/sample-1.jpg" width={160} height={160} style={{width: '100%', height: '100%'}} alt="상품명" /></div>
          <div className="back-blind"></div>
        </div>
  {isDesktop && 
        <div className={isHovered ? 'box-hover active' : 'box-hover active'}>
          <div className="default">
            <div className="fn-btn">
              <button className="btn1">상품찜</button>
              <button className="btn2">선물하기</button>
              <button className="btn3">장바구니</button>
              <button className="btn4">바로구매</button>
            </div>
            <div><button className="btn5">상세보기</button></div>
          </div>
          {/* <div className="sold-out">
            <div className="btn5">품절</div>
            <button className="btn5">재입고 알림 신청</button>
          </div>
          <div className="age-limit">연령제한표시</div> */}
        </div>
  }
      </div>
      <div className="box-info">
        <div className="brand">스윗니모</div>
        <div className="name">로얄살루트 21년 시그니처 블렌드 로얄살루트 21년 시그니처 블렌드 (원산지:스코틀랜드)</div>
        <div className="price-info">
          <div className="info">
            <span className="origin">$350</span>
            <span className="sale">20%</span>
          </div>
          <div>
            <strong className="price">$325</strong>
            <span className="price kor">(413,400원)</span>
          </div>
        </div>
        <div className="label-group">
          <span className="label">사은품</span>
          <span className="label">쿠폰</span>
          <span className="label">세일</span>
          <span className="label">온라인단독</span>
          <span className="label">skyshop exclusive</span>
        </div>
      </div>
    </div>
  )
}

export default ProductItem;