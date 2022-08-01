import Destroyer from '../src/Destroyer';
import '../src/css/destroyer.min.css';

window.addEventListener('DOMContentLoaded', () => {
  //   console.log({ Destroyer });

  const options = {
    defaultVolume: 0.5,
    particleLimit: 20,
    zIndexStart: 5,
    onDamage: (pageHealth) => console.log(pageHealth),
    pageHealth: 200,
    volumeChangeDelta: 0.5,
  };
  const body = document.querySelector('body');
  if (body instanceof HTMLBodyElement) {
    body.innerHTML = `<div class="myParent"></div>`;
    const destroyer = new Destroyer(body, options);
    destroyer && destroyer.inject();
  }
});
