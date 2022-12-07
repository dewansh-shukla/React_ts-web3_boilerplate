import { ConnectButton } from "@rainbow-me/rainbowkit"
import react from "react"

const Home = () => {
  return (
    <>
      <div className='flex flex-col w-full  items-center h-full'>
        <h1 className='text-4xl mb-6 font-mono font-bold mt-10'>
          Boiler Plate React_Web3
        </h1>
        <ConnectButton chainStatus='icon' showBalance={false} />
      </div>
    </>
  )
}

export default Home
