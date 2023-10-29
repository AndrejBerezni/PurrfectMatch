import { Badge, Stack } from 'react-bootstrap'
import { ICat } from '../../../compiler/interfaces'
import { catSpecialTraits } from '../../../data/catSpecialTraits'

interface ISpecialTraitsSectionProps {
  cat: ICat
}

export default function SpecialTraitsSection({
  cat,
}: Readonly<ISpecialTraitsSectionProps>) {
  return (
    <Stack direction="horizontal" gap={2}>
      {Object.keys(catSpecialTraits).map((key) => {
        if (cat[key as keyof ICat] === 1) {
          return (
            <Badge key={`${key}-${cat.id}`} className="special-trait-badge">
              {catSpecialTraits[key as keyof typeof catSpecialTraits]}
            </Badge>
          )
        }
        return null
      })}
    </Stack>
  )
}
