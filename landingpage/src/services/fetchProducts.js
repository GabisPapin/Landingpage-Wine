export async function fetchProducts(page, limit) {
  const URL = `https://wine-back-test.herokuapp.com/products?page=${page}&limit=${limit}`;
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  try {
    const response = await fetch(URL, requestOptions);

    const data = await response.json();
    return data;
  } catch (err) {
    return Error(err.message);
  }
}

export async function fetchModalities() {
  const URL = 'https://wine-club-proxy.herokuapp.com/modalities';
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  try {
    const response = await fetch(URL, requestOptions);

    const data = await response.json();
    return data;
  } catch (err) {
    return Error(err.message);
  }
}
