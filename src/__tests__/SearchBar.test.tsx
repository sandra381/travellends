import React from 'react';
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { SearchBar } from '@/components/SearchBar'

describe('SearchBar', () => {
  it('simulates typing and verifies URL updates using prop injection', async () => {
    const replaceMock = vi.fn()
    const mockRouter = { replace: replaceMock } as any
    const mockPathname = '/'
    const mockSearchParams = new URLSearchParams()

    render(
      <SearchBar 
        router={mockRouter} 
        pathname={mockPathname} 
        searchParams={mockSearchParams} 
      />
    )
    
    const input = screen.getByPlaceholderText(/Search destinations/i)
    await userEvent.type(input, 'Bali')
    
    expect(input).toHaveValue('Bali')
    expect(replaceMock).toHaveBeenCalledWith('/?q=Bali', { scroll: false })
  })
})
