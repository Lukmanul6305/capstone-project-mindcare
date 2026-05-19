const WelcomeCard = ({ userName }) => {
  return (
    <div className="rounded-xl border-2 border-[#1E293B] bg-[#8B5CF6] p-8 text-white shadow-[4px_4px_0px_0px_#1E293B]">
      <h2 className="mb-1 text-3xl font-extrabold">Halo, {userName || "User"}!</h2>
      <p className="mb-5 text-sm font-medium text-white/80">
        Selamat datang di ruang aman digitalmu. Ayo mulai hari ini dengan check-in dan aktivitas yang
        menyenangkan!
      </p>
      <a
        href="/checkin"
        className="inline-block rounded-full border-2 border-[#1E293B] bg-white px-6 py-2.5 text-sm font-bold text-[#8B5CF6] shadow-[2px_2px_0px_0px_#1E293B] transition-all hover:translate-y-px hover:shadow-[1px_1px_0px_0px_#1E293B]"
      >
        Mulai Check-in
      </a>
    </div>
  );
};

export default WelcomeCard;
