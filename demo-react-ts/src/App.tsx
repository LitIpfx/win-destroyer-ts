import { useEffect, useState } from 'react';
import './App.css';
import Destroyer from 'win-destroyer-ts';
import 'win-destroyer-ts/build/css/index.css';
import hammer_1 from './sounds/hammer_1.webm';
import hammer_2 from './sounds/hammer_2.webm';
import machinegun_1 from './sounds/machinegun.webm';
import stamp_1 from './sounds/stamp.webm';

const App = () => {
  let myParent: HTMLElement | null = null;
  const [destroyer, setDestroyer] = useState<Destroyer | null>(null);

  useEffect(() => {
    const options = {
      defaultVolume: 0.5,
      particleLimit: 20,
      zIndexStart: 5,
      onDamage: (pageHealth: number) => console.log(pageHealth),
      pageHealth: 200,
      volumeChangeDelta: 0.5,
    };
    myParent &&
      setDestroyer(
        new Destroyer(myParent, options, { hammer: [hammer_1, hammer_2], machinegun: [machinegun_1], stamp: [stamp_1] })
      );
  }, [myParent]);

  useEffect(() => {
    destroyer && destroyer.inject();
  }, [destroyer]);

  return <div className="myParent" ref={(el) => (myParent = el)} />;
};

export default App;
