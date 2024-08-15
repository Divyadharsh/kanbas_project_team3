import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addAssignment, updateAssignment } from "./reducer";
import * as client from "./client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const [assignment, setAssignment] = useState({
    title: "New Assignment",
    description: "New Assignment Description",
    points: 100,
    due_date: "2024-01-01",
    available_from: "2024-01-01",
    available_until: "2024-01-01",
    course: cid,
  });
  const fetchAssignment = async () => {
    const asg = await client.getAssignment(aid as string)
    setAssignment(asg);
  }
  const createAssignment = async (assignment: any) => {
    const newAssignment = await client.createAssignment(cid!, assignment);
    dispatch(addAssignment(newAssignment));
  }
  const saveAssignment = async (assignment: any) => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  }
  useEffect(() => {
    if (aid != "new") {
      fetchAssignment();
    }
  }, [])
  return (
    <div id="wd-assignments-editor">
      <div className="container">
      <div className="row my-3">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input id="wd-name" type="text" className="form-control" value={assignment.title} onChange={e => setAssignment({...assignment, title: e.target.value})} />
        </div>
        <div className="row my-3">
          <textarea id="wd-description" className="form-control" rows={10} onChange={e => setAssignment({...assignment, description: e.target.value})}>{assignment.description}</textarea>
        </div>
        <div className="row my-3">
          <div className="col-3">
            <label htmlFor="wd-points" className="col-form-label float-end">Points</label>
          </div>
          <div className="col">
            <input id="wd-points" type="number" className="form-control" value={assignment.points} onChange={e => setAssignment({...assignment, points: +e.target.value})} />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-3">
            <label htmlFor="wd-group" className="col-form-label float-end">Assignment Group</label>
          </div>
          <div className="col">
            <select id="wd-group" className="form-select">
              <option selected value="assignments">
                  ASSIGNMENTS</option>
              <option value="quizzes">
                  QUIZZES</option>
              <option value="exams">
                  EXAMS</option>
              <option value="project">
                  PROJECT</option>
            </select>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-3">
            <label htmlFor="wd-display-grade-as" className="col-form-label float-end">Display Grade as</label>
          </div>
          <div className="col">
            <select id="wd-display-grade-as" className="form-select">
              <option selected value="percentage">Percentage</option>
            </select>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-3">
            <label htmlFor="wd-submission-type" className="col-form-label float-end">Submission Type</label>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <select id="wd-submission-type" className="form-select">
                    <option selected value="online">Online</option>
                  </select>
                </div>
                <div className="row mt-4">
                  <label><b>Online Entry Options: </b></label>
                </div>
                <div className="row my-2">
                  <div className="form-check my-2">
                    <input type="checkbox" name="text-entry" id="wd-text-entry" className="form-check-input" />
                    <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                  </div>
                  <div className="form-check my-2">
                    <input type="checkbox" name="website-url" id="wd-website-url" className="form-check-input" />
                    <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                  </div>
                  <div className="form-check my-2">
                    <input type="checkbox" name="media-recordings" id="wd-media-recordings" className="form-check-input" />
                    <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                  </div>
                  <div className="form-check my-2">
                    <input type="checkbox" name="student-annotation" id="wd-student-annotation" className="form-check-input" />
                    <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                  </div>
                  <div className="form-check my-2">
                    <input type="checkbox" name="file-upload" id="wd-file-upload" className="form-check-input" />
                    <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-3">
            <label htmlFor="wd-assign" className="col-form-label float-end">Assign</label>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <label htmlFor="wd-assign-to" className="form-label"><b>Assign to</b></label>
                  <div className="input-group">
                    <button className="btn btn-outline-secondary">Every one</button>
                    <input id="wd-assign-to" type="text" className="form-control" />
                  </div>
                </div>
                <div className="row mt-4">
                  <label htmlFor="wd-due-date"><b>Due</b></label>
                  <input id="wd-due-date" type="date" className="form-control" value={assignment.due_date} onChange={e => setAssignment({...assignment, due_date: e.target.value})} />
                </div>
                <div className="row my-2">
                  <div className="col">
                    <label htmlFor="wd-available-from"><b>Available from</b></label>
                    <input id="wd-available-from" type="date" className="form-control" value={assignment.available_from} onChange={e => setAssignment({...assignment, available_from: e.target.value})} />
                  </div>
                  <div className="col">
                    <label htmlFor="wd-available-until"><b>Until</b></label>
                    <input id="wd-available-until" type="date" className="form-control" value={assignment.available_until} onChange={e => setAssignment({...assignment, available_until: e.target.value})} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <hr />
        </div>
        <Link key="save" to={`/Kanbas/Courses/${cid}/Assignments/`} className="btn btn-danger float-end ms-2" onClick={() => {
          if (aid !== "new") {
            saveAssignment(assignment)
          } else {
            createAssignment(assignment)
          }
        }}>Save</Link>
        <Link key="cancel" to={`/Kanbas/Courses/${cid}/Assignments/`} className="btn btn-secondary float-end">Cancel</Link>
        </div>
    </div>
  );
}