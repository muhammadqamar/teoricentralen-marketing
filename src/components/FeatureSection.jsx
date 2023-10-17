export default function FeatureSection() {
    return (
      <div className="overflow-hidden bg-white py-24 sm:py-16">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div>
            <div className="lg:max-w-lgy">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Vi stöttar din verksamhet</h1>
              <blockquote className="text-lg leading-7 mt-8">
                <p>
                  “Vi utvecklar ditt nya affärssystem för att möta dina framtida utmaningar. Hos oss bedriver du din verksamhet på dina villkor.”
                </p>
              </blockquote>
              <figcaption className="mt-6 flex gap-x-4 text-base leading-6">
                <Image
                  width={64}
                  height={64}
                  src={denny}
                  alt="Denny Soulaka"
                  className="h-12 w-12 flex-none rounded-full"
                />
                <div>
                  <p className="text-gray-900">Denny Soulaka</p>
                  <p className="font-semibold">Teoricentralen Sverige AB </p>
                </div>
              </figcaption>
            </div>
          </div>
          <video
            className='rounded'
            autoPlay
            loop
            src='https://uploads-ssl.webflow.com/63eaaf48b5d45c04b3775fc9/640a4874cdb3d1770f94a5fe_enkel%20view-transcode.mp4'
          />
        </div>
      </div>
    )
  }
  