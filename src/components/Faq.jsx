'use client'

import { Disclosure } from '@headlessui/react'
import { motion } from 'framer-motion'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]

export function Faq() {
  return (
    <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
      <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
        Vanliga frågor och svar
      </h2>
      <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
        {faqs.map((faq) => (
          <Disclosure as="div" key={faq.question} className="pt-6">
            {({ open }) => (
              <>
                <dt>
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      {open ? (
                        <MinusSmallIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </dt>
                <motion.div
                  initial={open ? 'open' : 'closed'}
                  animate={open ? 'open' : 'closed'}
                  variants={{
                    open: {
                      height: 'auto',
                      overflow: 'visible',
                    },
                    closed: {
                      height: '0',
                      overflow: 'hidden',
                    },
                  }}
                >
                  <Disclosure.Panel
                    static
                    className="mt-2 overflow-hidden pr-12"
                  >
                    <p className="text-base leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </motion.div>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </div>
  )
}
