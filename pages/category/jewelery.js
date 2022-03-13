import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";

export const getStaticProps = async () => {
    const res = await fetch("https://fakestoreapi.com/products/category/jewelery");
    const data = await res.json()
    return {
        props: { datas: data }
    }
}


const Jewelery = ({ datas }) => {
    return (
        <Layout>
            <Head>
                <title>Jewelery</title>
            </Head>
            <div className="h-[100vh] mt-10">
                <div className='flex flex-wrap sm:w-full sm:justify-center w-[1100px] mx-auto mb-4'>
                    {
                        datas.map((data, idx) => (
                            <Link href={`/detail/${data.id}`}>
                                <div key={data.id} className="hover:scale-110 cursor-pointer shadow-1 rounded-xl flex-col max-w-[160px] p-2 flex m-2 bg-white">
                                    <Image draggable="false" src={data.image} width={140} height={175} alt={data.title} />
                                    <p className='text-[16px] text-ellipsis w-[150px] whitespace-nowrap overflow-hidden'>{data.title}</p>
                                    <p className='line-through text-sm text-slate-400'>${data.price}</p>
                                    {/* <p className='text-[16px] font-semibold'>${Diskon(data.price)}</p> */}
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
            </div>
        </Layout>
    )
}

export default Jewelery;