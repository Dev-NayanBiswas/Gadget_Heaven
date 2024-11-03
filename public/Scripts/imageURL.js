
function imageURL(img) {
  return new URL(`../../src/assets/Images/${img}`, import.meta.url).href
}

export default imageURL
