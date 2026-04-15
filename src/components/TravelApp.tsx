'use client'
import React, { useState, useMemo } from 'react';
import { SearchBar } from './SearchBar'
import { MasonryGrid } from './MasonryGrid'
import { AiTravelSidebar } from './AiTravelSidebar'
import { FavoritesView } from './FavoritesView'
import { destinations } from '@/lib/destinations'
import { Destination } from '@/types/travel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Map, Heart } from 'lucide-react'

export interface TravelAppProps {
  onSearch: (term: string) => void;
  query: string;
}

export function TravelApp({ 
  onSearch = () => {}, 
  query = '' 
}: TravelAppProps) {
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null)

  const filteredDestinations = useMemo(() => {
    const searchTerm = query.toLowerCase()
    if (!searchTerm) return destinations
    return destinations.filter((dest) => 
      dest.name.toLowerCase().includes(searchTerm) ||
      dest.country.toLowerCase().includes(searchTerm) ||
      dest.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    )
  }, [query])

  return (
    <div className="space-y-8">
      <Tabs defaultValue="discover" className="w-full">
        <div className="flex justify-center mb-10">
          <TabsList className="grid w-full max-w-md grid-cols-2 rounded-full p-1 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-sm border border-gray-100 dark:border-gray-800">
            <TabsTrigger value="discover" className="flex items-center gap-2 rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-sm">
              <Map className="w-4 h-4" /> Discover
            </TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2 rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-sm">
              <Heart className="w-4 h-4" /> Favorites
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="discover" className="space-y-8 animate-in fade-in duration-500">
          <SearchBar onSearch={onSearch} defaultValue={query} />
          <MasonryGrid 
            destinations={filteredDestinations} 
            onSelectDestination={setSelectedDest} 
          />
        </TabsContent>

        <TabsContent value="favorites" className="animate-in fade-in duration-500">
          <FavoritesView onSelectDestination={setSelectedDest} />
        </TabsContent>
      </Tabs>

      <AiTravelSidebar 
        destination={selectedDest} 
        isOpen={!!selectedDest} 
        onClose={() => setSelectedDest(null)} 
      />
    </div>
  )
}
