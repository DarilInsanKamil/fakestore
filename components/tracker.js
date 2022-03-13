import Image from "next/image"
import useDeviceSize from "../logic/width-height"
export default function Tracker() {
    const [width] = useDeviceSize()
    return (
        <div className="flex justify-around py-2 text-sm text-slate-400 shadow-1 rounded-md w-1/4 sm:w-full sm:mx-2">
            <figure className="text-center">
                <Image src="/process.png" alt="proses" width={width < 768 ? 26 : 32} height={width < 768 ? 26 : 32} draggable="false" />
                <figcaption>Pesanan Diproses</figcaption>
            </figure>
            <figure className="text-center">
                <Image src="/truck.png" alt="dikirim" width={width < 768 ? 28 : 32} height={width < 768 ? 28 : 32} draggable="false" />
                <figcaption>Pesanan Dikrim</figcaption>
            </figure>
            <figure className="text-center">
                <Image src="/packet.png" alt="sampai" width={width < 768 ? 28 : 32} height={width < 768 ? 28 : 32} draggable="false" />
                <figcaption>Pesanan Selesai</figcaption>
            </figure>
        </div>
    )
}