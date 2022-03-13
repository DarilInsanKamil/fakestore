import useDeviceSize from '../logic/width-height'
export default function Footer() {
    const [width, height] = useDeviceSize();
    return (
        <>
            {
                width < 768 ?
                    <div className="bg-sky-700 text-white flex justify-around p-4">
                        <p>Kebijakan privasi</p>
                        <p>Syarat Layanan</p>
                    </div>
                    :
                    <div className='bg-sky-700 text-white flex justify-around p-10'>
                        <ul>
                            <li className='text-4xl font-medium'>FakeStore</li>
                            <li>Jl.Kenangan, Kembangan Jakarta Barat DKI Jakarta</li>
                        </ul>
                        <ul className='text-slate-300'>
                            <h3 className='text-xl text-white font-medium'>Layanan Kami</h3>
                            <li>Bantuan</li>
                            <li>Metode Pembayaran</li>
                            <li>Fake Pay</li>
                            <li>Fake Mall</li>
                            <li>Coin Fake</li>
                            <li>Lacak Pesanan</li>
                            <li>Gratis Ongkir</li>
                            <li>Garansi Fake</li>
                            <li>Hubungi Kami</li>
                        </ul>
                        <ul className='text-slate-300'>
                            <h3 className='text-xl text-white font-medium'>Jelajahi</h3>
                            <li>Tentang Kami</li>
                            <li>Karir</li>
                            <li>Kebijakan FakeStore</li>
                            <li>Kebijakan Privasi</li>
                            <li>Blog</li>
                            <li>Fake Mall</li>
                            <li>Seller Centeer</li>
                            <li>Flash Sale</li>
                            <li>Kontak Media</li>
                        </ul>
                        <ul className='text-slate-300'>
                            <h3 className='text-xl text-white font-medium'>Ikuti Kami</h3>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Github</li>
                            <li>Gitlab</li>
                        </ul>
                    </div>
            }
        </>
    )
}