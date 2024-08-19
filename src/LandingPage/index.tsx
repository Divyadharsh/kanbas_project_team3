
//import { Route, Routes, Navigate } from "react-router";
import { FaHryvnia } from "react-icons/fa";
import TOC from "./TOC";
//import { Provider } from "react-redux";



export default function LandingPage() {
    return (

        <div id="wd-labs" className="container mt-2">
            <h1>CS5610 Web Development</h1>
            <hr />
            <h2>Team Project: develop a Quizzes section </h2>

            <br />

            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a id="wd-k" href="#/Kanbas" className="nav-link">
                        <h4>Kanbas</h4>
                    </a>
                </li>
                <li className="nav-item">
                    <a id="wd-k" href="https://github.com/Divyadharsh/kanbas_project_team3_frontend.git" className="nav-link">
                        <h4> Frontend GitHub </h4>
                    </a>
                </li>

                <li className="nav-item">
                    <a id="wd-k" href="https://github.com/Divyadharsh/kanbas_project_team3_backend.git" className="nav-link">
                        <h4> Backend GitHub </h4>
                    </a>
                </li>

            </ul>
            <br />
            <h3>Team Member:
                <br />

                <ul className="list-group border-0">
                    <li className="list-group-item border-0 ">Divyadharshini Muruganandham </li>
                    <li className="list-group-item border-0">Kaumudi Rajesh Rawal</li>
                    <li className="list-group-item border-0">Lindsey Sutermeister</li>
                    <li className="list-group-item border-0">Thomas Simmons</li>
                    <li className="list-group-item border-0">Man Chen</li>

                </ul>
            </h3>


        </div>

    );
}

