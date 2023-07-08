import Line from "../../public/assets/line.png"
import Model from "../../public/assets/model.png"
import Image from 'next/image'
import CardTeam from "../fragments/cardTeam"
export default function Team() {
    
    return (
        <section className="mt-16 pb-14" id="team">
            <div className="container max-w-full">
                <div className="flex w-full flex-wrap">
                    <div className="h-max lg:w-1/2">
                        <Image src={Model} alt="sugeng rihandoyo" className="team-image opacity-0" />
                    </div>
                    <div className="lg:w-1/2 lg:pl-4">
                        <div className="overflow-hidden">
                            <h2 className="team-name font-playfair text-3xl sm:text-[35.2px] md:text-xl">Sugeng Rihandoyo</h2>
                            <Image src={Line} alt="Line" className="team-line mt-3 h-1 w-1 scale-x-0 opacity-0" />
                            <p className="team-desc desc mt-4 font-inter opacity-0">
                                Sugeng Rihandoyo, seorang pedagang kaki lima yang telah mengubah cara Lumajang menikmati siomay. Sugeng bukanlah penjual siomay biasa, dia adalah orang pertama yang memperkenalkan kelezatan siomay khas Bandung di kota Lumajang selama 20 tahun ini.
                            </p>

                            <p className="team-desc mt-3 font-inter opacity-0">
                                Namun, bukan hanya rasa yang membuat siomay Sugeng begitu spesial. Sugeng percaya bahwa kepuasan pelanggan adalah segalanya. &lsquo Pelanggan puas, kita juga puas,&lsquo  katanya, menunjukkan komitmennya untuk memberikan layanan terbaik.
                                Dia juga dikenal karena sifatnya yang humoris, menciptakan suasana yang nyaman dan menyenangkan bagi pelanggan. Dengan Sugeng, membeli siomay bukan hanya tentang makanan, tetapi juga tentang pengalaman - sebuah perjalanan kuliner yang menggembirakan dan memuaskan.
                            </p>
                        </div>
                        <div className="mt-9 flex flex-col gap-x-10 gap-y-8 font-inter lg:flex-row">
                            <CardTeam />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
