/* eslint-disable @next/next/no-img-element */

const zippo = () => {
  const Cards = ({ children, src, title, tokens }) => {
    return (
      <div className="mt-12 flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0 xl:items-center">
        <img src={src} alt="" className="aspect-square md:h-48 md:w-48 xl:h-64 xl:w-64" />
        <div>
          <h2 className="mt-4 font-anton text-3xl tracking-wider text-yellow-400">{title}</h2>
          <h3 className="mt-4 font-anton text-xl tracking-wider">{tokens}</h3>
          <p className="mt-6 text-gray-100">{children}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto p-6 md:p-16 xl:container">
      <div className="pt-24 pb-8">
        <h1 className="font-anton text-4xl tracking-wider text-yellow-300">What is Zippo?</h1>
        <p className="mt-8 text-white">
          Zippo is an NFT collection published as a benefit of Gen1 Apes holders with a total supply of 3,334, with
          three different categories(Diamond, Gold, Silver).
          <br />
          Zippos will be distributed to the person who is the Gen1 holder when the team took the snapshot. Snapshot
          timing will be in March – April, it will be announced on our discord server.
        </p>

        <div className="mt-4 flex flex-wrap">
          <div className="mt-8 w-1/2 border-l-2 p-4">
            <h2 className="font-anton text-2xl tracking-wider">Airdropped</h2>
            <p className="mt-4 text-gray-100">Zippos will be distributed to the person who is the Gen1 holder.</p>
          </div>

          <div className="mt-8 w-1/2 border-l-2 p-4">
            <h2 className="font-anton text-2xl tracking-wider">Breeding</h2>
            <p className="mt-4 text-gray-100">Zippo is used for breeding to generate Gen2 apes.</p>
          </div>

          <div className="mt-8 w-1/2 border-l-2 p-4">
            <h2 className="font-anton text-2xl tracking-wider">Trading</h2>
            <p className="mt-4 text-gray-100">Zippo can be traded on the market after being airdropped.</p>
          </div>
        </div>
      </div>

      <div className="pb-8">
        <Cards
          src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-bluehost-v1-0-2%2F782%2F1192782%2FxZ9n2NCd%2F7bead90c1a15419b97182b19519f9745&methods=resize%2C600%2C5000"
          title="Diamond Zippo"
          tokens="Total 200"
        >
          The Highest ranked Zippo. Distributed to active members who are NFT holders that have never listed their Apes
          in secondary markets and that remain involved in the community discord, Twitter, etc.
          <br />
          Diamond Zippo is used to generate high-ranked Gen2 apes by breeding.
        </Cards>

        <Cards
          src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-bluehost-v1-0-2%2F782%2F1192782%2FxZ9n2NCd%2F5f74201df769448eb30d0732b8671d12&methods=resize%2C600%2C5000"
          title="Gold Zippo"
          tokens="Total 1,600"
        >
          The Highest ranked Zippo. Distributed to active members who are NFT holders that have never listed their Apes
          in secondary markets and that remain involved in the community discord, Twitter, etc. Diamond Zippo is used to
          generate high-ranked Gen2 apes by breeding.
        </Cards>

        <Cards
          src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-bluehost-v1-0-2%2F782%2F1192782%2FxZ9n2NCd%2F6e7e1fa7ca3f49e4a9a9b136389e5f93&methods=resize%2C600%2C5000"
          title="Silver Zippo"
          tokens="Total 1,200"
        >
          Distributed to holders of Ape purchased from the secondary market.
          <br />
          Silver Zippo is used to generate normal to middle-ranked Gen2 apes by breeding.
        </Cards>
      </div>
    </div>
  )
}

export default zippo
