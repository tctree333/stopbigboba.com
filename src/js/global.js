const debounce = (fn) => {
  let frame
  return (...params) => {
    if (frame) {
      cancelAnimationFrame(frame)
    }
    frame = requestAnimationFrame(() => {
      fn(...params)
    })
  }
}
const storeScroll = () => {
  document.documentElement.dataset.top = window.scrollY <= 12
}
document.addEventListener('scroll', debounce(storeScroll), {
  passive: true
})
storeScroll()
