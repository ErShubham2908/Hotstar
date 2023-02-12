import { useEffect, useState } from "react";
import './Style.css'
import Anu from './image/Anu.jpg'
import Marvel from './image/Avengers.jpg'
import Sport from './image/INDvsAUS.png'
import MM from './image/MM.jpg'
import MSD from './image/MSD.jpg'

const Slider = () => {
    const [index, setIndex] = useState(0);
    const [allimg] = useState([Anu, Marvel, Sport, MM, MSD])
    const [allName] = useState(["Anupama", "Avenger: End Game", "IND vs AUS", "Mission Mangle", "M S Dhoni" ])
    const [allText] = useState([
        "Despite the many challenges thrown her way, Anupama begins a new chapter of her life post-divorce. Head help always high, what's wating for her next?",
        "After the devastating events of the infinity War, the Avengers assemble once more to reverse Thano's actions and restore balance to the universe.",
        "Watch replay of Day 3 from the first mastercard text series India vs Australia 2023",
        "Based on the true story of india's finest scientists who rose above hardships and failures to make us the country to react Mars in its first attempt.",
        "A tell-all tale about the life and times of indian cricketer mahendra Singh Dhoni, mapping his journey from a ticket collector to a celebrated sportman."
    ])
    useEffect(() => {
        setInterval(() => {
            setIndex(index => index < 4 ? index + 1 : 0)
        }, 8000);
    }, [allimg])
    
    // console.log(index)
    return(
        <div className="parent_class">
            <div className="text_slider">
                <span className="text">{allName[index]}</span>
                <span className="description">{allText[index]}</span>
            </div>
            <img src={allimg[index]} className="img_slider" alt="Not Found" />
        </div>  
    )
}

export default Slider;