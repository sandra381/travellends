export interface Destination {
  id: string
  name: string
  country: string
  imageUrl: string
  tags: string[]
}

export interface ItineraryItem {
  day: number
  title: string
  description: string
}

export interface TravelPlan {
  destinationId: string
  destinationName: string
  days: ItineraryItem[]
}
