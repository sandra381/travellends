import { Suspense } from 'react'
import { TravelApp } from '@/components/TravelApp'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-slate-950 dark:via-gray-950 dark:to-slate-900 selection:bg-primary/30">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-7xl">
        <header className="text-center mb-16 space-y-6">
          <div className="inline-block animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-500 to-blue-600 drop-shadow-sm pb-2">
              TraveLens
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-150 fill-mode-both">
            Discover the world through AI-powered experiences. Find your next destination and let us craft your perfect itinerary.
          </p>
        </header>

        <section className="animate-in fade-in duration-1000 delay-300 fill-mode-both">
          <Suspense fallback={
            <div className="flex justify-center py-20 text-primary">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          }>
            <TravelApp />
          </Suspense>
        </section>
      </div>
    </main>
  )
}
