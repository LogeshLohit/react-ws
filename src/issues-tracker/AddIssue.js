import React, { useContext, useState, useEffect } from 'react'
import IssueContext from './IssueContext'

export default function AddIssue() {
    const context = useContext(IssueContext);
    const statusLevels = ["MAJOR", "MINOR", "CRITICAL"];
    const statuses = ["OPEN", "CLOSED", "WORK IN PROGRESS"];
    const newIssue = {
        id: 0,
        issueDescription: "",
        issueStatus: statuses[0],
        issueLevel: statusLevels[1],
        createdDate: "",
        resolvedDate: ""
    }

    const [issue, setNewIssue] = useState(newIssue);

    const submitNewIssue = (issue) => {
        //console.log("Gonnna submit that issue.."+new Date().toLocaleString());
        setNewIssue({ ...issue, createdDate: (new Date().toLocaleString()) })
        //console.log(JSON.stringify(issue))
        context.addIssue(issue);
        setNewIssue(newIssue)
    }
    const handleChange = (event) => {
        // console.log("EVENT CHANGED::::" + event.target.name + " " + event.target.value)
        // console.log(JSON.stringify(issue))
        setNewIssue({ ...issue, [event.target.name]: event.target.value })
    }
    return (
        <div>
            <h3>Please add your <i>issue</i> here!{JSON.stringify(issue)}</h3>
            Enter your issue description here:
            <input type="text" name="issueDescription" value={issue.issueDescription}
                onChange={handleChange} />
            <select type="text" name="issueStatus" value={issue.issueStatus}
                onChange={handleChange} >
                {statuses.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
            <select type="text" name="issueLevel" value={issue.issueLevel}
                onChange={handleChange} >
                {statusLevels.map(i => <option key={i} value={i}>{i}</option>)}
            </select>

            <button type="submit" className="btn btn-primary" onClick={() => submitNewIssue(issue)}>Submit</button>
        </div>
    )
}
