// retorna un arr donde cada elemento es un objeto con id, titulo y url de imagen
const getGifs = async (cat) => {
  const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ cat }&api_key=HMYKInVIRoLUOJNyTsBpq5CjPOjWYnh2`;
  const resp = await fetch(url);
  const {data} = await resp.json();
  const gifs = data.map(img => (
    {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    })
  );
  console.log(gifs)
  return gifs;
}

export default getGifs;