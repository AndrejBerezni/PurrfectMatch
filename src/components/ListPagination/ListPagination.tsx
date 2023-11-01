import { Pagination } from 'react-bootstrap'
import './listpagination.css'

interface IListPaginationProps {
  currentPage: number
  totalPages: number
  paginate: (pageNumber: number) => void
}

export default function ListPagination({
  currentPage,
  totalPages,
  paginate,
}: Readonly<IListPaginationProps>) {
  return (
    <>
      {totalPages > 1 && (
        <Pagination>
          <Pagination.First onClick={() => paginate(1)} />
          <Pagination.Prev
            onClick={() => {
              if (currentPage > 1) {
                paginate(currentPage - 1)
              }
            }}
          />
          <Pagination.Item active>{currentPage}</Pagination.Item>
          <Pagination.Next
            onClick={() => {
              if (currentPage < totalPages) {
                paginate(currentPage + 1)
              }
            }}
          />
          <Pagination.Last onClick={() => paginate(totalPages)} />
        </Pagination>
      )}
    </>
  )
}
