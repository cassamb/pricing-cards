import { FaCheck, FaTimes } from "react-icons/fa"

const CardBody = ({features}) => {

    const listItems = features.map(feature => {
        if (feature.available) return (<li key={feature.id}><FaCheck className="inline mr-2 text-emerald-400"/>{feature.description}</li>)
        else return (<li key={feature.id} className="text-gray-400/70"><FaTimes className="inline mr-2 text-red-500"/>{feature.description}</li>)
    });

  return (
    <ul className="flex flex-col p-5 gap-4">
        {listItems}
    </ul>
  )
}

export default CardBody