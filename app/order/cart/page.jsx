'use client'
import Link from "next/link";
import { useRouter } from 'next/navigation'

const OrderCart = () => {
  const router = useRouter();
  const handleBtnFinish = (e) => {
    e.preventDefault();
    router.push('/order/finish');
  }
  return (
    <div className="cart">
      <h2>장바구니</h2>
      <Link href="/order/finish" className="count-box" onClick={handleBtnFinish}>다음</Link>
    </div>
  )
}

export default OrderCart;