const get = async(url) => {
  const response = await fetch(url);
  const data = response.json();
  return data;
}

export default get