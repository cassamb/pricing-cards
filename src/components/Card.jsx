const Card = ({children, popular}) => {

  const popularStyle = "border-primary border-2 lg:scale-105";
  
  return (
    <section className={`relative shadow bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 h-full hover:bg-gray-700/60 hover:-translate-y-2 hover:shadow-lg ${popular && popularStyle}`}>{children}</section>
  )
}

export default Card