import React from "react";
import { FaFileImport, FaFileExport, FaCog } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { useParams } from "react-router";
import { assignments, enrollments, users, grades } from "../../Database";

export default function Grades() {
  const { cid } = useParams();
  const courseAssignments = assignments.filter(a => a.course === cid);
  const courseEnrollments = enrollments.filter(e => e.course === cid);
  return (
    <div className="container">
      <button className="btn btn-secondary float-end">
        <FaCog className="me-2 fs-5" />
      </button>
      <button className="btn btn-secondary float-end mx-2 dropdown-toggle">
        <FaFileExport className="me-2 fs-5" />
        Export
      </button>
      <button className="btn btn-secondary float-end">
        <FaFileImport className="me-2 fs-5" />
        Import
      </button>
      <br />
      <div className="row mt-4">
        <div className="col">
          <label htmlFor="wd-student-names" className="form-label"><b>Student Names</b></label>
          <select id="wd-student-names" className="form-select" style={{backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg)", backgroundSize: "13px", backgroundRepeat: "no-repeat", backgroundPosition: "10px center", "paddingLeft": "30px"}}></select>
        </div>
        <div className="col">
          <label htmlFor="wd-assignment-names" className="form-label"><b>Assignment Names</b></label>
          <select id="wd-assignment-names" className="form-select" style={{backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg)", backgroundSize: "13px", backgroundRepeat: "no-repeat", backgroundPosition: "10px center", "paddingLeft": "30px"}}></select>
        </div>
      </div>
      <div className="row my-2 row-cols-auto">
        <button className="btn btn-secondary">
          <CiFilter className="me-2" />
          Apply Filters
        </button>
      </div>
      <div className="row my-2">
        <div className="table-responsive">
          <table className="table table-striped table-bordered align-middle">
            <thead>
              <tr>
                <th scope="col" className="fs-6 fw-normal" style={{width: "20%"}}>Student Name</th>
                {courseAssignments.map((assignment: any) => (
                  <th scope="col" className="fs-6 fw-normal text-center" style={{width: "20%"}}>
                    {assignment._id} - {assignment.title}<br />
                    Out of {assignment.points}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {courseEnrollments.map(enrollment => {
                let user = users.find((u: any) => u._id === enrollment.user) as any
                return (
                  <tr>
                    <th scope="row" className="text-danger">{user?.firstName} {user?.lastName}</th>
                    {courseAssignments.map((assignment: any) => {
                      let grade = grades.find(g => g.student === user?._id && g.assignment === assignment._id)
                      return (<td className="text-center">{grade?.grade}</td>);
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}