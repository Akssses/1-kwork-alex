import { Inter } from '@next/font/google'
import GamesList from '../components/shared/Games/GamesList'
import CasinoList from '../components/shared/Casino/CasinoList'
import Sidebar from '@/components/partials/Sidebar'
import { SetStateAction, useState } from 'react'
import BannerSlide from '../components/partials/BannerSlide'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleGameSelect = (game) => {
    setSelectedGame(game);
  };


  return (
    <div className="flex bg-dark overflow-hidden app-container gradient">

      {/* Sidebar */}
      <Sidebar />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden" >

        <main className='p-[30px] text-white'>
          <h1 className='font-semibold text-3xl zindex'>Casino.band</h1>

          <div className='flex justify-between gap-10 mt-5'>
            {/* Product section */}
            <section className='w-[60vw]'>
              <BannerSlide/>
              {/* Most popularity slots */}
              <div>
                {selectedGame && (
                  <div 
                  className='blur-sm h-[110vh]'
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `url(${selectedGame.coverImage.url}) no-repeat center center fixed`,
                      backgroundSize: "cover",
                      opacity: 0.5,
                      zIndex: 0,
                      
                    }}
                    onClick={() => setSelectedGame(null)}
                  />
                )}
                <GamesList onGameSelect={handleGameSelect} />
              </div>
              {/* Most popularity casino */}
              <div className='mt-5'>
                <h1 className='text-3xl font-semibold zindex'>Most popularity casino</h1>
                <CasinoList/>
              </div>
            </section>
            {/* About section */}
            <section className='w-[350px] p-5 bg-elem rounded-2xl zindex'>
              <h1 className='text-2xl font-bold mb-10'>About</h1>
              <p>Our primary goal is to provide accurate and relevant information so that casino fans can easily navigate the enormous selection of the gambling operators. They all fight for player attention, but do not equally deserve it.
                There are key elements that are considered and discussed, and apart from providing general characteristics such as license, games and banking methods, we dig deep into terms and conditions and reveal bits of information that can make or break your choice.
              </p>
              <div className='mt-10'>
                <div className='mb-5'>
                  <h3>Total spins</h3>
                  <h1 className='text-3xl font-bold'>21.000.000</h1>
                  <div className="lg:w-[270px] bg-[#1E1828] rounded-full">
                        <div className="line-progress p-0.5 leading-none rounded-full h-[10px] w-[75%]" ></div>
                  </div>
                </div>
                <div className='mb-5'>
                  <h3>Total win</h3>
                  <h1 className='text-3xl font-bold'>7k</h1>
                  <div className="lg:w-[270px] bg-[#1E1828] rounded-full">
                        <div className="line-progress p-0.5 leading-none rounded-full h-[10px] w-[75%]" ></div>
                  </div>
                </div>
              </div>
            </section>
          </div>

        </main>

      </div>
    </div>
  )
}
