import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as client from "../Courses/client";
import { useSelector } from "react-redux";
import { FaGlasses } from "react-icons/fa";

export default function Dashboard({
    courses, course, setCourse, setCourses, addNewCourse,
    deleteCourse, updateCourse
}: {
    courses: any[]; course: any; setCourse: (course: any) => void; setCourses: (courses: any[]) => void;
    addNewCourse: () => void; deleteCourse: (courseId: string) => void;
    updateCourse: () => void;
}) {
    const fetchCourses = async () => {
        const newCourses = await client.fetchUserCourses();
        setCourses(newCourses);
    };

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

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <div id="wd-dashboard" className="p-4">
            <h1 id="wd-dashboard-title">Dashboard
                <button id="wd-add-quiz-btn" className="btn btn-secondary me-1 float-end " >
                    <FaGlasses className="me-2" />
                    {role} View
                </button>
            </h1>
            <hr />
            {currentUser ? <div>
                    {role == 'Student' ? <h5 className="my-3">Enroll in new courses
                        <Link to="/Kanbas/Courses/enroll" className="btn btn-primary float-end">Enroll</Link>
                    </h5> : null
                    }
                    {role == 'Faculty' ? <h5 className="my-3"> Create A New Course
                        <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={addNewCourse}>
                              Create  
                            </button>
                        <button className="btn btn-warning float-end me-2"
                            onClick={updateCourse} id="wd-update-course-click">
                            Update
                        </button>
                        <br />
                        <br />
                        <input value={course.name} className="form-control mb-2 mt-1" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                        <textarea value={course.description} className="form-control" onChange={(e) => setCourse({ ...course, description: e.target.value })} />
                    </h5> : null
                    }
                </div> : null
            }
      

            <h2 id="wd-dashboard-published"> Courses ({courses.length})</h2>

            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.filter(course => course !== null).map((course) => (
                        <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none" >
                                <div className="card rounded-3 overflow-hidden">
                                    <img src={course.image} height="160" alt={course.name} />
                                    <div className="card-body">
                                        <span className="wd-dashboard-course-link"
                                            style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
                                            {course.name}
                                        </span>
                                        <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                                            {course.description}
                                        </p>
                                        <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>

                                        <button onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }} className="btn btn-danger float-end"
                                            id="wd-delete-course-click">
                                            Delete
                                        </button>
                                        {currentUser ? currentUser.role === "STUDENT" ? null :
                                            <button id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}
                                                className="btn btn-warning me-2 float-end" >
                                                Edit
                                            </button> : null
                                        }
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

