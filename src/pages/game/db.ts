type Items = 'wood_plank' | 'log' | 'iron_sword' | 'iron_ingot' | 'coal' | 'iron_ore' // Enum
interface GameProps {
    id: Items,
    imageUrl: string,
    name: string,
    value: number,
    inputIds: Items[]

}
export const gameItemsData: GameProps[] = [{
    "id": "wood_plank",
    "imageUrl": "https://minecraft.wiki/images/Oak_Planks.png",
    "name": "Wooden Plank",
    "value": 5,
    "inputIds": ["log"]
},

{
    "id": "log",
    "imageUrl": "https://minecraft.wiki/images/Oak_Log_%28UD%29_JE5_BE3.png",
    "name": "Log",
    "value": 2,
    "inputIds": []
}
]