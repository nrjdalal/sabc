/* eslint-disable @next/next/no-img-element */
const Header = () => {
  return (
    <nav className="absolute top-0 flex h-16 w-full items-center justify-between bg-gray-800 p-6">
      <img
        src="https://storage.googleapis.com/production-bluehost-v1-0-2/782/1192782/xZ9n2NCd/17c82326a49949968e98b67aa7550260"
        alt=""
        className="h-12"
      />
      <div className="flex items-center space-x-6">
        <ul className="flex space-x-6 text-base">
          <li>Home</li>
          <li>About</li>
          <li>$OSARU</li>
          <li>Zippo</li>
          <li>Stake</li>
          <li>Breed</li>
          <li>Roadmap</li>
        </ul>
        <button className="rounded-sm bg-yellow-300 p-3 py-1.5 text-base text-black">Discord</button>
      </div>
    </nav>
  )
}

export default Header
