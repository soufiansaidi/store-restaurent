import React, { useState } from 'react'

import { IoIosArrowDown } from "react-icons/io";

export default function Collapse({children}) {
    const [state, setstate] = useState(false)

    return (
        <div className={ (state) ? 'active collapse-data' : 'collapse-data' }>
            <div className="row">
                <div className="collapse-title" onClick={ () => setstate(!state) }>Beef burgers <IoIosArrowDown /></div>
            </div>
            <div className="collapse-content">{ children }</div>
        </div>
    )
}
