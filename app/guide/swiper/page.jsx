//import CommonSwiper from "@/component/banner/BannerItem"
import ZoomSwiper from "../../component/common/zoomSwiper"

const GuideSwiper = () => {
  const slides = [
    {
      imageUrl: '/static/images/sample/banner/story-1.jpg',
      title: 'SUMMER PERFUME',
      description:
        '시원한 여름 시트러스 향수를 만나보자',
    },
    {
      imageUrl: '/static/images/sample/banner/story-1.jpg',
      title: 'List Entity 2',
      description: 'Description goes here 2',
    },
    {
      imageUrl: '/static/images/sample/banner/story-1.jpg',
      title: 'List Entity 3',
      description: 'Description goes here 3',
    },
    {
      imageUrl: '/static/images/sample/banner/story-2.jpg',
      title: 'List Entity 4',
      description: 'Description goes here 4',
    },
    {
      imageUrl: '/static/images/sample/banner/story-1.jpg',
      title: 'List Entity 5',
      description: 'Description goes here 5',
    }
  ]
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
      <ZoomSwiper slides={slides} pattern="zooms" />
    </>
  )
}

export default GuideSwiper;