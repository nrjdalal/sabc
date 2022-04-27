/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const Header = () => {
  return (
    <nav className="fixed top-0 z-10 flex h-16 w-full items-center justify-center bg-black p-6">
      {/* <Link href="/">
        <a>
          <img
            src="https://storage.googleapis.com/production-bluehost-v1-0-2/782/1192782/xZ9n2NCd/17c82326a49949968e98b67aa7550260"
            alt=""
            className="h-12"
          />
        </a>
      </Link> */}

      <div className="flex items-center space-x-6">
        <ul className="flex space-x-6 text-base">
          {/* <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li> */}
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/osaru">
              <a>$OSARU</a>
            </Link>
          </li>
          <li>
            <Link href="/zippo">
              <a>Zippo</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/stake">
              <a>Stake</a>
            </Link>
          </li> */}
          <li>
            <Link href="/breed">
              <a>Breed</a>
            </Link>
          </li>
          <li>
            <Link href="/roadmap">
              <a>Roadmap</a>
            </Link>
          </li>
        </ul>
        {/* <button className="rounded-sm bg-yellow-300 p-3 py-1.5 text-base text-black">Discord</button> */}
      </div>
    </nav>
  )
}

export default Header
