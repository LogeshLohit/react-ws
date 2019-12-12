import React, { useContext } from "react";
import IssueRows from "./IssueRow";
import IssueContext from "./IssueContext";
import { Link } from 'react-router-dom'
import AddIssue from "./AddIssue";
function IssuesTable() {
    const context = useContext(IssueContext);

    return (
        <React.Fragment>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th> Issue </th>
                        <th> Level </th>
                        <th> Status </th>
                        <th> Created time</th>
                        <th> Edit Issue</th>
                        <th> Delete </th>
                    </tr>
                </thead>
                <tbody>
                    <IssueRows />
                </tbody>
            </table>
            <button className="btn btn-warning" onClick={() => context.toggle()}>Add new issue</button>

            {console.log(context.toggleFlag)}
            <Link to="/">Go to Home</Link>
        </React.Fragment>
    );
}
export default IssuesTable;
