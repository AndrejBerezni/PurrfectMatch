import { ICat } from '../compiler/interfaces'
import { catSpecialTraits } from '../data/catSpecialTraits'

export const applyFilterToList = (list: ICat[], filters: string[]) => {
  return list.filter((cat) => {
    return filters.every((str) => {
      // Check if temperament property includes the filter
      if (
        cat.temperament.includes(str) ||
        cat.temperament.includes(str.toLowerCase())
      ) {
        return true
      }
      // Check if filter corresponds to a special trait and that trait has a value of 1 in the cat
      if (Object.values(catSpecialTraits).includes(str)) {
        const traitKey = Object.keys(catSpecialTraits).find(
          (key) =>
            catSpecialTraits[key as keyof typeof catSpecialTraits] === str
        )
        if (traitKey && cat[traitKey as keyof typeof cat] === 1) {
          return true
        }
      }
      return false
    })
  })
}
