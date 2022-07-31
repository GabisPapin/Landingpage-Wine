export default async function getProducts(page, limit) {
  const URL = `https://wine-back-test.herokuapp.com/products?page=${page}&limit=${limit}`
  const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

  try {
      const response = await fetch(URL, requestOptions);

      const data = await response.json()
      console.log(data)
      return data;
  } catch (err) {
      return Error(err.message)
  }
}