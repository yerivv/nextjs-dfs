'use client'
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from "react";

const HistoryBack = () => {
  const router = useRouter();
  const pathName = usePathname();

  console.log(pathName);

  const handleBtnBack = () => {
    if (pathName === '/order/finish') {
      router.push('/');
  } else {
      router.back();
    }
  };
  
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        handleBtnBack();
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  return (
    <div className="btn-back">
      <button onClick={handleBtnBack} className="icon medium h-back">이전화면</button>
    </div>
  )
}

export default HistoryBack;