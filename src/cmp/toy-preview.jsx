import { MdDelete } from 'react-icons/md';
import { CgDetailsMore } from 'react-icons/cg'
import { AiFillEdit } from 'react-icons/ai'
import { Link } from "react-router-dom";

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
                <Link to={`/toys/edit/${toy._id}`}><p className='edit'><AiFillEdit /></p></Link>
                <p onClick={(e) => { { onRemoveToy(toy._id, e) } }}><MdDelete /></p>
                <Link to={`/toys/${toy._id}`}><span className='detail'><CgDetailsMore /></span></Link>

                {/* <button onClick={() => { onRemoveToy(toy._id) }}><MdDelete/></button> */}
            </div>
        </section>
    )
}
