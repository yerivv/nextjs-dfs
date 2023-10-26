'use client'

const SkipNavigation = () => {
  const handleSkipNavigation = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
    }
  };
  return (
    <div className="skip-navigation">
      <button className="btn" onClick={handleSkipNavigation}>본문으로 건너뛰기</button>
    </div>
  )
}

export default SkipNavigation;