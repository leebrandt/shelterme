import '@testing-library/jest-dom'
import { render, screen, waitFor } from "@testing-library/react"
import Home from '../pages/index'
import { SWRConfig } from 'swr'

import { rest } from 'msw'
import { setupServer } from 'msw/node'

const handlers = [
  rest.get('/api/pets', (res, req, ctx) => {
    return res(cts.json(
      [{
        id:1,
        name: 'Chloe'
      },{
        id:2,
        name: 'Bruce'
      }]
    ))
  })
]
const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Home', () => {
  beforeEach(() => {
    render(
      <SWRConfig value={{ provider: () => new Map() }}>
        <Home />
      </SWRConfig>
    )
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

    expect(adoptCta).toBeInTheDocument()
  })

  it('renders a call to foster', () => {

    const fosterCta = screen.getByRole('link', {
      name: /foster/i
    })

    expect(fosterCta).toBeInTheDocument()
  })

  it('renders a call to adopt', () => {

    const donateCta = screen.getByRole('link', {
      name: /donate/i
    })

    expect(donateCta).toBeInTheDocument()
  })

  it('renders home page copy', () => {

    const pageCopy = screen.getByRole('heading', {
      name: "We help shelter pets find their fur-ever home!"
    })

    expect(pageCopy).toBeInTheDocument()
  })
})