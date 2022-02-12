import React from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const SingleIssue = ({issue}) => {
    let sec = <span></span>;
    if(issue.labels[0] && issue.labels[0].name === 'needs triage'){
        sec = <span id="triage">{issue.labels[0].name}</span>
    }else if(issue.labels[0] && issue.labels[0].name === 'issue: proposal'){
        sec = <span id="proposal">{issue.labels[0].name}</span>
    }else if(issue.labels[0]){
        sec = <span id="tag">{issue.labels[0].name}</span>
    } else {
        sec = <span></span>
    }
    
     
    return (
        <div className="single-issue-container"> 
            <div className="issue-heading">
                <div className="main">
                    <ErrorOutlineIcon />
                    <h3 style={{marginLeft: "10px", textOverflow: "ellipsis",
                    overflow: "hidden", maxWidth: "70vw"
                     }}>{ issue.title }</h3>
                    <span>
                        {sec}
                    </span>
                </div>
                <div className="secondary">
                    <span style={{marginRight: "20px", marginLeft: "40px"}}>
                    #{issue.number} 
                    </span>
                    <span>
                        at {issue.created_at} by {issue.user.login}
                    </span>
                </div>
            </div>
            {
                issue.comments!==0 && 
                (<div className="issue-icon">
                    <span>
                        <ChatBubbleOutlineIcon /> 
                        {issue.comments}
                    </span>
                </div>)
            }
        </div>
    )
}

export default SingleIssue
