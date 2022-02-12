import React from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckIcon from '@mui/icons-material/Check';
const Count = () => {
    return (
        <div className="count">
            <span style={{marginRight: "15px"}}> 
                <ErrorOutlineIcon />
                <strong> 495 Open </strong>
            </span>
            <span>
                <CheckIcon />
                5,465 Closed
            </span>
        </div>
    )
}

export default Count
