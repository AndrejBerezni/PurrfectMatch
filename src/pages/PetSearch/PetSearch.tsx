import CatCard from '../../components/CatCard/CatCard'
import useCatList from '../../hooks/useCatList'

export default function PetSearch() {
  const cats = useCatList()
  return (
    <>
      <h1>PetSearch</h1>
      {cats.map((item) => (
        <CatCard cat={item} key={item.id} />
      ))}
    </>
  )
}
