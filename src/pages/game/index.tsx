import Image from 'next/image'
import ItemDisplay from './_components/ItemDisplay'
import { gameItemsData } from './db'

type Items = 'wood_plank' | 'log' | 'iron_sword' | 'iron_ingot' | 'coal' | 'iron_ore' // Enum
interface GameProps {
    id: Items,
    imageUrl: string,
    name: string,
    value: number,
    inputIds: Items[]

}
export default function Game() {

    return (
        gameItemsData.map(item => {
            return <ItemDisplay key={item.id} item={item} />
        })
    )
}
