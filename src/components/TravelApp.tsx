'use client'
import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { SearchBar } from './SearchBar'
import { MasonryGrid } from './MasonryGrid'
import { AiTravelSidebar } from './AiTravelSidebar'
import { destinations } from '@/lib/destinations'
import { Destination } from '@/types/travel'

export function TravelApp() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')?.toLowerCase() || ''
  
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null)

  const filteredDestinations = useMemo(() => {
    if (!query) return destinations
    return destinations.filter((dest) => 
      dest.name.toLowerCase().includes(query) ||
      dest.country.toLowerCase().includes(query) ||
      dest.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }, [query])

  return (
    <div className="space-y-12">
      <SearchBar />
      <MasonryGrid 
        destinations={filteredDestinations} 
        onSelectDestination={setSelectedDest} 
      />
      <AiTravelSidebar 
        destination={selectedDest} 
        isOpen={!!selectedDest} 
        onClose={() => setSelectedDest(null)} 
      />
    </div>
  )
}
