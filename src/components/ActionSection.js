import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LoyaltyIcon from '@mui/icons-material/Loyalty';

const ActionSection = () => {
    return (
        <div className="action-container">
            <div className="input-container">
                <select name="">
                    <option value=""  selected> Filters </option>
                </select>
                <input type="text" placeholder="🔍 is: issue is: open" />
            </div>
            <div className="labelsandMilestones">
                <span className="parent-a">
                    <span>
                        <LoyaltyIcon />
                    </span>
                    <span>
                        Labels
                    </span>
                    <span className="last">
                        30
                    </span>
                </span>
                <span className="parent-b">
                    <span>
                        <BookmarkBorderIcon />
                    </span>
                    <span>
                        Milestones
                    </span>
                    <span className="last">
                        4
                    </span>
                </span>
            </div>
            <button className="new-issue">
                New Issue
            </button>
        </div>
    )
}

export default ActionSection
