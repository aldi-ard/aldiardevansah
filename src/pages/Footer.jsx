// import WhatsAppButton from "../forms/FormWa"

const Footer = () => {
    return(
        <footer className="bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 w-full py-10 md:py-16">
            <div className="grid md:grid-cols-3 gap-7">
                <div className="">
                    <a href="/" className="mb-10 block">
                        <h1 className="text-white font-extrabold text-2xl">Aldi Ardiansah</h1>
                    </a>
                    <p className="text-gray-400">
                        I am an Information Technology student with a background in manufacturing. Currently, I focus on web development, creating company profile websites that help businesses build their digital presence.
                    </p>
                </div>
                <div className="">
                    <div className="flex gap-20 ">
                        <div className="flex-1 md:flex-none">
                            <h4 className="mb-8 text-xl font-semibold text-white">Links</h4>
                            <ul className="list-item space-y-5 text-gray-400">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/layanan">Layanan</a>
                                </li>
                                <li>
                                    <a href="/pricelist">Pricelist</a>
                                </li>
                                <li>
                                    <a href="/portofolio">Portofolio</a>
                                </li>
                                <li>
                                    <a href="/Contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 md:flex-none">
                            <h4 className="mb-8 text-xl font-semibold text-white">More</h4>
                            <ul className="list-item space-y-5 text-gray-400">
                                <li>
                                    <a href="https://drive.google.com/file/d/1U11NA2uUxwLngG5NSmOAwBlt95Igi9pJ/view">Perpisahan Sekolah</a>
                                </li>
                                <li>
                                    <a href="https://wa.me/6288802074999">Whatsapp</a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/drone_solo/">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://www.tiktok.com/@drone_solo">Tiktok</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h4 className="mb-8 text-xl font-semibold text-white">Contact</h4>
                    <p className="text-gray-400">
                        kirim pesan langsung ke whatsapp kami
                    </p>
                    {/* <WhatsAppButton/> */}
                </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 border-t border-gray-500 py-8 text-center text-base capitaleze text-gray-500">
            &copy; Copyright 2025 | Dronesolo | All Right reserved
          </div>
        </footer>
    )
}

export default Footer