import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  beforeEach(()=>{
    render(<Home />)
  })

  it('renders a logo', () => {

    const logo = screen.getByRole('link', {
      name: "logo",
    })

    expect(logo).toBeInTheDocument()
  })

  it('renders the banner', () => {

    const banner = screen.getByRole('banner');

    expect(banner).toBeInTheDocument()
  })

  it('renders a call to adopt', () => {

    const adoptCta = screen.getByRole('link', {
      name: /adopt/i
    })

    expect(adoptCta).toBeInTheDocument();
  })

  it('renders a call to foster', () => {

    const fosterCta = screen.getByRole('link', {
      name: /foster/i
    })

    expect(fosterCta).toBeInTheDocument();
  })

  it('renders a call to adopt', () => {

    const donateCta = screen.getByRole('link', {
      name: /donate/i
    })

    expect(donateCta).toBeInTheDocument();
  })

  it('renders home page copy', () => {

    const pageCopy = screen.getByRole('heading', {
      name: "We help shelter pets find their fur-ever home!"
    })

    expect(pageCopy).toBeInTheDocument();
  })
})