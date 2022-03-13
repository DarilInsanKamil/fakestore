// import Image from "next/image";
import { useEffect, useState } from "react";
import api from '../pages/api/hello'
import Image from "next/image";
import useDeviceSize from "../logic/width-height";

// export async function getSortedPostsData() {
//     // Instead of the file system,
//     // fetch post data from an external API endpoint
//     const res = await api()
//     const Data = await res.json()
//     return {
//         props: {
//             Data,
//         }
//     }
// }

export default function Banner() {
    const [indexImg, setIndexImg] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);
    const [width, height] = useDeviceSize()
    const Data = [
        '/banner1.jpg',
        '/banner2.jpg',
        '/banner3.jpg'
    ]

    useEffect(() => {
        const next = (indexImg + 1) % Data.length
        const id = setTimeout(() => setIndexImg(next), 5000)
        return () => clearTimeout(id)
    }, [indexImg])

    const handlePrev = () => {
        const prevIndex = indexImg - 1
        const prevIndex1 = nextIndex - 1

        if (prevIndex < 0) {
            setIndexImg(Data.length - 1)
        } else {
            setIndexImg(prevIndex)
        }

        if (prevIndex1 < 0) {
            setNextIndex(Data.length - 1)
        } else {
            setNextIndex(prevIndex)
        }
    }

    const handleNext = () => {
        setIndexImg((indexImg + 1) % Data.length)
        setNextIndex((nextIndex + 1) % Data.length)
    }
    const handleClick = (idx) => {
        setIndexImg(idx)
    }
    return (
        <div>
            <div className="flex">
                <button onClick={handlePrev} name="arrowprev" >
                    <Image src="/iconprevious.svg" alt="arrow" width="12px" height="12px" />
                </button>
                <figure className="z-0 relative m-auto">
                    <Image
                        src={Data[indexImg]}
                        alt="banner"
                        width={1200}
                        height={width < 768 ? 350 : 300}
                        className="rounded-xl sm:rounded-none"
                        draggable="false"
                    />
                    <section className="absolute bottom-[5px] left-[20px] ">
                        {
                            Data.map((el, idx) => (
                                <ul onClick={() => handleClick(idx)} key={idx}>
                                    <li className="w-[10px] h-[10px] mr-2 bg-slate-500 my-5 rounded-xl"></li>
                                </ul>
                            ))
                        }
                    </section>
                </figure>
                <button onClick={handleNext} name="arrowprev">
                    <Image src="/iconnext.svg" alt="arrow" width="12px" height="12px" />
                </button>
            </div>
        </div>
    )
}
