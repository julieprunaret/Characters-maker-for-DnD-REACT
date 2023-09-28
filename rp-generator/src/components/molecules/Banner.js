import dragon from "../../assets/dragon.svg"
import "../../styles/Banner.css"

function Banner () {
    return (
        <header>
            <img src={dragon} alt="dragon" className="dragon"/>
            <h1>Imaginarium</h1>
            <img src={dragon} alt="dragon" className="dragon dragon_right"></img>
        </header>
    )
}

export default Banner;