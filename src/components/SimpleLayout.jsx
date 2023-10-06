import { Container } from '@/components/Container'

import Image from 'next/image'

export function SimpleLayout({ bgImage, title, intro, children }) {
  return (
    <>
      <div
        className={`relative  left-0 top-0 h-[650px] w-full overflow-hidden  ${
          bgImage && ''
        }`}
      >
        {bgImage && (
          <div className="before:content inset-0 h-full before:absolute before:top-0 before:z-[1] before:h-full before:w-full before:bg-black before:opacity-[0.6] ">
            <Image
              src={bgImage}
              placeholder="blur"
              priority={true}
              alt=""
              fill
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="inset-0 aspect-square h-full w-full animate-pulse bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        )}
        <Container
          className={`mt-16 ${bgImage && 'absolute left-0 top-[23%] w-full'}`}
        >
          <header className="relative z-[2] max-w-2xl">
            <h1
              className={`text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl ${
                bgImage && 'mb-3 !text-white'
              }`}
            >
              {title}
            </h1>
            <p
              className={`"mt-6 text-base text-zinc-600 dark:text-zinc-400 ${
                bgImage && '!text-white'
              }`}
            >
              {intro}
            </p>
          </header>
        </Container>
      </div>
      <Container>
        {children && <div className="mt-16 sm:mt-20">{children}</div>}
      </Container>
    </>
  )
}
