import { media } from './functions/media'
import { scrolledPage } from './functions/scrolled-page'

const scrollTo = (event: Event): void => {
  event.preventDefault()

  const link = event.target as HTMLAnchorElement
  const id = String(link.getAttribute('href'))
  const block = document.querySelector(id) as HTMLElement
  const header = document.querySelector('*[data-header]') as HTMLElement
  const offsetTop: number =
    (document.documentElement as HTMLElement).clientWidth > media.md
      ? block.getBoundingClientRect().top + scrolledPage().top
      : block.getBoundingClientRect().top + scrolledPage().top - header.offsetHeight

  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth',
  })
}

export default (): void => {
  document.addEventListener('click', ((event: Event): void => {
    if ((event.target as HTMLElement).hasAttribute('data-scroll')) scrollTo(event)
  }) as EventListener)
}
