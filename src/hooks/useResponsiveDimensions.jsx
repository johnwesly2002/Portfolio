// src/hooks/useResponsiveDimensions.js
import { useState, useEffect } from 'react';

const BREAKPOINTS = [
  { max: 300, default: { width: 200, height: 200 }, edu: { width: 200, height: 200 } },
  { max: 500, default: { width: 300, height: 200 }, edu: { width: 300, height: 200 } },
  { max: 650, default: { width: 450, height: 400 }, edu: { width: 300, height: 200 } },
  { max: 768, default: { width: 600, height: 450 }, edu: { width: 300, height: 200 } },
  { max: 840, default: { width: 400, height: 280 }, edu: { width: 300, height: 200 } },
  { max: 940, default: { width: 500, height: 350 }, edu: { width: 350, height: 250 } },
  { max: 1030, default: { width: 600, height: 400 }, edu: { width: 350, height: 250 } },
  { max: 1140, default: { width: 600, height: 400 }, edu: { width: 300, height: 350 } },
  { max: Infinity, default: { width: 600, height: 400 }, edu: { width: 600, height: 400 } },
];

export default function useResponsiveDimensions(type = 'default') {
  const getDims = (w) =>
    BREAKPOINTS.find(bp => w <= bp.max)[type === 'edu' ? 'edu' : 'default'];

  const [dimensions, setDimensions] = useState(getDims(window.innerWidth));

  useEffect(() => {
    const onResize = () => setDimensions(getDims(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [type]);

  return dimensions;
}
