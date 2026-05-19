const AuthLogo = ({ widthClass = "w-56" }) => {
  return (
    <div className="mb-6 text-center">
      <img
        src="/Logo Mindcare.png"
        alt="MindCare Logo"
        className={`${widthClass} mx-auto object-contain`}
      />
    </div>
  );
};

export default AuthLogo;
