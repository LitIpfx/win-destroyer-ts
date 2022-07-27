import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Destroyer from 'domain-destroyer';
import '../../src/css/destroyer.min.css';
import { DestroyerOptions } from '../../dist/types';

function App() {
  let myParent: HTMLElement | null = null;
  const [destroyer, setDestroyer] = useState<Destroyer | null>(null);

  const options: DestroyerOptions = {
    defaultVolume: 0.5,
    particleLimit: 20,
    zIndexStart: 5,
    onDamage: (pageHealth: number) => console.log(pageHealth),
    pageHealth: 200,
    volumeChangeDelta: 0.5,
  };

  useEffect(() => {
    myParent && setDestroyer(new Destroyer(myParent, options));
  }, [myParent]);

  useEffect(() => {
    destroyer && destroyer.inject();
  }, [destroyer]);

  return <div className="App myParent" ref={(el) => (myParent = el)} />;
}

export default App;
