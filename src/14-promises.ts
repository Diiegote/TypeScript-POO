import axios from 'axios';

(async () => {


  function delay(time: number) {
    const promise = new Promise<string>(resolve => {
      setTimeout(() => {
        resolve('string');
      }, time);
    });
    return promise;
  };

  async function getProducts() {
    const promise = await axios('https://api.escuelajs.co/api/v1/products');
    return promise.data;
  }


  console.log('------'.repeat(10));
  const rta = await delay(3000);
  console.log(rta);
  console.log('------'.repeat(10));
  const rta1 = await getProducts();
  console.log(rta1);

})();