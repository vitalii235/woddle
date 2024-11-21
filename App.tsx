import React from 'react';
import {Navigation} from './src/navigation';
import {Providers} from './src/providers.tsx';

function App() {
  return (
    <Providers>
      <Navigation />
    </Providers>
  );
}
export default App;
