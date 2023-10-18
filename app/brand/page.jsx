'use client'
import Image from "next/image"
import useMobile from "@/app/hook/useMobile"
import useDesktop from "@/app/hook/useDesktop";

export default function BrandDetail() {
  const isMobile = useMobile();
  const isDesktop = useDesktop();
  return (
    <div className="brand-detail">
      <h2>브랜드 로고</h2>
      <div>
        <button>공유</button>
        <button>찜(설정/해제)</button>
      </div>
      
      <div className="wrap-banner">
      {isMobile ? 
        <div className="box-banner">
          <Image src="/static/images/sample/banner/brand-mo.jpg" width={375} height={450} style={{width: '100%', height: 'auto'}} priority alt="" className="d-block-mobile" />
        </div>
        :
        <div className="box-banner">
          <Image src="/static/images/sample/banner/brand-pc.jpg" width={1300} height={500} style={{width: '100%', height: 'auto'}} priority alt="" className="d-none-mobile" />
        </div>
      }
      </div>
      
      <div className="intro">
        <h3 className="title">ABOUT</h3>
        <div className="context">여성의 아름다움은 계속 진화합니다. 과거의 한 순간에 머무르지 않습니다. 설화수는 이 믿음으로 본연의 아름다움을 찾아 나서며 시간이 흘러도 건강하게 빛나는 아름다움을 탐구했습니다. 설화수와 함께 삶의 모든 순간에서 본연의 아름다움을 누릴 수 있습니다. 한방 과학 연구 센터는 아시아의 지혜와 현대 과학을 끊임없이 접목하며 설화수만의 혁신을 이끌고 있습니다.</div>
      </div>

      <div className="section">
        <h3 className="blind">브랜드 상품 리스트</h3>
        <div className="wrap-product">
          {/* 상품 개당 box */}
          <div className="item">
            <div className="box-badge">
              <span>1</span>
            </div>
            <div className="box-image">
              <div className="box-thumb">
                <div className="thumb"><Image src="/static/images/sample/product/sample-1.jpg" width={160} height={160} style={{width: '100%', height: '100%'}} alt="상품명" /></div>
                <div className="back-blind"></div>
              </div>
            {isDesktop && 
              <div className="box-hover">
                <div>
                  <button className="btn1">상품찜</button>
                  <button className="btn2">선물하기</button>
                  <button className="btn3">장바구니</button>
                  <button className="btn4">바로구매</button>
                  <div className="btn5">품절</div>
                  <button className="btn5">상세보기</button>
                  <button className="btn5">재입고 알림 신청</button>
                </div>
                <div className="age-limit">연령제한표시</div>
              </div>
            }
            </div>
            <div className="box-info">
              <div className="brand">스윗니모</div>
              <div className="name">로얄살루트 21년 시그니처 블렌드 로얄살루트 21년 시그니처 블렌드 (원산지:스코틀랜드)</div>
              <div className="price-info">
                <div>$350 20%</div>
                <div>$325 (413,400원)</div>
              </div>
              <div className="label-group">
                <span className="label">사은품</span>
                <span className="label">쿠폰</span>
                <span className="label">세인</span>
              </div>
            </div>
          </div>
          {/* //상품 개당 box */}
          <div className="item">2</div>
          <div className="item">3</div>
          <div className="item">4</div>
        </div>
      </div>
    </div>
  )
}