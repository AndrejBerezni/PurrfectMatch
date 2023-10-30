import { ICat } from '../compiler/interfaces'

export default function extractCharacteristics(cats: ICat[]) {
  const characteristicsArray: string[] = []
  cats.forEach((cat) => {
    const catCharacteristics = cat.temperament.split(', ')
    catCharacteristics.forEach((char: string) => {
      const capitalizedChar = char.charAt(0).toUpperCase() + char.slice(1)
      if (!characteristicsArray.includes(capitalizedChar)) {
        characteristicsArray.push(capitalizedChar)
      }
    })
  })
  return characteristicsArray.sort()
}
