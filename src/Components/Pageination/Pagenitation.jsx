import React from 'react'

const Pagenitation = (props) => {

  return (
    <nav aria-label="Page navigation example mt-5">
        <ul className="pagination justify-content-between mt-5">
            <li className="page-item ">
            <a className="page-link"onClick={props.prev} >Previous</a>
            </li>

            <li className="page-item" >
            <a className="page-link"  onClick={props.next}>Next</a>
            </li>
        </ul>
    </nav>
  )
}

export default Pagenitation