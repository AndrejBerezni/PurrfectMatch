import { Badge, Stack, Row } from 'react-bootstrap'
import { ICat } from '../../../compiler/interfaces'
import { catSpecialTraits } from '../../../data/catSpecialTraits'

interface ISpecialTraitsSectionProps {
  cat: ICat
}

export default function SpecialTraitsSection({
  cat,
}: Readonly<ISpecialTraitsSectionProps>) {
  return (
    <Row className="mb-3">
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
    </Row>
  )
}
