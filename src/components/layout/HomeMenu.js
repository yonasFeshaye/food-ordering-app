
import Panini from "../menu/Panini";
import Breakfast from "../menu/Breakfast";
import Pizza from "../menu/Pizza";
import WrapsSalad from "../menu/Wraps-Salad";

export default function HomeMenu() {
    return (
      <>
        <Breakfast /> 
        <Panini />
        <Pizza /> 
        <WrapsSalad />
        </>
    )
}