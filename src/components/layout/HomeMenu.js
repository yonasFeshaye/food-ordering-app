
import Panini from "../menu/Panini";
import Breakfast from "../menu/Breakfast";
import Pizza from "../menu/Pizza";
import WrapsSalad from "../menu/Wraps-Salad";
import Drinks from "../menu/Drinks";
import Smoothies from "../menu/Smoothies";

export default function HomeMenu() {
    return (
      <>
        <Breakfast /> 
        <Panini />
        <Pizza /> 
        <WrapsSalad />
        <Drinks />
        <Smoothies /> 
        </>
    )
}