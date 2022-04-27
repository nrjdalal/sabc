const roadmap = () => {
  const Phase = ({ children, phase, title }) => {
    return (
      <div className="mt-12 flex flex-col space-x-4 md:flex-row">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-800 p-4 font-anton tracking-wider">
          PHASE {phase}
        </div>
        <div>
          <h2 className="mt-4 font-anton text-2xl tracking-wider">{title}</h2>
          <p className="text-gray-400">{children}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto p-6 md:p-16 xl:container">
      <div className="pt-24 pb-8">
        <h1 className="font-anton text-4xl tracking-wider text-yellow-300">OUR ROADMAP</h1>
        <p className="mt-8 text-gray-400">
          Our Future Direction strives to adopt only what is feasible.
          <br />
          There are no unrealistic goals out there so you can rest assured that you can move forward with us.
        </p>
      </div>

      <Phase phase="1" title="NFT Sale and Startup the Community">
        <br /> ✅ Project Launch & Gen1 Sale
        <br /> ✅ Register to the rarity sites
        <br /> ✅ Start trading on MagicEden
      </Phase>

      <Phase phase="2" title="Organizing our Community and Roadmap">
        March
        <br />
        <br /> ✅ Roadmap updates
        <br /> ✅ Opening & publishing of the Coming Utility channel
        <br /> ✅ Fix guide-board channel
        <br /> ✅ Publish “What new members can do?” channel
        <br /> 🟦 Countdown to ZIPPO distribution begins
      </Phase>

      <Phase phase="3" title="Start of “Zippo Distribution” & “Staking”">
        March – April
        <br />
        <br /> ✅ ZIPPO Visual Preparation
        <br /> 🟦 Finalise requirements for DIAMOND ZIPPO
        <br /> 🟦 Take a snapshot for ZIPPO distribution
        <br /> 🟦 Finalise the number of each ZIPPO
        <br /> 🟦 Issue ZIPPO as NFT
        <br /> 🟦 Airdrop ZIPPO : One month after starting staking
        <br />
        <br /> ✅ Coin design
        <br /> ✅ Issuance of coins
        <br /> ✅ Hire an Engineer and request Staking feature
        <br /> ✅ Establish a channel to explain OSARU coins
        <br /> 🟦 Implementation of staking
        <br /> 🟦 Holders start staking: Concluding start date with technicians now.
      </Phase>

      <Phase phase="4" title="Selling and Buying Zippo Phase">
        Start right after ZIPPO airdrop
        <br />
        <br /> 🟦 Airdropping completed
        <br /> 🟦 Register Magic Eden
        <br /> 🟦 Announcement of start of the trading ZIPPO
      </Phase>

      <Phase phase="5" title="Breeding Phase">
        May – June
        <br />
        <br /> ✅ Finalisation of the mechanism of Breeding
        <br /> ✅ Hire an Engineer to implement
        <br /> 🟦 Implementation of the breeding function
        <br /> 🟦 Start Breeding
        <br />
        <br /> 🟦 Release of visuals of the apes produced by the breeding
      </Phase>

      <Phase phase="5" title="Release of Gen2">
        June
        <br />
        <br /> 🟦 Finalise the number of collections
        <br /> 🟦 Register on Up-Coming site and promote to attract new users
        <br /> 🟦 Minting preparation
        <br /> 🟦 Sale
      </Phase>

      <Phase phase="5" title="Release of ETH Collection">
        July
        <br />
        <br /> 🟦 Finalise the number of collections
        <br /> 🟦 Register on Up-Coming site and promote to attract new users
        <br /> 🟦 Minting preparation
        <br /> 🟦 Distribute to Gen 2 holders
        <br /> 🟦 Sale
      </Phase>

      <div className="pt-24 pb-8">
        <h1 className="font-anton text-4xl tracking-wider text-yellow-300">Our Vision to Metaverse</h1>
        <p className="mt-8 text-gray-400">
          Our project’s direction and future prospects have finally been decided. It may have taken us too long to
          decide on them, but we have worked out the best way out of the various possibilities that we at Devs can
          really work on and that you can enjoy.
          <br />
          <br />
          Utilities such as passive income and royalty distribution by tokenomics are definitely the trend in the Solana
          NFT projects at the moment.
          <br />
          <br />
          However, we do not adopt utilities such as passive income or royalty distribution. Crypto laws and regulations
          are complex and vary from country to country. We do not take that risk and aim to keep the project alive for
          the long term. Let’s look at other possibilities.
          <br />
          <br />
          A strong possibility we have found is to commit to base the project in the Metaverse. We commit to making sure
          that community members have access to different metaverses through this project and that is where our project
          will be located.
          <br />
          <br />
          Why not create our own metaverse? Good question. It requires a lot of money, a huge amount of time spent on
          development and a lot of technical staff. We have also decided that it would be very difficult to achieve this
          on an individual project basis, considering the funding we would have to spend on developing and maintaining
          the metaverse. And some metaverse projects already have big sponsors who can cover them. Instead of us
          preparing them now, let’s take advantage by being the first to join the projects that already have them ready.
          <br />
          <br />
          5% of the 10% royalties from the GEN1 collection will be added to fund them. (to be used to buy land or rooms
          in the metaverse, to create our own avatars and items, to partner with promising metaverse projects)
          <br />
          <br />
          In order to coexist with promising metaverses, projects need to be developed not only in Solana but also in
          ETH. By engaging with ETH projects, we can increase the population of people who know about SABC.
          <br />
          <br />
          The team will now decide which metaverse we will enter based on these criteria. -The function to have
          simultaneous multi-player connectivity. -Funding and sponsorship must be plentiful and long-term development
          and growth must be anticipated.
          <br />
          <br />
          Many metaverse projects are still in the development phase, but we’ll develop with them over time. Above all,
          let’s enjoy the beginnings of web3 world together.
        </p>
      </div>
    </div>
  )
}

export default roadmap
