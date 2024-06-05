import { useRouter } from 'next/router'

type Items = 'wood_plank' | 'log' | 'iron_sword' | 'iron_ingot' | 'coal' | 'iron_ore' // Enum
interface GameProps {
    id: Items,
    imageUrl: string,
    name: string,
    value: number,
    inputIds: Items[]

}

export default function ItemDisplay({ item }: { item: GameProps }) {
    const router = useRouter()
    const selectable = item.inputIds.length > 0

    const onSelectItem = () => router.push(`/game/${item.name}`)
    return (
        <ul>
            <li>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {selectable && <><button onClick={onSelectItem}>Select</button></>}
                    <img src={item.imageUrl} alt={item.name} style={{ width: '3rem' }} />
                    <p>{item.name}</p>
                    -
                    <p>{item.value}</p>
                </div>
            </li>
        </ul>
    )


}
