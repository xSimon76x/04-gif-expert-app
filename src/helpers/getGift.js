export const getGift = async (inputValue) => {
    const url =  `https://api.giphy.com/v1/gifs/search?api_key=1bH2tRvNhg8mEApTCFrAiQLDQHq1zxLk&q=${inputValue}&limit=10`;

    const resp = await fetch(url);

    const { data } = await resp.json();
    
    const gift = data.map(images => ({
      id: images.id,
      title: images.title,
      url: images.images.downsized.url
    }));

    // console.log(gift)
    return gift;
  }