'use client';
import React from 'react';
import { useFavoritesStore } from '@/lib/favorites'
import { DestinationCard } from './DestinationCard'
import { Destination } from '@/types/travel'

interface FavoritesViewProps {
  onSelectDestination: (dest: Destination) => void
}

export function FavoritesView({ onSelectDestination }: FavoritesViewProps) {
  const { favorites } = useFavoritesStore()

  if (favorites.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500 dark:text-gray-400">
        You haven't added any destinations to your favorites yet.
      </div>
    )
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
      {favorites.map((dest) => (
        <div key={dest.id} className="break-inside-avoid">
          <DestinationCard destination={dest} onClick={onSelectDestination} />
        </div>
      ))}
    </div>
  )
}
