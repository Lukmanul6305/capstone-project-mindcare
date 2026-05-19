const AuthError = ({ message }) => {
  if (!message) return null;

  return (
    <div className="mb-4 rounded-2xl border-2 border-red-400/40 bg-red-500/10 p-3 text-center text-sm font-medium text-red-500">
      {message}
    </div>
  );
};

export default AuthError;
