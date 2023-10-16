'use client'

import { Disclosure } from '@headlessui/react'
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
    <div className="max-w-4xl mx-auto divide-y divide-gray-900/10">
      <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
        Vanliga frågor och svar
      </h2>
      <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
        {faqs.map((faq) => (
          <Disclosure as="div" key={faq.question} className="pt-6">
            {({ open }) => (
              <>
                <dt>
                  <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                    <span className="text-base font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="flex items-center ml-6 h-7">
                      {open ? (
                        <MinusSmallIcon
                          className="w-6 h-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusSmallIcon className="w-6 h-6" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </dt>
                <div className="pr-12 mt-2 overflow-hidden" style={{ height: open ? 'auto' : '0' }}>
                  <p className="text-base leading-7 text-gray-600" >
                    {faq.answer}
                  </p>
                </div>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </div>
  )
}
