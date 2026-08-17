const tilesBannerImage = process.env.NEXT_PUBLIC_TILES_BANNER_IMAGES;
const marqueeLink = process.env.NEXT_PUBLIC_TILES_MARQUE_DATA;
const tilesData = process.env.NEXT_PUBLIC_TILES_DATA;

export const getTileBannerImages = async () => {
  const res = await fetch(tilesBannerImage, { next: { revalidate: 3600 } });
  const data = await res.json();
  return data;
};

export const getMarqueeData = async () => {
  const res = await fetch(marqueeLink, { next: { revalidate: 3600 } });
  const data = await res.json();
  return data;
};

export const getTilesData = async () => {
  const res = await fetch(tilesData, { next: { revalidate: 300 } });
  const data = await res.json();
  return data;
};

export const getTilesDataByID = async (id) => {
  const res = await fetch(`${tilesData}/${id}`, { next: { revalidate: 300 } });
  const data = await res.json();
  return data;
};
