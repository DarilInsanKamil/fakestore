import Head from "next/head"
import Layout from "../../components/Layout"
import Image from "next/image";
import { useRouter } from "next/router";
import useDeviceSize from "../../logic/width-height";

export const getStaticPaths = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()

    const paths = data.map(product => {
        return {
            params: { id: product.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json()

    return {
        props: {
            datas: data
        }
    }
}
const Detail = ({ datas }) => {
    const router = useRouter()
    const [width] = useDeviceSize()
    return (
        <Layout>
            <Head>
                <title>{datas.title}</title>
            </Head>
            <div className="h-[100vh] flex items-center">
                <figure onClick={() => router.back()}>
                    <Image src="/arrow.png" width={18} height="18" alt="back" draggable="false" />
                </figure>
                <div className="my-10 mx-4 justify-around flex items-center flex-row sm:flex-col">
                    <figure className="flex sm:justify-center">
                        <Image src={datas.image} width={width < 768 ? 250 : 350} height={width < 768 ? 275 : 375} draggable="false" alt={datas.title} />
                    </figure>
                    <div className="sm:w-fit w-2/5">
                        <p className="text-sky-700 font-medium">{datas.category}</p>
                        <p className="text-3xl font-medium">${datas.price}</p>
                        <p className="text-2xl font-medium mb-1">{datas.title}</p>
                        <section className="flex justify-between mb-2 text-sm text-sky-500">
                            <p>Terjual {datas.rating.count - 65}</p>
                            <figure className="flex">
                                <p>{datas.rating.rate}</p>
                                <Image src="/star.svg" width={18} height={18} alt="star" />
                            </figure>
                        </section>
                        <p>{datas.description}</p>
                        <section className="my-4">
                            <div className="flex mb-4 justify-between items-center text-lg font-medium text-sky-700 bg-sky-100 px-4 py-2 rounded-lg">
                                <figure className="flex">
                                    <Image src="/minus.png" width={18} height={3} alt="minus" />
                                </figure>
                                <p>0</p>
                                <figure className="flex">
                                    <Image src="/plus.png" width={18} height={18} alt="plus" />
                                </figure>
                            </div>
                            <div className="flex justify-between">
                                <div className="border-2 border-sky-700 px-4 py-2 rounded-lg text-lg text-sky-700 font-medium">
                                    <p>Masukan Keranjang</p>
                                </div>
                                <div className="bg-sky-700 px-4 py-2 rounded-lg text-white font-medium text-lg">
                                    <p>Beli</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Detail