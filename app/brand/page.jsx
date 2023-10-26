import Image from "next/image"
import ProductItem from "../../component/product/ProductItem";
import BannerItem from "../../component/banner/BannerItem";

const fetchBrands = async () => {
  const res = await fetch("http://localhost:9016/brand", {cache: "no-store"});
  return res.json();
}

const BrandDetail = async () => {
  const brand = await fetchBrands();
  const pcSlides = brand.bannerPC;
  const moSlides = brand.bannerMO;
  const pattern = 'brand';
  return (
    <div className="brand-detail">
      <h2>
      {brand.logo ? (
        <Image src={brand.logo} width={250} height={74} style={{height: 'auto'}} alt={brand.name} />
      ) : (
        <span>{brand.name}</span>
      )}
      </h2>
      <div>
        <button>공유</button>
        <button>찜(설정/해제)</button>
      </div>
      
      <div className="wrap-banner">
        <BannerItem pcSlides={pcSlides} moSlides={moSlides} pattern={pattern} />
      </div>
      
      <div className="intro">
        <h3 className="title">ABOUT</h3>
        <div className="context">{brand.intro}</div>
      </div>

      <div className="section">
        <h3 className="blind">브랜드 상품 리스트</h3>
        <div className="wrap-product">
          {/* 상품 개당 box */}
          {brand.product.map((item, index) => (
            <ProductItem item={item} key={index}  />
          ))}
          {/* //상품 개당 box */}
        </div>
      </div>
    </div>
  )
}

export default BrandDetail;
