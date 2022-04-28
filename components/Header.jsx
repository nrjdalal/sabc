/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  const closeMenu = () => {
    setMenu(false)
  }

  return (
    <>
      <div className="fixed flex h-16 w-full items-center justify-between bg-black">
        <Link href="/">
          <a>
            <img
              src="https://storage.googleapis.com/production-bluehost-v1-0-2/782/1192782/xZ9n2NCd/17c82326a49949968e98b67aa7550260"
              alt=""
              className="h-12"
            />
          </a>
        </Link>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-8 h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={toggleMenu}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>

      <nav
        className={`${
          menu ? 'flex' : 'hidden'
        } fixed top-0 z-10 h-full w-full flex-col items-center justify-between bg-black p-6 lg:flex lg:h-16 lg:flex-row`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-4 right-4 h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={toggleMenu}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>

        <Link href="/">
          <a>
            <img
              src="https://storage.googleapis.com/production-bluehost-v1-0-2/782/1192782/xZ9n2NCd/17c82326a49949968e98b67aa7550260"
              alt=""
              className="h-12"
              onClick={closeMenu}
            />
          </a>
        </Link>

        <div className="mb-24 flex flex-col items-center space-y-8 lg:mb-0 lg:flex-row lg:space-x-6 lg:space-y-0">
          <ul className="flex flex-col space-x-0 space-y-6 text-center text-base lg:flex-row lg:space-x-6 lg:space-y-0">
            <li>
              <Link href="/">
                <a onClick={closeMenu}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/team">
                <a onClick={closeMenu}>Team</a>
              </Link>
            </li>
            <li>
              <Link href="/generals">
                <a onClick={closeMenu}>Generals</a>
              </Link>
            </li>
            <li>
              <Link href="/samurais">
                <a onClick={closeMenu}>Samurais</a>
              </Link>
            </li>
            <li>
              <Link href="/mint">
                <a onClick={closeMenu}>Mint</a>
              </Link>
            </li>
            <li>
              <Link href="/roadmap">
                <a onClick={closeMenu}>Roadmap</a>
              </Link>
            </li>
          </ul>
          <button className="rounded-sm bg-yellow-300 p-4 py-2 text-base text-black" onClick={closeMenu}>
            Connect Wallet
          </button>
        </div>
      </nav>
    </>
  )
}

export default Header
