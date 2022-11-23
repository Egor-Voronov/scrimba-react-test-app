import {Card} from './Card'
import Data from './Data'

export function CardsWrapper () {
    const cards = Data.map(item => {
        return (
            <Card 
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <>
            {cards}
        </>
    )
}