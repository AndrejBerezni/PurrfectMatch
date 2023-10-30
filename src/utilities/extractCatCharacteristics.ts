import { ICat } from '../compiler/interfaces'

export default function extractCharacteristics(cats: ICat[]) {
  const characteristicsArray: string[] = []
  cats.forEach((cat) => {
    const catCharacteristics = cat.temperament.split(', ')
    catCharacteristics.forEach((char: string) => {
      if (!characteristicsArray.includes(char.toLowerCase())) {
        characteristicsArray.push(char.toLowerCase())
      }
    })
  })
  return characteristicsArray.sort()
}
