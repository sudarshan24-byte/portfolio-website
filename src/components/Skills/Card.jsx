import React from 'react'

const Card = ({ skill, color, bordercolor, icon, iconcolor }) => {
    return (
        <div
            className={bordercolor ? `border ${bordercolor} bg-secondary px-2 py-1 rounded-md ${iconcolor} flex items-center gap-2` : `bg-secondary px-2 py-1 rounded-md ${iconcolor} flex items-center gap-2`}>
            {icon}
            <div className={color}> {skill} </div>
        </div>

    )
}

export default Card