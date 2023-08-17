import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

export default function Question({title, info}) {

    // console.log(title)

    const [showInfo, setShowInfo] = useState(false)

    return (
        <article className='shadow p-3 my-3'>
            <div className='d-flex align-items-center justify-content-between'>
                <h5>{title}</h5>
                <button className='btn btn-sm btn-outline-secondary d-flex align-items-center justify-content-center'
                    onClick={() => setShowInfo(!showInfo)}
                >
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </div>
            {showInfo && <p>{info}</p>}

        </article>
    )
}