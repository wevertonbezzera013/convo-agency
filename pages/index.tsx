import type { NextPage } from 'next'
import Icon from '../public/icon.svg'

const Home: NextPage = () => {

  return (
    <div>

      <div className='flex flex-col items-center mt-60'>

        <h1 className='text-8xl'>Hi There</h1>
        
        <input className='w-80 h-14 ml-5 mb-2 text-2xl cursor-pointer text-center border-white border-2 bg-desktopBg hover:bg-fPassColor rounded-xl text-white' placeholder='Log Out' />

      </div>

    </div>
  )
}

export default Home
