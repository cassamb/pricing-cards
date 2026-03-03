import Card from "./Card";
import Badge from "./Badge";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import tiers from "../data/tiers.json";

const Cards = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => {
            return (
                <Card key={tier.id} popular={tier.popular}>
                    {tier.popular && <Badge/>}

                    <CardHeader name={tier.name} icon={tier.icon} price={tier.price} desc={tier.description}/>
                    <CardBody features={tier.features}/>
                    <CardFooter popular={tier.popular}/>
                </Card>
            )
        })}
    </div>
  )
}

export default Cards