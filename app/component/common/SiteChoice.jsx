'use client'
import { useState, useEffect } from "react";

const SiteChoice = () => {
  const initialAirline = localStorage.getItem('selectedAirline') || 'koreanair';
  const [selectedAirline, setSelectedAirline] = useState(initialAirline);
  const [bodyClass, setBodyClass] = useState(selectedAirline);

  const handleSiteChoice = (airline) => {
    setSelectedAirline(airline);
    localStorage.setItem('selectedAirline', airline);
    setBodyClass(airline);
  };

  useEffect(() => {
    const savedAirline = localStorage.getItem('selectedAirline');
    if (savedAirline) {
      setSelectedAirline(savedAirline);
      setBodyClass(savedAirline);
    }
    document.querySelector('body').className = bodyClass; // body 요소에 bodyClass 클래스 적용
  }, [bodyClass]);

  return (
    <div className="site-choice">
      <input type="radio" name="site" id="ka" checked={selectedAirline === 'koreanair'} onChange={() => handleSiteChoice('koreanair')} /><label htmlFor="ka">대한항공</label>
      <input type="radio" name="site" id="jin" checked={selectedAirline === 'jinair'} onChange={() => handleSiteChoice('jinair')} /><label htmlFor="jin">진에어</label>
    </div>
  )
}

export default SiteChoice;