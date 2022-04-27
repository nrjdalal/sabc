/* eslint-disable @next/next/no-img-element */

const index = () => {
  return (
    <div className="mx-auto p-6 md:p-16 xl:container">
      <div className="pt-24">
        <div className="flex flex-col items-center text-center">
          <img src="/Logo.png" alt="" className="md:w-1/3" />

          <p className="mt-8 text-gray-100">
            Our Future Direction strives to adopt only what is feasible.
            <br />
            There are no unrealistic goals out there so you can rest assured that you can move forward with us.
          </p>

          <button className="mt-8 rounded-lg bg-yellow-300 p-10 py-4 text-base text-black">Connect Wallet</button>
        </div>
      </div>

      <div className="flex flex-wrap justify-between space-y-6 pt-24 md:space-y-0">
        <div className="w-full bg-violet-900 md:w-[30%]">
          <img
            src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-bluehost-v1-0-2%2F782%2F1192782%2FxZ9n2NCd%2Fcf5a7e45c5aa48c29f598413d2254ec2&methods=resize%2C900%2C5000"
            alt=""
          />

          <div className="p-4">
            <h2 className="mt-8 font-anton text-3xl tracking-wider text-yellow-400">Gen1 Ape</h2>
            <h3 className="mt-4 font-anton text-xl tracking-wider">Total Supply 3,333</h3>
            <p className="mt-6 text-gray-100">
              Zippos are used to breed Gen2 Apes. Each SABC NFT Holder Will be Airdropped ZIPPOs, of three different
              categories (Diamond, Gold, Silver).
              <br />
              The rarity of the Gen2 changes depending on the type of Zippo used for breeding.
            </p>
          </div>
        </div>

        <div className="w-full bg-violet-900 md:w-[30%]">
          <img
            src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-bluehost-v1-0-2%2F782%2F1192782%2FxZ9n2NCd%2F3edec50ab84443faa5c3a3ff66643bba&methods=resize%2C900%2C5000"
            alt=""
          />

          <div className="p-4">
            <h2 className="mt-8 font-anton text-3xl tracking-wider text-yellow-400">Gen1 Ape</h2>
            <h3 className="mt-4 font-anton text-xl tracking-wider">Total Supply 3,333</h3>
            <p className="mt-6 text-gray-100">
              Smoky Ape Basement Club Gen1 collection is the first collection of this project.
              <br />
              They can be used for breeding to get Gen2. It is also the only collection available for staking.
              <br />
              The minimum number of these collections will be 1666 when the breeding phase starts.
            </p>
          </div>
        </div>

        <div className="w-full bg-violet-900 md:w-[30%]">
          <img
            src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-bluehost-v1-0-2%2F782%2F1192782%2FxZ9n2NCd%2F07ef06a54baf40caae961e38255be8c0&methods=resize%2C900%2C5000"
            alt=""
          />

          <div className="p-4">
            <h2 className="mt-8 font-anton text-3xl tracking-wider text-yellow-400">Gen1 Ape</h2>
            <h3 className="mt-4 font-anton text-xl tracking-wider">Total Supply 3,333</h3>
            <p className="mt-6 text-gray-100">
              Gen2 are the Ape produced by breeding Gen1 with Zippo and $OSARU coins.
              <br />
              The Gen2 NFT itself is the access key to enter our lands and rooms in the Biggest Solana and ETH
              Metaverse, such as Portals, Sandbox, MatrixWorld and more coming in the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
