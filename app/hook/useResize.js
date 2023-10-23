'use client'
import { useState, useEffect } from 'react';

const useResize = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      setIsMobile(innerWidth < 768);
      setIsDesktop(innerWidth >= 1280);
    };

    handleResize(); // 컴포넌트 마운트 시 초기 값 설정

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isMobile, isDesktop };
};

export default useResize;