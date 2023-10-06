// import { SimpleLayout } from '@/components/SimpleLayout'
// import { getAllWords } from '@/lib/words'

// export async function generateStaticParams() {
//   const allWords = await getAllWords(false)

//   console.log(allWords)

//   return allWords.map((word) => ({
//     slug: word.slug,
//   }))
// }

// export default function Page({ params }) {
//   const { slug } = params

//   return (
//     <SimpleLayout
//       title="Ordlista. Massa trafikrelaterade ord."
//       intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
//     >
//       <div className="md:border-l md:border-zinc-100 md:pl-6">
//         <div className="flex flex-col max-w-3xl space-y-16">
//           <div>Ord: {params.slug}</div>
//         </div>
//       </div>
//     </SimpleLayout>
//   )
// }
