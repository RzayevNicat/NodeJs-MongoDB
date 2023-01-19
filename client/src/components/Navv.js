import React from 'react'
import { Link } from 'react-router-dom'
import { useDetails } from '../context/Contextt'
function Navv() {
    const { details, setDetail } = useDetails();
    return (
        <div className='nav'>
            <h3>Notary</h3>
            <div>
                <Link className='link' to={'/'}>Home</Link>
                <Link className='link' to={'create'}>ADD</Link>
                <input placeholder='search' className='inp' value={details} onChange={(e) => setDetail(e.target.value)} />


            </div>
        </div>
    )
}

export default Navv
