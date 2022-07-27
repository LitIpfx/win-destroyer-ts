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
    pageHealth: 1,
    volumeChangeDelta: 0.5,
  };

  useEffect(() => {
    myParent && setDestroyer(new Destroyer(myParent, options));
  }, [myParent]);

  useEffect(() => {
    destroyer && destroyer.inject();
  }, [destroyer]);

  return <div className="App myParent" ref={(el) => (myParent = el)} />;

  // const [count, setCount] = useState(0);

  // return (
  //   <div className="App">
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src="/vite.svg" className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://reactjs.org" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
  //   </div>
  // );
}

export default App;
