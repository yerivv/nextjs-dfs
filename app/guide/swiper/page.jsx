//import CommonSwiper from "@/component/banner/BannerItem"
import ZoomSwiper from "../../component/common/zoomSwiper"

const GuideSwiper = () => {
  const slides = [
    {
      imageUrl: '/static/images/sample/banner/story-1.jpg',
      title: 'High-End Anti-Aging',
      description:
        '브랜드마다 내세우는 감동의 안티에이징 솔루션 제품\n높은 진입장벽에도 불구하고 수많은 이들이 기꺼이 지갑을 여는 이유',
    },
    {
      imageUrl: '/static/images/sample/banner/story-2.jpg',
      title: 'Slide 2',
      description: 'Description 2',
    },
    {
      imageUrl: '/static/images/sample/banner/story-1.jpg',
      title: 'Slide 2',
      description: 'Description 2',
    },
    {
      imageUrl: '/static/images/sample/banner/story-2.jpg',
      title: 'Slide 2',
      description: 'Description 2',
    },
    {
      imageUrl: '/static/images/sample/banner/story-1.jpg',
      title: 'Slide 2',
      description: 'Description 2',
    }
  ]

  const pattern = 'brand';
  
  return (
    <>
      <h2>Swiper 가이드</h2>
      {/* <div className="guide-cont">
        1. 단일 배너 1개에 인디케이터, 정지/재성
      </div>
      <CommonSwiper slides={slides} pattern={pattern} /> */}

      <div className="guide-cont">
        1. active슬라이드 zoom
      </div>
      <ZoomSwiper slides={slides} pattern={`zooms`} />
    </>
  )
}

export default GuideSwiper;