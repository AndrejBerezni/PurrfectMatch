import { ICat } from '../../compiler/interfaces'
import { catCharacteristics } from '../../data/catCharacteristics'
import CharacterBar from '../CharacterBar/CharacterBar'

interface ICharacterSectionProps {
  cat: ICat
}

export default function CharacterSection({
  cat,
}: Readonly<ICharacterSectionProps>) {
  return (
    <>
      {Object.keys(catCharacteristics).map((key) => (
        <CharacterBar
          name={catCharacteristics[key as keyof typeof catCharacteristics]}
          level={Number(cat[key as keyof ICat])}
          key={key}
        />
      ))}
    </>
  )
}
