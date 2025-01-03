import React from 'react';
import { Trophy, BarChart2, Clock } from 'lucide-react';

const CoffeeGolfPage = () => {
  return (
    <div className="min-h-screen font-['Inter',sans-serif] text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 to-orange-600 text-white min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Coffee Golf achieved seamless iOS user acquisition with mobile web technology
              </h1>
              <p className="text-xl mb-8">
                Shallot Games leveraged Dotplay's mobile web platform to transform their user acquisition strategy — and quickly exceeded their ROAS targets as a result.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-48">
                <img src="/api/placeholder/200/400" alt="Coffee Golf Mobile Web Screenshot" className="rounded-3xl shadow-2xl" />
                <div className="absolute -bottom-4 -right-4 w-12 h-12">
                  <img src="/api/placeholder/48/48" alt="Coffee Golf App Icon" className="rounded-xl shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="md:w-1/2">
              <img src="/api/placeholder/150/50" alt="Shallot Games Logo" className="mb-8" />
              
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">BACKGROUND</h2>
                <p className="text-lg text-gray-800">Shallot Games, creators of Coffee Golf, is a mobile gaming studio focused on creating engaging casual games. Their titles have achieved significant success on the App Store, with Coffee Golf becoming a standout hit in their portfolio.</p>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center items-center">
              <div className="relative">
                <img src="/api/placeholder/400/800" alt="Coffee Golf Mobile Web Screenshot" className="rounded-3xl shadow-lg" />
                <div className="absolute -bottom-4 -right-4 w-16 h-16">
                  <img src="/api/placeholder/64/64" alt="Coffee Golf App Icon" className="rounded-xl shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-4">THE CHALLENGE</h2>
          <h3 className="text-4xl font-bold mb-12">Scaling iOS user acquisition in a post-SKAN world</h3>
          
          <div className="space-y-8 text-lg text-gray-800">
            <p>
              Coffee Golf's success on the App Store created a strong foundation, but Shallot Games faced significant challenges in scaling their iOS user acquisition campaigns. The implementation of Apple's SKAN framework introduced complexities in tracking and optimization that made it difficult to achieve their growth targets.
            </p>

            <p>
              With delayed postbacks and limited real-time data visibility, the team struggled to optimize their campaigns effectively. The complex setup requirements for SKAN tracking also slowed down their ability to test and iterate quickly on different user acquisition strategies.
            </p>

            <p>
              Shallot Games needed a solution that would allow them to bypass these iOS user acquisition hurdles while maintaining the ability to accurately measure and optimize their marketing spend. They wanted to find a way to reach iOS users more efficiently while getting immediate feedback on campaign performance.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-green-50 py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-green-600 mb-4">THE SOLUTION</h2>
            <h3 className="text-4xl font-bold mb-12">
              Dotplay transformed Coffee Golf's iOS UA with instant mobile web gameplay
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-lg text-gray-800">
              <p>
                Dotplay's solution centered on creating a mobile web version of Coffee Golf that players could instantly access from ads. This approach eliminated the need for complex SKAN tracking and provided immediate campaign performance data.
              </p>

              <p>
                They implemented a seamless single-click experience where users could start playing immediately from the ad, without needing to download the app. The mobile web version maintained the core gameplay experience while offering a frictionless path to try the game.
              </p>

              <p>
                Progress synchronization between the web version and iOS app was implemented, ensuring users who enjoyed the game could continue their progress after downloading. This created a natural conversion path while gathering real-time engagement data.
              </p>
            </div>

            <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center">
              <p className="text-gray-600">Video Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold">The Results</h2>
          <h3 className="text-2xl font-bold mt-4 mb-16">
            Coffee Golf rocketed up the charts while improving UA performance
          </h3>

          <div className="flex justify-center mb-16">
            <div className="bg-green-50 rounded-full w-64 h-64 flex flex-col items-center justify-center p-8">
              <BarChart2 className="w-12 h-12 text-green-600 mb-4" />
              <div className="text-4xl font-bold text-green-700">+20%</div>
              <div className="text-sm text-green-600 mt-2">
                ROAS goals surpassed
              </div>
            </div>
          </div>

          <div className="space-y-6 text-lg text-gray-800 max-w-3xl mx-auto">
            <p>
              Dotplay's mobile web solution delivered exceptional results for Shallot Games, exceeding their ROAS targets by 20% while eliminating SKAN complexity.
            </p>
            <p>
              The instant gameplay approach led to significantly higher user engagement and more efficient UA spending, creating a sustainable growth model for continued success.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col items-center">
            <img 
              src="/api/placeholder/80/80" 
              alt="Brad Scarboro" 
              className="rounded-full mb-8 shadow-lg"
            />
            <blockquote className="text-2xl text-center italic text-gray-800 mb-6">
              "Dotplay's ad solution has exceeded iOS ROAS goals and unlocked the ability for us to scale further. We look forward to expanding our partnership and achieving profitable growth."
            </blockquote>
            <p className="text-center text-gray-600 font-medium">
              Brad Scarboro, Co-Founder of Shallot Games
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-12">Next Steps</h2>
          
          <div className="space-y-8 text-lg text-gray-800">
            <p>
              Building on this success, Dotplay and Shallot Games are expanding their partnership with several key initiatives:
            </p>

            <div className="grid md:grid-cols-3 gap-8 my-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Clock className="w-8 h-8 text-blue-600 mb-4 mx-auto" />
                <h3 className="font-bold mb-2">UA Expansion</h3>
                <p className="text-gray-600">Scaling successful campaigns to new channels and markets</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Clock className="w-8 h-8 text-blue-600 mb-4 mx-auto" />
                <h3 className="font-bold mb-2">Targeting Differentiation</h3>
                <p className="text-gray-600">Refining audience targeting for optimal performance</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Clock className="w-8 h-8 text-blue-600 mb-4 mx-auto" />
                <h3 className="font-bold mb-2">Web iAPs</h3>
                <p className="text-gray-600">Implementing in-app purchases for the web version</p>
              </div>
            </div>

            <p>
              Dotplay and Shallot Games continue to innovate in mobile web gaming and user acquisition.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoffeeGolfPage;