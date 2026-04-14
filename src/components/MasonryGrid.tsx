import React from 'react';
import { Destination } from '@/types/travel'
import { DestinationCard } from './DestinationCard'

interface MasonryGridProps {
  destinations: Destination[]
  onSelectDestination: (dest: Destination) => void
}

export function MasonryGrid({ destinations, onSelectDestination }: MasonryGridProps) {
  if (destinations.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500 dark:text-gray-400">
        No destinations found matching your criteria.
      </div>
    )
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
      {destinations.map((dest) => (
        <div key={dest.id} className="break-inside-avoid">
          <DestinationCard destination={dest} onClick={onSelectDestination} />
        </div>
      ))}
    </div>
  )
}
