import React from 'react'
import landingPageImage from '../assets/landing.png'
import appDownloadImage from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className='flex flex-col gap-12'>
      <div className='bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16'>
        <h1 className='text-5xl font-bold tracking-tight text-blue-600'>
          Thưởng thức món ngon hôm nay
        </h1>
        <span className='text-xl'>Nhấn 1 cái có ngay món ngon!</span>
        {/* <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        /> */}
      </div>
      <div className='grid md:grid-cols-2 gap-5'>
        <img src={landingPageImage} alt="" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className='font-bold text-3xl tracking-tighter'>
            Gọi món siêu nhanh
          </span>
          <span>
            Tải xuống Ứng dụng 47Food để đặt hàng nhanh hơn và nhận nhiều ưu đãi hơn
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  )
}

export default HomePage
