'use client'
import React, { useState, useMemo } from 'react';
import { SearchBar } from './SearchBar'
import { MasonryGrid } from './MasonryGrid'
import { AiTravelSidebar } from './AiTravelSidebar'
import { FavoritesView } from './FavoritesView'
import { destinations } from '@/lib/destinations'
import { Destination } from '@/types/travel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Map, Heart, Star, Trophy, Zap } from 'lucide-react'

export function TravelApp() {
  const [query, setQuery] = useState('')
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null)
  const [xp, setXp] = useState(750)
  const [level, setLevel] = useState(12)

  const handleSearch = (term: string) => {
    setQuery(term)
  }

  const filteredDestinations = useMemo(() => {
    const searchTerm = query.toLowerCase()
    if (!searchTerm) return destinations
    return destinations.filter((dest) => 
      dest.name.toLowerCase().includes(searchTerm) ||
      dest.country.toLowerCase().includes(searchTerm) ||
      dest.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    )
  }, [query])

  const nextLevelXp = 1000
  const progress = (xp / nextLevelXp) * 100

  return (
    <div className="space-y-8">
      {/* Gamification Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-[2rem] bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/20 shadow-xl overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="flex items-center gap-4 relative z-10">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg shadow-orange-500/20">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-gray-800 dark:text-white">Level {level}</span>
              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Explorer</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 font-medium">Top 5% of global travelers</p>
          </div>
        </div>

        <div className="w-full sm:max-w-xs space-y-2 relative z-10">
          <div className="flex justify-between text-sm font-bold">
            <div className="flex items-center gap-1.5 text-orange-500">
              <Zap className="w-4 h-4 fill-current" />
              <span>{xp} XP</span>
            </div>
            <span className="text-gray-400">{nextLevelXp} XP to Level {level + 1}</span>
          </div>
          <div className="h-3 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden border border-white/10 shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-primary via-cyan-400 to-blue-500 transition-all duration-1000 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:24px_24px] animate-[shimmer_2s_linear_infinite]" />
            </div>
          </div>
        </div>

        <div className="flex gap-3 relative z-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:scale-110 transition-transform cursor-help border border-transparent hover:border-primary/20" title="Achievement Earned!">
              <Star className={`w-5 h-5 ${i === 3 ? 'text-gray-300' : 'text-yellow-500 fill-current'}`} />
            </div>
          ))}
        </div>
      </div>

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
          <SearchBar onSearch={handleSearch} defaultValue={query} />
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
