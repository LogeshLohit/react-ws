import React, { useState, useEffect, useContext } from 'react'
import { Link , useHistory} from 'react-router-dom'
import IssueContext from './IssueContext';
const EditIssue = (props) => {
    const { id } = props.match.params;
    const [editIssue, setEditIssue] = useState({ id: id, issueDescription: "", issueLevel: "", issueStatus: "", createdDate: "" });
    //id: id, issueDescription: "", issueStatus: "", createdDate: ""
    const context = useContext(IssueContext);
    useEffect(() => {
        setEditIssue(context.getIssueById(id))
    }, [id]);
    const availableLevels = ['MINOR', 'MAJOR', 'CRITICAL'];
    const availableStatus = ['OPEN', 'CLOSED', 'WORK IN PROGRESS'];
    const history = useHistory();
    const handleEditIssueSubmit = () =>{
        context.editIssue(editIssue)
        history.push("/")
    }
    return (
        <div>
            {/* {id}{editIssue.issueDescription}{JSON.stringify(editIssue)} */}
            <br></br>
            <h3>Update the issue here</h3>
            Issue Description : <input type="text" name="description"
                value={editIssue.issueDescription}
                onChange={(e) => { setEditIssue({ ...editIssue, issueDescription: e.target.value }) }} />
            <br></br>
            Issue Level :
            <select value={editIssue.issueLevel}
                onChange={e => { setEditIssue({ ...editIssue, issueLevel: e.target.value }) }}>
                {availableLevels.map(level => (<option value={level} key={level}>{level}</option>))}
            </select>
            <br></br>
            Issue Status :
            <select value={editIssue.issueStatus}
                onChange={e => { setEditIssue({ ...editIssue, issueStatus: e.target.value }) }}>
                {availableStatus.map(status => (<option value={status} key={status}>{status}</option>))}
            </select>
            <button onClick={() => handleEditIssueSubmit(editIssue)}>Update Issue</button>
            <Link to="/"><button className="btn btn-outline-primary">Back</button></Link>
        </div>
    )
}

export default EditIssue
