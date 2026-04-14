import React from 'react';
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { SearchBar } from '@/components/SearchBar'

const replaceMock = vi.fn()

vi.mock('next/navigation', () => ({
  useRouter: () => ({ replace: replaceMock }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}))

describe('SearchBar', () => {
  it('simulates typing and verifies URL updates', async () => {
    // REVIEWER_NOTE: Verifica que el cambio en el input actualice los parámetros de búsqueda en la URL dinámicamente ("filtrado en tiempo real").
    render(<SearchBar />)
    const input = screen.getByPlaceholderText(/Search destinations/i)
    
    await userEvent.type(input, 'Bali')
    
    expect(input).toHaveValue('Bali')
    expect(replaceMock).toHaveBeenCalledWith('/?q=Bali', { scroll: false })
  })
})
