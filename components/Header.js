import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className="flex bg-sky-600 text-slate-200 items-center mb-1">
            <div className="flex justify-evenly p-2 items-center w-full">
             <Link href='/'><p className="sm:hidden font-bold text-2xl">FakeStore</p></Link>
                <section>
                    <label className="border-2 rounded-md px-2 py-1 flex items-center justify-between sm:w-full w-[700px]">
                        <input
                            type="text"
                            placeholder="search..."
                            className="bg-transparent outline-none placeholder-slate-200 w-[700px] sm:w-full"
                        />
                        <Image
                            src="/searchicon.svg"
                            alt="searchicon"
                            width={20}
                            height={20}
                            draggable="false"
                        />
                    </label>
                    <ul className="flex text-smmd sm:text-[10px] mt-1">
                        <Link href="/category/electronic"><li className="mr-2" >Electronic</li></Link>
                        <Link href="/category/menclothing"><li className="mr-2" >Men Clothing</li></Link>
                        <Link href="/category/womenclothing"><li className="mr-2" >Women Clothing</li></Link>
                        <Link href='/category/jewelery'><li>Jewelery</li></Link>
                    </ul>
                </section>
                <div className="flex w-[150px] sm:w-fit justify-between">
                    <figure className="mr-2">
                        <Image
                            src='/carticon.svg'
                            width={24}
                            height={24}
                            alt="carticons"
                            layout="fixed"
                            draggable="false"
                        />
                    </figure>
                    <figure className="mr-2">
                        <Image
                            src='/email.svg'
                            width={24}
                            height={24}
                            alt="carticons"
                            layout="fixed"
                            draggable="false"
                        />
                    </figure>
                    <figure>
                        <Image
                            src='/usericon.svg'
                            width={24}
                            height={24}
                            alt="carticons"
                            layout="fixed"
                            draggable="false"
                        />
                    </figure>
                </div>
                <section className="sm:hidden items-center flex w-[180px] justify-between">
                    <p className="border-2 text-white font-medium border-white rounded-md px-4 py-2">Masuk</p>
                    <p className="bg-white text-sky-700 font-medium px-4 py-2 rounded-md">Daftar</p>
                </section>
            </div>
        </header >
    )
}