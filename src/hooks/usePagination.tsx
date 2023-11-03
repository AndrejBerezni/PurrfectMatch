import { useState } from 'react'
import { ICat } from '../compiler/interfaces'

export function usePagination(allItems: ICat[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = allItems?.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(allItems?.length / itemsPerPage)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo(0, 0)
  }

  return {
    currentPage,
    setCurrentPage,
    currentItems,
    totalPages,
    paginate,
  }
}
