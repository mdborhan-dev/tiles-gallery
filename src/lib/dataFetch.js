const tilesBannerImage = process.env.NEXT_PUBLIC_TILES_BANNER_IMAGES;
const marqueeLink = process.env.NEXT_PUBLIC_TILES_MARQUE_DATA;

export const getTileBannerImages = async () => {
  const res = await fetch(tilesBannerImage);
  const data = await res.json();
  return data;
};

export const getMarqueeData = async () => {
  const res = await fetch(marqueeLink);
  const data = await res.json();
  return data;
};
