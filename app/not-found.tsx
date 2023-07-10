import Link from "next/link"
export default function NotFound() {
  return (
    <div className="container">
        <div className="flex h-screen flex-col items-center justify-center">
            <h1 className="text-center"> <span className="font-medium text-[23px]">404</span> | Maaf halaman yang anda cari tidak ditemukan</h1>
            <Link href="/" className="text-primary">Kembali ke halaman</Link>
        </div>
    </div>
  )
}
