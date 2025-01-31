import { Container } from '@/components/Container'

import Image from 'next/image'

export function SimpleLayout({ bgImage, title, intro, children }) {
  return (
    <>
      <div
        className={`relative left-0 top-0 h-96 w-full overflow-hidden ${
          bgImage && ''
        }`}
      >
        {bgImage && (
          <div className="before:content inset-0 h-full before:absolute before:top-0 before:z-[1] before:h-full before:w-full before:bg-black before:opacity-[0.6] ">
            <Image
              src={bgImage}
              alt="b"
              fill
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="inset-0 aspect-square h-full w-full animate-pulse bg-zinc-100 object-cover dark:bg-zinc-800"
              placeholder="blur"
              blurDataURL={
                'data:image/jpeg;base64,/9j/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlubwIQ...'
              }
            />
          </div>
        )}
        <Container
          className={`mt-16 ${bgImage && 'absolute left-0 top-[23%] w-full'}`}
        >
          <header className="relative z-[2] max-w-2xl">
            <h1
              className={`text-4xl font-extrabold tracking-tight text-dark sm:text-5xl ${
                bgImage && 'mb-3 text-white'
              }`}
            >
              {title}
            </h1>
            <p
              className={`mt-6 text-base text-gray-600 ${
                bgImage && 'text-white'
              }`}
            >
              {intro}
            </p>
          </header>
        </Container>
      </div>

      <Container>{children}</Container>
    </>
  )
}
