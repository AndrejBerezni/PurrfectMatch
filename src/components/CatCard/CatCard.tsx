import { ICat } from '../../compiler/interfaces'

interface ICatCardProps {
  cat: ICat
}

export default function CatCard({ cat }: Readonly<ICatCardProps>) {
  return (
    <>
      <h1>{cat.name}</h1>
      <h2>{cat.origin}</h2>
      {cat.image && (
        <img src={cat.image.url} alt="{cat.name}" style={{ width: '100px' }} />
      )}
    </>
  )
}
