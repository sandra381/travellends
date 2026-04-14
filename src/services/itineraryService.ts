import { TravelPlan, Destination } from '@/types/travel'

// Simulates a latency for an AI generation effect
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function generateItinerary(destination: Destination): Promise<TravelPlan> {
  // Simulate AI generation time
  await delay(1500)

  return {
    destinationId: destination.id,
    destinationName: destination.name,
    days: [
      {
        day: 1,
        title: `Arrival and Exploring the Heart of ${destination.name}`,
        description: `Check into your hotel and take a leisurely walk around the city center. Get a feel for the local culture, visit the most iconic landmark, and enjoy a welcome dinner with traditional ${destination.country} cuisine.`,
      },
      {
        day: 2,
        title: 'Deep Dive into History and Culture',
        description: `Start your day early with a guided tour of the main historical sites or museums. In the afternoon, explore a vibrant local neighborhood, visit a market, and maybe try some street food or local delicacies.`,
      },
      {
        day: 3,
        title: 'Nature, Relaxation and Departure',
        description: `Depending on the location, take a half-day trip to a nearby natural attraction (beach, mountain, or park). Return in the afternoon for some last-minute shopping before heading to the airport for your departure.`,
      },
    ],
  }
}
