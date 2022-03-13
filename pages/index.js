import Head from 'next/head'
import Banner from '../components/banner'
import Layout from '../components/Layout'
import Image from 'next/image';
import { useState } from 'react';
import Tracker from '../components/tracker';
import FakePay from '../components/fakepay';
import useDeviceSize from '../logic/width-height';
import Footer from '../components/Footer';
import Countdown from 'react-countdown'
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  const Data = await res.json()
  return {
    props: {
      datas: Data
    }
  }
}

function Diskon(hargaAwal) {
  let diskon
  diskon = 0.2 * hargaAwal;
  let hargaDiskon = hargaAwal - diskon;
  let Slicing = hargaDiskon.toString().substr(0, 4);
  return Slicing
}


const Home = ({ datas }) => {
  const [width] = useDeviceSize()
  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(7)


  const handleNext = () => {
    if (n2 < 18) {
      setN1(n1 + 6) % datas.length
      setN2(n2 + 6) % datas.length
    }
  }

  const handlePrev = () => {
    const prevIndex = n1 - 6
    const prevIndex1 = n2 - 6
    if (n1 > 0) {
      setN1(prevIndex)
      setN2(prevIndex1)
    }
  }

  return (
    <>
      <Head>
        <title>FakeStore</title>
        <meta name='description' content="portofolio e-commerce daril insan kamil"></meta>
        <meta data-rh="true" name="twitter:description" content="Situs jual beli online terlengkap dengan berbagai pilihan toko online terpercaya. Belanja online mudah dan menyenangkan di FakeStore. Pengiriman cepat."></meta>
      </Head>
      <Layout>
        <div>
          <Banner />
          <div className='flex w-full my-8 justify-center '>
            <FakePay />
            <Tracker />
          </div>
          {/* <Countdown/> */}
          <div className='bg-sky-700 ml-40 sm:ml-4 mb-2 flex w-fit px-4 py-2 rounded-xl text-white font-medium text-2xl'>
            <p>Flashsale</p>
            <div className='flex items-center ml-2'>
              <figure className='mr-2'>
                <Image src='/timer.svg' width={18} height={18} alt="timer" />
              </figure>
              <div className='text-sm'>
                <Countdown date={Date.now() + 9999999999} />
              </div>
            </div>
          </div>
          {/* Flash Sale */}
          <div className='flex justify-center sm:justify-start overflow-hidden sm:overflow-x-scroll rounded-xl px-2'>
            {
              datas.slice(width > 768 ? n1 : 0, width > 768 ? n2 : 18).map((data => (
                <Link key={data.id} href={`/detail/${data.id}`}>
                  <div key={data.id} className="hover:scale-105 cursor-pointer shadow-1 rounded-xl flex-col max-w-[160px] p-2 flex m-2 bg-white">
                    <Image draggable="false" src={data.image} width={140} height={175} alt={data.title} />
                    <p className='text-[16px] text-ellipsis w-[150px] whitespace-nowrap overflow-hidden'>{data.title}</p>
                    <p className='line-through text-[12px] text-slate-400'>${data.price}</p>
                    <p className='text-[16px] font-semibold'>${Diskon(data.price)}</p>
                    <section className='flex text-sm items-center justify-between'>
                      <p>terjual {data.rating.count - 65}</p>
                      <section className='flex'>
                        <p>{data.rating.rate}</p>
                        <Image src="/star.svg" alt="rate" width={18} height={18} />
                      </section>
                    </section>
                  </div>
                </Link>
              )))
            }
          </div>
          <section className='sm:hidden'>
            <button className='h-fit px-3 rounded-[100px] pb-2 bg-white z-10' onClick={handlePrev}>
              <p className='text-2xl font-bold'>{'<'}</p>
            </button>
            <button className='h-fit px-3 rounded-[100px] pb-2 bg-white z-10' onClick={handleNext}>
              <p className='text-2xl font-bold'>{'>'}</p>
            </button>
          </section>
        </div>
        <figure className='w-full flex justify-center mt-8 mb-4' >
          <Image src="/bannerpromo1.png" width={1200} height={width < 768 ? 250 : 150} alt="promo" className='rounded-xl sm:rounded-none' />
        </figure>
        <div className='bg-sky-700 ml-40 sm:ml-4 mb-2 flex w-fit px-4 py-2 rounded-xl text-white font-medium text-2xl'>
          <p>Rekomendasi</p>
        </div>
        <div className='flex flex-wrap sm:w-full sm:justify-center w-[1100px] mx-auto mb-4'>
          {
            datas.map((data, idx) => (
              <Link key={data.id} href={`/detail/${data.id}`}>
                <div className="hover:scale-110 cursor-pointer shadow-1 rounded-xl flex-col max-w-[160px] p-2 flex m-2 bg-white">
                  <Image draggable="false" src={data.image} width={140} height={175} alt={data.title} />
                  <p className='text-[16px] text-ellipsis w-[150px] whitespace-nowrap overflow-hidden'>{data.title}</p>
                  <p className='text-[16px] font-semibold'>${data.price}</p>
                  <section className='flex text-sm items-center justify-between'>
                    <p>terjual {data.rating.count - 65}</p>
                    <section className='flex'>
                      <p>{data.rating.rate}</p>
                      <Image src="/star.svg" alt="rate" width={18} height={18} />
                    </section>
                  </section>
                </div>
              </Link>
            ))
          }
        </div>
      </Layout>
    </>
  )
}
export default Home;