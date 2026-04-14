import React from 'react';
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Destination } from '@/types/travel'
import { MapPin } from 'lucide-react'

interface DestinationCardProps {
  destination: Destination
  onClick: (destination: Destination) => void
}

export function DestinationCard({ destination, onClick }: DestinationCardProps) {
  return (
    <Card 
      onClick={() => onClick(destination)}
      className="group relative overflow-hidden rounded-3xl cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/10 backdrop-blur-lg"
    >
      <div className="relative w-full h-[300px] sm:h-[250px] md:h-[350px]">
        <Image
          src={destination.imageUrl}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80" />
      </div>
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <h3 className="text-3xl font-extrabold text-white mb-2 drop-shadow-md">{destination.name}</h3>
        <p className="text-gray-200 text-base font-medium flex items-center gap-1 mb-4 drop-shadow">
          <MapPin className="h-4 w-4" /> {destination.country}
        </p>
        <div className="flex flex-wrap gap-2">
          {destination.tags.map(tag => (
            <span key={tag} className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold text-white uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  )
}
