import React from 'react';
import CasinoIndonesia from './components/CasinoIndonesia';
import CasinoVietnam from './components/CasinoVietnam';
import CasinoPhilippines from './components/CasinoPhilippines';
import CasinoBrazil from './components/CasinoBrazil';

export default function App() {
  const hostname = window.location.hostname.toLowerCase();

  // Route based on domain
  if (hostname.includes('duabao') || hostname.includes('vietnam')) {
    return <CasinoVietnam />;
  } else if (hostname.includes('casinofilipinas') || hostname.includes('philipp')) {
    return <CasinoPhilippines />;
  } else if (hostname.includes('slotsbrasil') || hostname.includes('brazil')) {
    return <CasinoBrazil />;
  } else {
    // Default to Indonesia for all others (including pages.dev)
    return <CasinoIndonesia />;
  }
}
