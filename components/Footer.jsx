/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const Footer = () => {
  return (
    <ul className="flex w-full flex-col items-center justify-center space-y-4 bg-gray-900 p-6 text-gray-300 md:flex-row md:space-x-6">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/team">
          <a>Team</a>
        </Link>
      </li>
      <li>
        <Link href="/generals">
          <a>Generals</a>
        </Link>
      </li>
      <li>
        <Link href="/samurais">
          <a>Samurais</a>
        </Link>
      </li>
      <li>
        <Link href="/mint">
          <a>Mint</a>
        </Link>
      </li>
      <li>
        <Link href="/roadmap">
          <a>Roadmap</a>
        </Link>
      </li>
    </ul>
  )
}

export default Footer
