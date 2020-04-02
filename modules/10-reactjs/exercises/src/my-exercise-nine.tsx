import React, { useEffect, useState } from 'react'
function useWindowSize(){
  const [windowSize, setWindowSize] = useState(getSize);
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize
}

export const MyExerciseNine: React.FC = () => {
  const windowSize = useWindowSize()
  return (
      <div>
        {windowSize.width} {windowSize.height}
      </div>
  )
}
