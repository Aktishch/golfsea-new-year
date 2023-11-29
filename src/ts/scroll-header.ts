import { scrolledPage } from './functions/scrolled-page'

export default (): void => {
  const header = document.querySelector('*[data-header]') as HTMLElement

  if (!header) return

  const logo = header.querySelector('*[data-header-logo]') as HTMLAnchorElement
  let prevOffsetTop: number = scrolledPage().top

  const scrollHeader = (): void => {
    const headerHeight: number = header.offsetHeight
    const currentOffsetTop: number = scrolledPage().top

    switch (currentOffsetTop > headerHeight) {
    case true: {
      header.classList.remove('md:py-4')
      header.classList.add('bg-black', 'backdrop-blur', 'md:py-2')
      logo.classList.remove('md:w-40')
      logo.classList.add('md:w-28')
      break
    }

    case false: {
      header.classList.remove('bg-black', 'backdrop-blur', 'md:py-2')
      header.classList.add('md:py-4')
      logo.classList.remove('md:w-28')
      logo.classList.add('md:w-40')
      break
    }
    }

    prevOffsetTop > currentOffsetTop
      ? header.classList.remove('-translate-y-full')
      : header.classList.add('-translate-y-full')

    prevOffsetTop = currentOffsetTop
  }

  document.addEventListener('scroll', scrollHeader as EventListener)
}
