import CommonSwiper from "@/app/component/common/SwiperComponent"

const GuideSwiper = () => {
  const slides = [
    { imageUrl: 'image1.jpg', title: 'High-End Anti-Aging', description: '브랜드마다 내세우는 감동의 안티에이징 솔루션 제품<\ n>높은 진입장벽에도 불구하고 수많은 이들이 기꺼이 지갑을 여는 이유' },
    { imageUrl: 'image2.jpg', title: 'Slide 2', description: 'Description 2' },
    // 추가 슬라이드 데이터
  ];
  const pattern = 'brand';
  return (
    <>
      <h2>Swiper 가이드</h2>
      <div className="guide-cont">
        1. 단일 배너 1개에 인디케이터, 정지/재성
      </div>
      <CommonSwiper slides={slides} pattern={pattern} />
    </>
  )
}

export default GuideSwiper;