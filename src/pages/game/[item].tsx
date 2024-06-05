import Image from 'next/image'
import { useRouter } from 'next/router'
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

function calculateTotalCost(input: Items[]) {
    let totalCost = 0;
    input.forEach(item => {
        console.log('item to search', item)
        console.log('gameItemsData', gameItemsData)
        const itemDetails = gameItemsData.find(itemInDb => itemInDb.name.toLowerCase() === item.toLowerCase())
        console.log('item found', itemDetails)
        if (itemDetails) {
            totalCost = totalCost + itemDetails.value
        } else {
            // Throw and error
        }

    })

    return totalCost

}
export default function Item() {
    const router = useRouter()
    const slug = router.query
    const { item } = slug
    const itemDetails = gameItemsData.find(itemInDb => itemInDb.name === item)

    const totalCraftingCost = itemDetails?.inputIds ? calculateTotalCost(itemDetails?.inputIds) : 'Unknowm'

    if (!itemDetails) {
        return ("item not found")
    }

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <img src={itemDetails.imageUrl} alt={itemDetails.name} style={{ width: '3rem' }} />
                <p>{itemDetails.name}</p>
                -
                <p>Total crafting cost:</p>
                <p>{totalCraftingCost}</p>
            </div>


        </div>
    )
}
