import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Destination } from '@/types/travel'

interface FavoritesStore {
  favorites: Destination[]
  addFavorite: (dest: Destination) => void
  removeFavorite: (id: string) => void
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set) => ({
      favorites: [],
      addFavorite: (dest) =>
        set((state) => ({ favorites: [...state.favorites, dest] })),
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((d) => d.id !== id),
        })),
    }),
    { name: 'travelens-favorites' }
  )
)
