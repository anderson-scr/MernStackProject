import React, { useMemo, useRef } from 'react'
import { columnInfo } from './columns'
import mockData from './data/MOCK_DATA_USERS.json'
import { useTable, useSortBy, usePagination} from 'react-table'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FiUserPlus, FiEdit, FiDelete } from 'react-icons/fi';
import './tableUsersStyle.css'

const TableUsers = () => {
  const columns = useMemo(() => columnInfo, [])
  const data = useMemo(() => mockData, [])

  //criando sua instancia da tabela
  const instanciaTabela = useTable({
    columns: columns,
    data: data
  }, useSortBy, usePagination) 




  // Desestruturar o useTable para pegar as funcoes que vem nele
  const { 
    getTableProps,
    getTableBodyProps,
    headerGroups, //Informacoes do header em forma de array. Por isso usar map
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    gotoPage,
    pageCount,
    state,
    setPageSize,
    prepareRow
  } = instanciaTabela

  const { pageIndex } = state;

  const setModalContent = (evt) => {
    console.log(evt.target)
  }

  return (
    <>
      <table className="table">
        <thead {...getTableProps}>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                <span> {column.isSorted? (column.isSortedDesc? <IoIosArrowDown /> : <IoIosArrowUp />) : ''} </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="table-group-divider" {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(rowCell => {
                  return (
                    <td {...rowCell.getCellProps()}> {
                      rowCell.render('Cell')
                    } </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className='containerPaginationBtns' >
        <nav aria-label="Page navigation example" id="pagination">
          <ul className="pagination">
            <li className="page-item">
              <a className={`page-link ${canPreviousPage? '' : 'disabledPag'}`} href="#" aria-label="Previous" onClick={() => previousPage()} onMouseDown={e => e.preventDefault()}>
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only"> Anterior</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link active" href="#"   onMouseDown={e => e.preventDefault()} disabled={!canPreviousPage} onClick={() => gotoPage(0)}>1</a></li>
            <li className="page-item"><a className="page-link holder">...</a></li>

            <li className="page-item">
              <a className="page-link" href="#" onMouseDown={e => e.preventDefault()} onClick={evt => gotoPage(evt.target.innerText - 1)} >
                {pageIndex+2 > pageCount-3? pageCount-3:pageIndex+2}
              </a>
            </li>

            <li className="page-item">
              <a className="page-link" href="#" onMouseDown={e => e.preventDefault()} onClick={evt => gotoPage(evt.target.innerText - 1)} >
                {pageIndex+3 > pageCount-2? pageCount-2:pageIndex+3}
              </a>
            </li>
            
            <li className="page-item">
              <a className="page-link" href="#" onMouseDown={e => e.preventDefault()} onClick={evt => gotoPage(evt.target.innerText - 1)} >
                {pageIndex+4 > pageCount-1? pageCount-1:pageIndex+4}
              </a>
            </li>

            <li className="page-item">
              <a className="page-link" href="#" onMouseDown={e => e.preventDefault()} onClick={evt => gotoPage(evt.target.innerText - 1)} >
                {pageIndex+5 > pageCount? pageCount:pageIndex+5}
              </a>
            </li>
              
            <li className="page-item">
              <a className={`page-link ${canNextPage? '' : 'disabledPag'}`} href="#" aria-label="Next" onClick={() => nextPage()} onMouseDown={e => e.preventDefault()} disabled={!canNextPage}>
                <span className="sr-only">Proximo </span>
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
        
        <div className='containerBtns' >
          <button type="button" className="btn btn-outline-success btnTable" onClick={(evt) => setModalContent(evt)} >{<FiUserPlus />} Adicionar</button>
          <button type="button" className="btn btn-outline-warning btnTable" onClick={(evt) => setModalContent(evt)} >{<FiEdit />} Editar</button>
          <button type="button" className="btn btn-outline-danger btnTable" onClick={(evt) => setModalContent(evt)} >{<FiDelete />} Deletar</button>
        </div>
      </div>
    </>
  )
}

export default TableUsers;