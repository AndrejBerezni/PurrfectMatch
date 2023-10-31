import CharacterBar from './CharacterBar/CharacterBar'
import { ICat } from '../../../compiler/interfaces'
import { catCharacteristics } from '../../../data/catCharacteristics'
import { Row, Col } from 'react-bootstrap'

interface ICharacterSectionProps {
  cat: ICat
}

export default function CharacterSection({
  cat,
}: Readonly<ICharacterSectionProps>) {
  return (
    <Row>
      <Col className="mb-3">
        {Object.keys(catCharacteristics).map((key) => (
          <CharacterBar
            name={catCharacteristics[key as keyof typeof catCharacteristics]}
            level={Number(cat[key as keyof ICat])}
            key={`${key}-${cat.id}`}
          />
        ))}
      </Col>
    </Row>
  )
}
