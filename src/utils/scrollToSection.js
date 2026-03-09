/**
 * Scroll suave a una sección considerando el header fijo.
 * @param {string} selector - Selector CSS (ej: '#contact')
 * @param {Object} options - headerHeight, behavior
 */
export const scrollToSection = (selector, options = {}) => {
  const element = document.querySelector(selector)
  if (!element) return
  const headerHeight = options.headerHeight ?? 80
  const behavior = options.behavior ?? 'smooth'
  window.scrollTo({
    top: element.offsetTop - headerHeight,
    behavior,
  })
}
