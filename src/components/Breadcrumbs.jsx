import { HomeIcon } from '@heroicons/react/20/solid'
import { Link } from '@/navigation'

export default function Breadcrumbs({ pages }) {

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="flex-shrink-0 w-5 h-5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {pages?.map((page, counter) => (
          <li key={page.name}>
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <Link
                href={page.href}
                className={`${counter===pages.length-1 ? "text-gray-700" : ""} ml-4 text-sm font-medium text-gray-500 hover:text-gray-700`}
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
