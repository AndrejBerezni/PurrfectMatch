import { ICat } from '../../../compiler/interfaces'

interface IBasicInfoSectionProps {
  cat: ICat
}

export default function BasicInfoSection({
  cat,
}: Readonly<IBasicInfoSectionProps>) {
  return (
    <>
      <h3 className="cat-card-name mb-4 mt-2">{cat.name}</h3>
      <h5>
        <span className="cat-card-prop-name">Origin: </span>
        {cat.origin}
      </h5>
      <h5>
        <span className="cat-card-prop-name">Size: </span>
        {cat.weight.metric} kg
      </h5>
      <h5>
        <span className="cat-card-prop-name">Life Span: </span>
        {cat.life_span} years
      </h5>
      <h5 className="cat-card-props">{cat.temperament}</h5>
    </>
  )
}
