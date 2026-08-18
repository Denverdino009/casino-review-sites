import React, { useEffect, useState } from 'react';
import CasinoIndonesia from './components/CasinoIndonesia';
import CasinoVietnam from './components/CasinoVietnam';
import CasinoPhilippines from './components/CasinoPhilippines';
import CasinoBrazil from './components/CasinoBrazil';

export default function App() {
  const [Component, setComponent] = useState(CasinoIndonesia);

  useEffect(() => {
    const hostname = window.location.hostname.toLowerCase();
    
    // Route based on domain
    if (hostname.includes('duabao') || hostname.includes('vietnam')) {
      setComponent(() => CasinoVietnam);
    } else if (hostname.includes('casinofilipinas') || hostname.includes('philipp')) {
      setComponent(() => CasinoPhilippines);
    } else if (hostname.includes('slotsbrasil') || hostname.includes('brazil')) {
      setComponent(() => CasinoBrazil);
    } else {
      // Default to Indonesia
      setComponent(() => CasinoIndonesia);
    }
  }, []);

  return <Component />;
}
