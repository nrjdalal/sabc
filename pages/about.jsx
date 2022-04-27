/* eslint-disable @next/next/no-img-element */

const about = () => {
  const Cards = ({ children, src, title, tokens }) => {
    return (
      <div className="mt-12 flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0 xl:items-center">
        <img src={src} alt="" className="aspect-square rounded-xl md:h-48 md:w-48 xl:h-64 xl:w-64" />
        <div>
          <h2 className="mt-4 font-anton text-3xl tracking-wider text-white">{title}</h2>
          <h3 className="mt-4 font-anton text-xl tracking-wider text-gray-200">{tokens}</h3>
          <p className="mt-6 text-gray-400">{children}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto p-6 md:p-16 xl:container">
      <div className="pt-24 pb-8">
        <h1 className="font-anton text-4xl tracking-wider text-yellow-300">ABOUT SMOKY APE BASEMENT CLUB</h1>
        <p className="mt-8 text-white">
          The Smoky Ape Basement Club began as a collection of 3,333 randomly generated non-alternative tokens (NFTs) on
          the Solana blockchain that went on sale in late January 2022. This collection with a total supply of 3,333
          will be adored by the founders and holders in the future development of the project as Gen1 Ape and will
          continue to hold its special status. Louie, the project’s artist, has elevated Gen1 Apes into a more artistic
          collection that sets SABC apart from the many other Ape projects.
          <br />
          By using tokens to sell Gen1 Ape at both the whitelist sale and the public sale, the project prevented the bot
          hoarding that has been a problem with the SolanaNFT project, and all 3,333 Ape sold out by real people.
          <br />
          After the minting of the Gen1 apes, the direction of the project was set to make the project more interesting.
          The future plan was created to ensure the long-term viability of the project, with the motto of granting
          projects realizable utility, and $OSARU tokens were generated to serve as the cornerstone and fuel for the
          SABC ecosystem. Only Gen1 Apes can generate $10-15 $OSARU per day depending on their rarity, and $OSARU will
          be used as utility tokens for various future events such as Breeding.
          <br />
          Gen1 Apes holders will be rewarded with a ZippoNFT collection of three rarities based on their contribution to
          the community, and Gen1 Apes will be transformed into Gen2 Apes by Breeding with ZippoNFT and $OSARU. Gen2
          Apes can also be acquired by a very limited number of people at the Whitelist sale.
          <br />
          The Gen2 NFT itself is the access key to enter our lands and rooms in the Biggest Solana and ETH Metaverse,
          such as Portals, Sandbox, MatrixWorld, and more coming in the future.
        </p>
      </div>

      <div className="pb-8 pt-24">
        <h1 className="font-anton text-4xl tracking-wider text-yellow-300">ABOUT THE TEAM</h1>

        <Cards
          src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-bluehost-v1-0-2%2F782%2F1192782%2FxZ9n2NCd%2F3d4fe3f3a4c04cf4a6bb564f17e4d9d2&methods=resize%2C600%2C5000"
          title="Lara THE skywalker"
          tokens="Tech lead"
        >
          A tech aficionado at heart. Has a background in corporate engineering in the US in the fields of 3D, space and
          agricultural technologies. Her true desire however, was always to create her own project to bring people
          together. She built SABC with her friends Rex and Louie. She takes care of the technology implementation, SPL
          token system, mint and overall support to the community and SABC team.
        </Cards>

        <Cards
          src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-bluehost-v1-0-2%2F782%2F1192782%2FxZ9n2NCd%2Fb45be9d3de094f4195f89283edba1f80&methods=resize%2C600%2C5000"
          title="Louie"
          tokens="Digital Artist"
        >
          Our creative ape. Louie is a freelance digital artist who moved from Japan to Australia three years ago to
          become fluent in the English language. He is obsessed with art and pshotoshop and is constantly trying to
          learn ways to perfect his art. He loves movies and is a fan of the SCI-FI genre, although in English he
          sometimes has a hard time to understand everything and needs to actívate subtitiles or ends up watching
          comedies! He is the real creative mind of the project and his true goal is to empower the SABC community and
          create a true and unique family feeling.
        </Cards>

        <Cards
          src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-bluehost-v1-0-2%2F782%2F1192782%2FxZ9n2NCd%2Ff0a31b2354674556adad4115bb9de2a1&methods=resize%2C600%2C5000"
          title="Dr. Rex"
          tokens="Tech"
        >
          Our software engineer. Was fundamental in the beginning of the project implementing all the technological
          aspects of SABC. Continues to be involved in the technological in the background. He is the tech man in the
          shadows but always present.
        </Cards>
      </div>
    </div>
  )
}

export default about
