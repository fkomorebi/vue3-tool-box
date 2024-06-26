/**
 * 列表元素滑入动画
 * @param {number}} [distance=100] 滑入距离
 * @param {number}} [duration=500] 滑入持续时间
 */
const DISTANCE_DEFAULT = 100
const DURATION_DEFAULT = 500
const map = new WeakMap()
const ob = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      map.get(entry.target)?.play()
      ob.unobserve(entry.target)
    }
  }
})

const isBelowViewport = (element) => {
  const rect = element.getBoundingClientRect()
  return rect.top - window.innerHeight >= 0
}
export default {
  mounted(el, bindings) {
    if (!isBelowViewport(el)) {
      return
    }
    const animation = el.animate([{
      transform: `translateY(${ !isNaN(bindings.value.distance) ? bindings.value.distance : DISTANCE_DEFAULT }px)`,
      opacity: 0.5,
    }, {
      transform: 'translateY(0)',
      opacity: 1,
    }], {
      duration: !isNaN(bindings.value.duration) ? bindings.value.duration : DURATION_DEFAULT,
      easing: 'ease-in-out',
      fill: 'forwards',
    })
    animation.pause()
    ob.observe(el)
    map.set(el, animation)
  },
  unmounted(el) {
    ob.unobserve(el)
  },
}
