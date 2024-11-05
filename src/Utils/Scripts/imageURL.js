
function imageURL(img) {
  return new URL(`../../assets/Images/${img}`, import.meta.url).href
}

export default imageURL
