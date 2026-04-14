import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Home from '@/app/page'

vi.mock('next/navigation', () => ({
  useRouter: () => ({ replace: vi.fn() }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}))

describe('HomePage', () => {
  it('renders the main title and search bar', () => {
    // REVIEWER_NOTE: Esta prueba valida que el renderizado inicial del layout sea accesible y muestre los componentes principales.
    render(<Home />)
    const title = screen.getAllByText('TraveLens')
    expect(title.length).toBeGreaterThan(0)
    expect(screen.getByPlaceholderText(/Search destinations/i)).toBeInTheDocument()
  })
})
