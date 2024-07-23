
const Dots = () => {
  return (
    <div className="flex justify-center items-center gap-x-1">
      <div className="h-1 w-1 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-1 w-1 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-1 w-1 bg-white rounded-full animate-bounce"></div>
    </div>
  )
}

export default Dots