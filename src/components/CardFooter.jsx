const CardFooter = ({popular}) => {
  return (
    <footer className="px-5 pb-6">
        { popular ? (
            <button className="block cursor-pointer w-full p-4 font-semibold text-center text-black animate-pulse bg-primary border-2 border-primary rounded-xl transition-all duration-300 hover:bg-emerald-500 hover:border-emerald-500">Get Started</button>
        ):(
            <button className="block cursor-pointer w-full p-4 font-semibold text-center text-gray-100 bg-gray-100/10 border-2 border-gray-500 rounded-xl transition-all duration-300 hover:border-primary hover:bg-teal-950">Get Started</button>
        ) }
    </footer>
  )
}

export default CardFooter