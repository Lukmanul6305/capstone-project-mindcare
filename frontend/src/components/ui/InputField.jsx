const InputField = ({
  label,
  type = "text",
  id,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  icon: Icon,
  labelClassName = "",
  inputClassName = "",
  ...props
}) => {
  return (
    <div className="space-y-2">
      {label ? (
        <label
          htmlFor={id || name}
          className={`text-sm font-bold text-[#1E293B] flex items-center gap-2 ${labelClassName}`}
        >
          {Icon ? <Icon className="text-[#8B5CF6]" size={16} /> : null}
          {label}
        </label>
      ) : null}

      <input
        id={id || name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full rounded-2xl border-2 border-[#1E293B] bg-[#FFFDF5] px-4 py-3.5 font-medium text-[#1E293B] placeholder:text-[#64748B]/70 focus:outline-none focus:border-[#8B5CF6] focus:shadow-[4px_4px_0px_0px_#8B5CF6] transition-all duration-200 ${inputClassName}`}
        {...props}
      />
    </div>
  );
};

export default InputField;