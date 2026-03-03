import { FaQuoteLeft } from "react-icons/fa6"

const Testimonial = () => {
  return (
    <section className="rounded-xl relative shadow bg-gray-800 mt-14 p-8 mx-auto max-w-2xl">
      <FaQuoteLeft className="absolute text-primary/30 text-2xl top-6 left-3"></FaQuoteLeft>
      <p className="text-sm sm:text-base">Switching to this service was one of the best decisions we've made. The pricing is transparent and the features are exactly what we needed.</p>
      
      <footer className="flex items-center gap-4 mt-5">
        <img src="https://randomuser.me/api/portraits/women/2.jpg " className="w-12 h-12 rounded-4xl overflow-hidden object-cover border-2 border-primary sm:w-14 sm:h-14" alt="Customer"/>
        <div>
          <h4 className="sm:text-lg font-semibold">Emily Park</h4>
          <p className="text-xs sm:text-base text-primary">Marketing Director</p>
        </div>
      </footer>
    </section>
  )
}

export default Testimonial