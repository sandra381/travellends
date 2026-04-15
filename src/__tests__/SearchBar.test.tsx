import React from 'react';
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { SearchBar } from '@/components/SearchBar'

describe('SearchBar', () => {
  it('calls onSearch when the user types', async () => {
    const onSearchMock = vi.fn()
    render(<SearchBar onSearch={onSearchMock} />)
    
    const input = screen.getByPlaceholderText(/Search destinations/i)
    await userEvent.type(input, 'Bali')
    
    expect(input).toHaveValue('Bali')
    // Called for each character: B, a, l, i
    expect(onSearchMock).toHaveBeenCalledWith('Bali')
  })
})
