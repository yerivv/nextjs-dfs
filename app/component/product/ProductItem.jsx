'use client'
import { useState } from "react";
import Image from "next/image";
import useResize from "@/app/hook/useResize";
import { priceKor, priceEng } from "@/app/utils/format"

const ProductItem = ({ item }) => {
  const isDesktop = useResize();
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  const handleMouseLeave = () => {
    setIsHovered(false);
  }
  const formattedpriceOrg = priceEng(item.origin);
  const formattedpriceEng = priceEng(item.priceE);
  const fotmattedPriceKo = priceKor(item.priceK);

  return (
    <div className="item">
      {/* <div className="box-badge">
        <span className="best">1</span>
        <span className="sale">단하루</span>
      </div> */}
      <div className="box-image" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onFocus={handleMouseEnter} onBlur={handleMouseLeave}>
        <div className="box-thumb">
          <div className="thumb"><Image src={item.image} width={160} height={160} style={{width: '100%', height: '100%'}} alt={item.name} /></div>
          <div className="back-blind"></div>
        </div>
{isDesktop && 
        <div className={`box-hover ${isHovered ? 'active' : ''}`} tabIndex={0}>
      {item.stock > 0 ? (
        item.age === false ? (
          <div className="default">
            <div className={`fn-btn`}>
              <button className="btn wish"><i></i><strong>찜하기</strong></button>
              <button className="btn gift"><i></i><strong>선물하기</strong></button>
              <button className="btn cart"><i></i><strong>장바구니</strong></button>
              <button className="btn direct"><i></i><strong>바로구매</strong></button>
            </div>
            <div className="fix-btn"><button className="btn wide radius">상세보기</button></div>
          </div>
        ) : (
          <div className="age-limit">
            <strong className="age">19</strong>
            <strong>Adult only</strong>
          </div>
        )
      ) : (
          <div className="default stock">
            <div className="fn-btn">
              <div className="sold-out"><button className="btn radius">일시 품절</button></div>
            </div>
            <div className="fix-btn"><button className="btn radius">재입고 알림 신청</button></div>
          </div>
      )}
        </div>
}
      </div>
      <div className="box-info">
        <div className="brand">{item.brand}</div>
        <div className="name">{item.name}</div>
        <div className="price-info">
          <div className="info">
            {item.origin !== null && (<span className="origin">{formattedpriceOrg}</span>)}
            {item.sale !== null && (<span className="sale">{item.sale}%</span>)}
            &nbsp;
          </div>
          <div>
            <strong className="price">{formattedpriceEng}</strong>
            <span className="price kor">({fotmattedPriceKo})</span>
          </div>
        </div>
      {item.labels.length > 0 &&
        <div className="label-group">
          {item.labels.map((label, item) => (
            <span key={item} className="label">{label}</span>
          ))}
        </div>
      }
      </div>
    </div>
  )
}

export default ProductItem;