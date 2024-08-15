import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AssignmentsControls({cid}: {cid: string}) {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <div className="row">
        <div className="col">
          <div id="wd-search-assignment">
            <input id="wd-search-assignment-input" type="text" placeholder="Search..." className="form-control" style={{backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg)", backgroundSize: "13px", backgroundRepeat: "no-repeat", backgroundPosition: "10px center", "paddingLeft": "30px"}} />
          </div>
        </div>
        <div className="col">
          <Link id="wd-add-assignment-btn" to={`/Kanbas/Courses/${cid}/Assignments/new`} className="btn btn-lg btn-danger me-1 float-end">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
          </Link>
          <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group
          </button>
        </div>
      </div>
    </div>
  )
}