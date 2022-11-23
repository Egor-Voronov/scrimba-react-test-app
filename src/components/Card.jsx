import marker from '../assets/marker.svg'

export function Card (props) {
    return (
        <div className="cardWrap">
            <div className="cardLeftSide">
                <img src={`${props.imageUrl}`} alt="card img" className="cardImg" />
            </div>
            <div className="carRightSide">
                <div className="location">
                    <div className="country">
                        <img src={marker} className="marker" />
                        <h2 className="h2">{props.location}</h2>
                    </div>
                    <a className="mapHref" href={`${props.googleMapsUrl}`}>visit on Google maps</a>
                </div>
            </div>
        </div>
    )
}