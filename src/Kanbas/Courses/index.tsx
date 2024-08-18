import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import Piazza from "./Piazza";
import Zoom from "./Zoom";
import Quizzes from "./Quizzes";
import { FaAlignJustify } from "react-icons/fa6";
import PeopleTable from "./People/Table";
import QuizEditor from "./Quizzes/QuizEditor";
import QuizDetailScreen from "./Quizzes/QuizDetailScreen";
import QuizTake from "./Quizzes/QuizTake";
import QuestionsEditor from "./Quizzes/QuizEditor/QuestionsEditor";
import { FaGlasses } from "react-icons/fa";
import { useSelector } from "react-redux";


export default function Courses({ courses }: { courses: any[] }) {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    function camelize(str: String) {
        if (str === "TA") {
            return str
        }
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toUpperCase() : word.toLowerCase();
        }).replace(/\s+/g, '');
    }

    const role = camelize(currentUser.role)


    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />

                {course && course.name}  &gt; {pathname.split("/")[4]}
                <button id="wd-add-quiz-btn" className="btn btn-secondary me-1 float-end " >
                    <FaGlasses className="me-2" />
                    {role} View
                </button>
            </h2>
            <hr/>

            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CoursesNavigation />
                </div>
                <div className="flex-fill">


                    <Routes>
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Piazza" element={<Piazza />} />
                        <Route path="Zoom" element={<Zoom />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="Quizzes" element={<Quizzes />} />
                        <Route path="Quizzes/:qid/edit" element={<QuizEditor />} />
                        <Route path="Quizzes/:qid" element={<QuizDetailScreen />} />
                        <Route path="Quizzes/:qid/take/*" element={<QuizTake />} />
                        <Route path="Grades" element={<Grades />} />
                        <Route path="People" element={<PeopleTable />} />
                        <Route path="People/:uid" element={<PeopleTable />} />
                        <Route path="Setting" element={<Grades />} />

                    </Routes>
                </div>
            </div>

        </div>


    );
}
