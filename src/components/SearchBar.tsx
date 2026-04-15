'use client'
import React, { useState } from 'react';
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export interface SearchBarProps {
  onSearch: (term: string) => void;
  defaultValue?: string;
}

export function SearchBar({ onSearch, defaultValue = '' }: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setQuery(term)
    onSearch(term)
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
      <Input
        title="Search Destinations"
        className="pl-12 h-14 text-lg rounded-full border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg focus-visible:ring-primary transition-all duration-300 hover:shadow-xl"
        placeholder="Search destinations by name or tag (e.g., Paris, beach)..."
        value={query}
        onChange={handleChange}
      />
    </div>
  )
}
