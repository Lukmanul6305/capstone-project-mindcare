const AuthCard = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full border-2 border-[#1E293B] rounded-[32px] bg-white p-8 md:p-10 shadow-[8px_8px_0px_0px_#E2E8F0] ${className}`}
    >
      {children}
    </div>
  );
};

export default AuthCard;
