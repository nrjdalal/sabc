/* eslint-disable @next/next/no-img-element */

const breed = () => {
  return (
    <div className="mx-auto p-6 md:p-16 xl:container">
      <div className="pt-24">
        <h1 className="font-anton text-4xl tracking-wider text-yellow-300">Breeding Formula</h1>
        <p className="mt-8 text-gray-400">
          Combining Gen1 NFT with ZIPPO and $OSARU coins creates a new ape which is a Gen2 ape collection.
          <br />
          These three materials used for breeding will be BURNED.
        </p>
        <img
          src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-bluehost-v1-0-2%2F782%2F1192782%2FxZ9n2NCd%2F013ed19cf6824967825e9251d8ba9c2a&methods=resize%2C1000%2C5000"
          alt=""
          className="mt-8 rounded-xl"
        />
      </div>

      <div className="pt-24">
        <h1 className="font-anton text-4xl tracking-wider text-yellow-300">The Rarity of Gen2 Apes</h1>
        <p className="mt-8 text-gray-400">
          The rarity of Gen2 depends on the type of ZIPPO being bred.
          <br />
          *The rarity of Gen1 does not reflect.
        </p>
        <img
          src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-bluehost-v1-0-2%2F782%2F1192782%2FxZ9n2NCd%2Facdeb48289c84a6181f9fc0a0098d1f9&methods=resize%2C1000%2C5000"
          alt=""
          className="mt-8 rounded-xl"
        />
      </div>

      <div className="pt-24 pb-8">
        <h1 className="font-anton text-4xl tracking-wider text-yellow-300">Frequently Asked Questions</h1>

        <div className="mt-12">
          <h2 className="font-anton text-2xl tracking-wider">When we can breed apes?</h2>
          <div className="mt-4 rounded-lg bg-black p-4">
            Breeding hasn’t started yet, it will be implemented May – June 2022.
          </div>
        </div>

        <div className="mt-12">
          <h2 className="font-anton text-2xl tracking-wider">What do I need for breeding?</h2>
          <div className="mt-4 rounded-lg bg-black p-4">
            You need “1 Gen1 ape”, “2 Zippos”, and “600 $OSARU”. These materials used for breeding will be BURNED.
          </div>
        </div>

        <div className="mt-12">
          <h2 className="font-anton text-2xl tracking-wider">How much the total supply of Gen1 and Gen2 will be?</h2>
          <div className="mt-4 rounded-lg bg-black p-4">
            Gen1 apes will be burned by breeding. Breeding halves the total supply of Gen1 from 3,333 to 1,666. As two
            Zippos are required for breeding, a minimum of 1666 apes will live on the Solana blockchain and be eligible
            for staking. And the total supply of Gen2 is 1,667 + ??? (100 to 333: these are for the WL Sale and Public
            Sale).
          </div>
        </div>

        <div className="mt-12">
          <h2 className="font-anton text-2xl tracking-wider">What are the utilities of Gen2?</h2>
          <div className="mt-4 rounded-lg bg-black p-4">
            -The Gen2 NFT itself is the access key to enter our lands and rooms in the Biggest Solana and ETH Meverse,
            such as Portals, Sandbox, MatrixWorld, and more coming in the future.
            <br />
            -We will also work hard to introduce SABC-specific avatars and items in those worlds.
            <br />
            -GEN2 holders are guaranteed to get our future ETH collection for free. (Required to pay for a gas fee)
          </div>
        </div>
      </div>
    </div>
  )
}

export default breed
