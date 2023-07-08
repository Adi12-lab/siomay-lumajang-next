import Slipper from "../../public/assets/image/slipper.png"
import Fish from "../../public/assets/image/fish.png"
import Orders from "../../public/assets/image/orders.png"
import Line from "../../public/assets/image/line.png"
import Image from 'next/image'
import { StaticImageData } from 'next/image';
export default function About() {
    type Service = {
        icon: StaticImageData;
        name: string;
        description: string;
    };

    const services: Service[] = [
        {
            icon: Slipper,
            name: "Tradisional",
            description:
                "Siomay yang dibuat dengan cara yang tradisional, tentunya tetap berkualitas terbaik",
        },
        {
            icon: Fish,
            name: "Bahan Terbaik",
            description:
                "Kami memilih bahan terbaik, yaitu ikan tenggiri yang menjadi bahan utama",
        },
        {
            icon: Orders,
            name: "Pesanan Banyak",
            description:
                "Kami juga menerima pesanan dalam jumlah banyak. Selain itu, kami siap datang ke acara anda",
        },
    ];

    return (
        <section className="mt-7 bg-[#FAFAFA] py-14" id="about">
            <div className="container max-w-full">
                <div className="pb-4 text-center">
                    <h2 className="about-title font-playfair text-3xl font-bold opacity-0 leading-9 sm:text-[35.2px] sm:leading-10 md:text-xl">
                        Selamat Datang di Siomay Lumajang
                    </h2>
                    <Image src={Line} alt="line" className="about-line mx-auto mt-4 w-1 h-1 scale-0" />
                    <p className="about-desc mx-auto mt-6 font-inter opacity-0 lg:w-[695px]">
                        Terima kasih telah mempertimbangkan Siomay Lumajang untuk makanan
                        Anda berikutnya. Kami tidak sabar untuk menyajikan makanan terbaik
                        untuk Anda!
                    </p>
                </div>

                <div className="mt-7 flex flex-wrap flex-col items-center gap-y-6 md:justify-evenly lg:flex-row">
                    {services.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`about-card card-${index} group flex h-[249px] w-[321px] flex-col items-center justify-center rounded-[50px] opacity-0 from-[#FF7010] to-[#473B32] p-7 text-balance hover:bg-gradient-to-br`}
                            >
                                <div className="w-fit rounded-full bg-primary px-4 py-3 transition-all duration-100 ease-in-out group-hover:bg-white ">
                                    <Image
                                        src={item.icon}
                                        alt={item.name}
                                        className="mx-auto h-[47px] w-[40px]"
                                    />
                                </div>
                                <h4 className="mt-2 text-center font-playfair text-[20px] text-primary transition-all duration-100 ease-in-out group-hover:text-white">
                                    {item.name}
                                </h4>
                                <p className="font-gray mt-2 text-center font-inter transition-all duration-100 ease-in-out group-hover:text-white">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
