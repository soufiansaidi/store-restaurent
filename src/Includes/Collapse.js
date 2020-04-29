import React, { useState } from 'react'

import { IoIosArrowDown } from "react-icons/io";

export default function Collapse(title, {children}) {
    const [state, setstate] = useState(true)

    return (
        <div className={ (state) ? 'active collapse-data' : 'collapse-data' }>
            <div className="row">
                <div className="collapse-title" onClick={ () => setstate(!state) }>{ title } <IoIosArrowDown /></div>
            </div>
            <div className="collapse-content">{ children }</div>
        </div>
    )
}
