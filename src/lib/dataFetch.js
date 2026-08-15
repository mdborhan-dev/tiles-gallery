  const tilesBannerImage = process.env.NEXT_PUBLIC_TILES_BANNER_IMAGES;


export const getTileBannerImages = async ()=>{
    const res = await fetch(tilesBannerImage)
    const data = await res.json()
    return data;
}