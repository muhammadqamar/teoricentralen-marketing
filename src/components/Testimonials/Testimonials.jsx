import Review from './Review'

export default function Testimonials({ data }) {

  return (
    <div className="relative pt-24 pb-32 isolate sm:pt-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-semibold leading-8 tracking-tight text-primary">
            {data?.heading}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {data?.subheading}
          </p>
        </div>
        <div className=" relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {data?.content.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className={`flex animate-marquee  flex-col gap-0 space-y-8 ${columnGroupIdx === 0 || columnGroupIdx === 2
                  ? '[animation-duration:25.32s]'
                  : columnGroupIdx === 1 && '[animation-duration:35.8s]'
                }  xl:gap-[32px] xl:space-y-0`}
            >
              {columnGroup.map((testimonial, counter) => (
                <Review
                  key={counter}
                  testimonial={testimonial}
                />
              ))}
            </div>
          ))}
          <div className="absolute inset-x-0 top-0 h-32 pointer-events-none bg-gradient-to-b from-gray-50"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none bg-gradient-to-t from-gray-50"></div>
        </div>
      </div>
    </div>
  )
}
