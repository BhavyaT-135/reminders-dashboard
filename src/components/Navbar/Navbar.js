import React from "react";
import './navbar.css';
import Dashboard from '../../images/Dashboard.svg';
import Group from '../../images/Group.svg';
import Tactics from '../../images/TacticsVault.svg';
import Schedule from '../../images/Schedule.svg';
import Training from '../../images/Training.svg';
import Metrics from '../../images/Metrics.svg';
import Customizations from '../../images/Customizations.svg';


const Navbar = () => {
    return (
        <div className="nv">
            <nav class="nav flex-column">
                <div className="upper-menu">
                    <div className="logo">
                        Logo
                    </div>
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src={Dashboard} alt="" width="30" height="24" class="d-inline-block align-text-top" />
                            Dashboard
                        </a>
                    </div>

                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src={Tactics} alt="" width="30" height="24" class="d-inline-block align-text-top" />
                            Tactics Vault
                        </a>
                    </div>

                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src={Group} alt="" width="30" height="24" class="d-inline-block align-text-top" />
                            Teams
                        </a>
                    </div>

                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src={Schedule} alt="" width="30" height="24" class="d-inline-block align-text-top" />
                            Schedule Generator
                        </a>
                    </div>

                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src={Training} alt="" width="30" height="24" class="d-inline-block align-text-top" />
                            Weekly Training Plans
                        </a>
                    </div>

                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src={Metrics} alt="" width="30" height="24" class="d-inline-block align-text-top" />
                            Team Metrics
                        </a>
                    </div>

                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src={Customizations} alt="" width="30" height="24" class="d-inline-block align-text-top" />
                            Customizations
                        </a>
                    </div>
                </div>

                <div className="lower-menu">
                    <div class="dropup">
                        <h4>Select Your Team</h4>
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Team Name
                        </button>
                        <ul class="dropdown-menu">
                            {/*<!-- Dropdown menu links -->*/}
                        </ul>
                    </div>
                </div>

            </nav>

        </div>
    )
}

export default Navbar;