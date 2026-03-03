import { FaRocket, FaBuilding, FaGem} from "react-icons/fa";

const CardHeader = ({name, icon, price, desc}) => {
    let iconTemplate;

    if (icon == "FaRocket") iconTemplate = <FaRocket className="text-2xl text-primary"></FaRocket>;
    else if (icon == "FaBuilding") iconTemplate = <FaBuilding className="text-2xl text-primary"></FaBuilding>;
    else iconTemplate = <FaGem className="text-2xl text-primary"></FaGem>;

  return (
    <header className="text-center p-7 border-b border-white/10">
        <div className="w-16 h-16 mx-auto mb-5 bg-linear-to-br from-teal-900 to-teal-950 rounded-4xl flex items-center justify-center">
        {iconTemplate}
        </div>
        <h3 className="text-2xl font-semibold mb-3.5">{name}</h3>
        <p className="mb-4">
            <span className="text-2xl text-primary align-top mr-1">$</span>
            <span className="text-5xl text-primary font-bold mr-0.5">{price}</span>
            <span className="text-lg text-gray-400">/month</span>
        </p>
        <p className="text-sm lg:text-base text-gray-400">{desc}</p>
    </header>
  )
}

export default CardHeader