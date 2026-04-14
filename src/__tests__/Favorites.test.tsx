import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import { vi, describe, it, expect, beforeEach } from 'vitest'
import { TravelApp } from '../components/TravelApp'
import { destinations } from '../lib/destinations'

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useSearchParams: () => ({
    get: vi.fn().mockReturnValue(null),
  }),
  useRouter: () => ({
    push: vi.fn(),
  }),
  usePathname: () => '/',
}))

describe('Favorites Functionality', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('allows adding and viewing favorites', async () => {
    render(<TravelApp />)

    // Initially on Discover tab
    const firstDest = destinations[0]
    const favoriteButtons = screen.getAllByLabelText(/Add to favorites/i)
    
    // Click favorite on the first destination
    fireEvent.click(favoriteButtons[0])

    // Switch to Favorites tab
    const favoritesTab = screen.getByRole('tab', { name: /Favorites/i })
    fireEvent.click(favoritesTab)

    // Check if the destination appears in Favorites tab
    expect(screen.getByText(firstDest.name)).toBeDefined()
  })
})
