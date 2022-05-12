import { MdDelete } from 'react-icons/md';
import {CgDetailsMore} from 'react-icons/cg'
import {AiFillEdit} from 'react-icons/ai'
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
// const { Link } = ReactRouterDOM
// import {ToyDetails} from '../cmp/toy-details.jsx'
// const {link} = ReactRouterDom

export function ToyPreview({ toy, onRemoveToy }) {


    function stockStatus(toy) {
        if (toy.inStock) return 'In Stock!'
        else
            return 'Out of Stock'

    }



    return (
        <section className="toy-preview">
            <h3>{toy.name}</h3>
            <h4>Price:{toy.price}</h4>
            {/* <h5>{stockStatus(toy)}</h5> */}
            <div className="ribbon"><span>{stockStatus(toy)}</span></div>
            <div className="edit-section">
                <p onClick={(e)=> {{ onRemoveToy(toy._id,e) }}}><MdDelete/></p>
                <Link to={`/toys/edit/${toy._id}`}><span className='edit'><AiFillEdit/></span></Link>
                <Link to={`/toys/${toy._id}`}><span className='detail'><CgDetailsMore/></span></Link>

                {/* <button onClick={() => { onRemoveToy(toy._id) }}><MdDelete/></button> */}
            </div>
        </section>
    )
}
