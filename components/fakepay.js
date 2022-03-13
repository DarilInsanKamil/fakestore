import Image from "next/image"
export default function FakePay() {
    return (
        <div className="bg-white shadow-1 rounded-lg w-1/4 px-4 py-2 flex items-center justify-around sm:hidden mx-4">
            <section className="flex items-center">
                <figure className="mr-4">
                    <Image src='/wallet.png' alt='wallet' width={32} height={30} />
                </figure>
                <div className="divide-y divide-slate-400">
                    <p className="font-medium">$120</p>
                    <p className="text-slate-400">120.000 Coin</p>
                </div>
            </section>
            <section className="flex items-center">
                <figure className="mr-4">
                    <Image src='/diamond.png' alt='diamond' width={28} height={28} />
                </figure>
                <div className="divide-y divide-slate-400">
                    <p className="font-medium">Free ongkir</p>
                    <p className="text-slate-400">11 kupon</p>
                </div>
            </section>
        </div>
    )
}