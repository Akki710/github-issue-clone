import React from 'react'

const ListHeader = () => {
    return (
        <div className="listHeader-container">
            <div className="block">
                <select name="">
                    <option value="" selected> Author </option>
                </select>
            </div>
            <div className="block">
                <select name="" >
                    <option value="" selected> Label </option>
                </select>
            </div>
            <div className="block">
                <select name="" >
                    <option value="" selected> Projects </option>
                </select>
            </div>
            <div className="block">
                <select name="" >
                    <option value="" selected> Milestones </option>
                </select>
            </div>
            <div className="block">
                <select name="" >
                    <option value="" selected> Asignee </option>
                </select>
            </div>
            <div className="block">
                <select name="" >
                    <option value="" selected> Sort </option>
                </select>
            </div>
        </div>
    )
}

export default ListHeader
