import React, { useContext } from "react";
import { IssueContext } from "./IssueContext";
import { Link } from "react-router-dom";
function IssueRow(props) {
    const context = useContext(IssueContext);
    return (
        context.issues.map(
            issue => (<tr key={issue.id}>
                <td> {issue.issueDescription} </td>
                <td> {issue.issueLevel} </td>
                <td> {issue.issueStatus}</td>
                <td> {issue.createdDate}</td>
                <td> <Link to={`/edit/${issue.id}`}><button className="btn btn-primary">Edit</button></Link></td>
                <td> <button className="btn btn-danger"
                    onClick={() => context.deleteIssue(issue)}>Delete</button> </td>
            </tr>
            )
        )
    )
}
export default IssueRow;
