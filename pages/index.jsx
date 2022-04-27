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

      {
        // ~ Three Cards
      }

      <div className="flex flex-wrap justify-between space-y-6 pt-24 md:space-y-0">
        <div className="w-full bg-red-900 md:w-[30%]">
          <img
            src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-bluehost-v1-0-2%2F782%2F1192782%2FxZ9n2NCd%2Fcf5a7e45c5aa48c29f598413d2254ec2&methods=resize%2C900%2C5000"
            alt=""
          />

          <div className="p-4 pb-8">
            <h2 className="mt-4 font-anton text-3xl tracking-wider text-yellow-400">Gen1 Ape</h2>
            <h3 className="mt-4 font-anton text-xl tracking-wider">Total Supply 3,333</h3>
            <p className="mt-6 text-gray-100">
              Zippos are used to breed Gen2 Apes. Each SABC NFT Holder Will be Airdropped ZIPPOs, of three different
              categories (Diamond, Gold, Silver).
              <br />
              The rarity of the Gen2 changes depending on the type of Zippo used for breeding.
            </p>
          </div>
        </div>

        <div className="w-full bg-red-900 md:w-[30%]">
          <img
            src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-bluehost-v1-0-2%2F782%2F1192782%2FxZ9n2NCd%2F3edec50ab84443faa5c3a3ff66643bba&methods=resize%2C900%2C5000"
            alt=""
          />

          <div className="p-4 pb-8">
            <h2 className="mt-4 font-anton text-3xl tracking-wider text-yellow-400">Gen1 Ape</h2>
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

        <div className="w-full bg-red-900 md:w-[30%]">
          <img
            src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-bluehost-v1-0-2%2F782%2F1192782%2FxZ9n2NCd%2F07ef06a54baf40caae961e38255be8c0&methods=resize%2C900%2C5000"
            alt=""
          />

          <div className="p-4 pb-8">
            <h2 className="mt-4 font-anton text-3xl tracking-wider text-yellow-400">Gen1 Ape</h2>
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

      {
        // ~ Image on right
      }

      <div className="pt-24">
        <div className="flex flex-col space-y-16 lg:flex-row lg:items-center">
          <div className="mt-8 lg:w-2/3">
            <h2 className="font-anton text-4xl tracking-wider text-yellow-400">BREED YOUR APE AND GET GEN2 APES</h2>
            <h3 className="mt-4 font-anton text-xl tracking-wider">What kind of Apes will be born?</h3>

            <div className="my-6 w-full border-b-[0.5px] opacity-25" />

            <p className="mt-6 text-gray-100">
              Combining Gen1 ape with Zippo and $OSARU coins creates a new Gen2 ape. Basically, Gen2 can only be
              obtained through breeding. The type of zippo used will change the result of the breeding.
              <br />
              The $OSARU coins needed for breeding can be obtained from staking.
            </p>

            <div className="my-6 w-full border-b-[0.5px] opacity-25" />

            <button className="mt-8 rounded-lg bg-yellow-300 p-10 py-4 text-base text-black">Learn More</button>
          </div>

          <img
            src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-bluehost-v1-0-2%2F782%2F1192782%2FxZ9n2NCd%2Ff128019d028847ef83ea74a8dd855fb8&methods=resize%2C1000%2C5000"
            alt=""
            className="lg:w-1/3"
          />
        </div>
      </div>

      {
        // ~ Image on left
      }

      <div className="pt-24">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <img
            src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-bluehost-v1-0-2%2F782%2F1192782%2FxZ9n2NCd%2Fbfc3431b19704a92869cef07a3c0c9b9&methods=resize%2C1000%2C5000"
            alt=""
            className="order-2 pt-16 lg:order-1 lg:w-1/3 lg:pt-0"
          />

          <div className="order-1 mt-8 lg:order-2 lg:w-2/3 ">
            <h2 className="font-anton text-4xl tracking-wider text-yellow-400">STAKING AND GET $OSARU</h2>
            <h3 className="mt-4 font-anton text-xl tracking-wider">10 – 15 $OSARU / Day</h3>

            <div className="my-6 w-full border-b-[0.5px] opacity-25" />

            <p className="mt-6 text-gray-100">
              $OSARU coins are coins generated by staking. Only Gen1 apes can generate $OSARU coins by staking. $OSARU
              is the utility token that fuels the SABC ecosystem.
            </p>

            <div className="my-6 w-full border-b-[0.5px] opacity-25" />

            <button className="mt-8 rounded-lg bg-yellow-300 p-10 py-4 text-base text-black">Stake you Ape</button>
          </div>
        </div>
      </div>

      {
        // ~ Image on right
      }

      <div className="pt-24">
        <div className="flex flex-col space-y-16 lg:flex-row lg:items-center">
          <div className="mt-8 lg:w-2/3">
            <h2 className="font-anton text-4xl tracking-wider text-yellow-400">SABC ZIPPO COLLECTION</h2>
            <h3 className="mt-4 font-anton text-xl tracking-wider">Total Supply 3,334</h3>

            <div className="my-6 w-full border-b-[0.5px] opacity-25" />

            <p className="mt-6 text-gray-100">
              Zippo is used to breed Gen2 apes. Distributed to Gen1 holders at specific times, Zippo are available in
              Diamond, Gold and Silver. Once the Zippo Airdrop is completed, Zippo will be available from the market.
            </p>

            <div className="my-6 w-full border-b-[0.5px] opacity-25" />

            <button className="mt-8 rounded-lg bg-yellow-300 p-10 py-4 text-base text-black">Learn More</button>
          </div>

          <div className="lg:w-1/3 lg:pl-6">
            <img
              src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-bluehost-v1-0-2%2F782%2F1192782%2FxZ9n2NCd%2F2a1475af43d94734820194b7408a4f3a&methods=resize%2C1000%2C5000"
              alt=""
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>

      {
        // ~ Ending section
      }

      <div className="w-full pb-8">
        <div className="mt-32 w-full rounded-3xl bg-red-900 py-24 px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-anton text-4xl tracking-wider">GET YOUR SABC APE TODAY</h1>

            <p className="mt-8 text-gray-100">Go to the secondary market and get your ape to yield $OSARU coin.</p>

            <button className="mt-8 rounded-lg bg-yellow-300 p-10 py-4 text-base text-black">Magic Eden</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
