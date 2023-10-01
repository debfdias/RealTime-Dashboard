const InputText = ({ label, name, type, register, error }: any) => {
  return (
    <div className="mb-4">
      <div className="mb-2 text-sm font-medium text-gray-700 tracking-wide">
        {label}
      </div>

      <input
        id={name}
        name={name}
        type={type}
        {...register(name)}
        placeholder={label}
        className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 text-gray-700 bg-gray-50"
      />
      <p className="mt-2 text-xs text-red-500 font-medium">{error}</p>
    </div>
  )
}

export default InputText
