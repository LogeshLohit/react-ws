import React, { useEffect } from 'react'
import IssueContext from './IssueContext'
import { issues as ISSUES } from './IssuesDataSource'
import EditIssue from './EditIssue';
import AddIssue from './AddIssue';

export default function IssueProvider(props) {
    const [issues, setIssue] = React.useState(ISSUES);
    const [newIssue, setNewIssue] = React.useState({
        id: 0,
        issueDes: "",
        issueStatus: "",
        issueLevel: "",
        createdDate: "",
        resolvedDate: ""
    })
    const [toggle, toggleFrame] = React.useState(false);

    useEffect(() => {
        console.log("use effect caLL:" + JSON.stringify(issues))
        //setIssue(issues);
        return () => {

        };
    }, [issues])

    //  useEffect(() => {
    //     console.log("showframe change.................")
    //     toggleFrame(!showAddIssueFrameFlag);
    //     return () => {

    //     };
    // }, [showAddIssueFrameFlag])
    const editIssue = (issue) => {
        console.log("Edit issue called ...." + JSON.stringify(issue))
        //setIssue([issue, ...issues.filter(i => i.id != issue.id)])
        setIssue(issues => {
            const newIssues = [];
            for (let i = 0; i < issues.length; i++) {
                if (issues[i].id == issue.id) {
                    newIssues.push(issue)
                } else newIssues.push(issues[i])
            }
            return newIssues;
        })
        console.log("sort by name: " + issues.sort(i => issue.issueStatus))
        console.log("after updating the issues:" + JSON.stringify(issues))
    }
    const deleteIssue = (issue) => {
        console.log("Delete issue called.. " + JSON.stringify(issue.issueId));
        setIssue([...issues.filter(i => i.id !== issue.id)])
        console.log("deleted.." + issues.length)
    }
    const addIssue = (issue) => {
        console.log("Add issue called..." + JSON.stringify(issue))
        setNewIssue();
        setIssue([{ ...issue, id: issues.length + 1, createdDate: new Date().toLocaleString() }, ...issues])
        //toggleFrame(!showAddIssueFrameFlag);
    }
    const getIssueById = (issueId) => {
        console.log(issues.find(issue => issue.id == issueId))
        return issues.find(issue => issue.id == issueId);
    }
    // const showAddIssueFrame = () => {
    //     console.log("before calling ..." + showAddIssueFrameFlag)
    //     toggleFrame(!showAddIssueFrameFlag);
    //     console.log("after calling...." + showAddIssueFrameFlag)
    // }
    const toggleFlag = () => {
        console.log('called...toggle value...' + toggle)
        toggleFrame(!toggle)
    }
    return (
        <div>

            {/* {console.log("new issue:" + JSON.stringify(newIssue))}
            {console.log("render" + JSON.stringify(issues))} */}
            <IssueContext.Provider value={{
                issues: issues, editIssue: editIssue, deleteIssue: deleteIssue,
                addIssue: addIssue, getIssueById: getIssueById, toggle: toggleFlag
            }}>
                {props.children}
                {toggle && <AddIssue></AddIssue>}
            </IssueContext.Provider>
        </div>
    )
}
