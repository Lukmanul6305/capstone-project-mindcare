import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFFDF5] p-6 text-center">
      <h1 className="text-6xl font-extrabold text-[#1E293B] mb-4">404</h1>
      <h2 className="text-2xl font-bold text-[#64748B] mb-6">Halaman Tidak Ditemukan</h2>
      <p className="text-[#64748B] mb-8 max-w-md">
        Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
        Sebaiknya kembali ke halaman utama untuk melanjutkan perjalanan mentalmu.
      </p>
      <Link
        to="/"
        className="inline-block rounded-[12px] border-2 border-[#1E293B] bg-[#A855F7] px-8 py-3 text-center font-extrabold text-white shadow-[4px_4px_0px_0px_#1E293B] transition-all duration-200 hover:-translate-y-0.5"
      >
        KEMBALI KE BERANDA
      </Link>
    </div>
  );
};

export default NotFound;
