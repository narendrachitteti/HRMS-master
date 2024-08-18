import { useState } from 'react';
import './EmployeeDetails.scss';
import Experience from './Experience.jsx';
import Education from './Education.jsx';
import Documents from './Documents.jsx';
import { IoMdCloseCircleOutline } from "react-icons/io";
// import Img_user from '../../../assets/user.png'
import { MdWorkHistory } from "react-icons/md";
import { RxReload } from "react-icons/rx";
import { BiEditAlt } from "react-icons/bi";

import { MdDeleteOutline } from "react-icons/md";

const EmployeeDetails = () => {
    const [activeTab, setActiveTab] = useState('experience');

    const renderContent = () => {
        switch (activeTab) {
            case 'experience':
                return <Experience />;
            case 'education':
                return <Education />;
            case 'documents':
                return <Documents />;
            default:
                return <Experience />;
        }
    };


    return (
        <div className="profile-page">
            <div className="details">
                <div className="title_top">
                    <h2>Employee Details</h2>
                    <div className='close_btn'><IoMdCloseCircleOutline /></div>
                </div>
                <div className="profile_card">
                    <div className="img_card">
                        <div className="progress-circle" >
                            <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="" />
                        </div>
                        <div className="about_user">
                            <h3>Akash Shinde</h3>
                            <p>Web Developer / Full-Time</p>
                            <div><h4></h4> <h5>Active</h5></div>
                        </div>
                    </div>
                    <div className="action_card">
                        <div><RxReload/></div>
                        <div><BiEditAlt /></div>
                        <div><span><MdDeleteOutline/></span>Delete</div>
                    </div>
                </div>
                <div className="info-cards">
                    <div className="card">
                        <div className='top_head'> <h3> <span><MdWorkHistory /></span>Work Information</h3></div>
                        <div className='contentInformation'>
                            <div>
                                <h4>Department</h4>
                                <p>Research & Development</p>
                            </div>
                            <div>
                                <h4>Employment Status</h4>
                                <p>Active</p>
                            </div>
                            <div>
                                <h4>Date of Joining</h4>
                                <p>04-Apr-2024</p>
                            </div>
                            <div>
                                <h4>Designation</h4>
                                <p>Web Developer</p>
                            </div>
                            <div>
                                <h4>Reporting manager</h4>
                                <p>Satyam Singh</p>
                            </div>
                            <div>
                                <h4>Source of Hire</h4>
                                <p>Website</p>
                            </div>
                            <div>
                                <h4>Employee Type</h4>
                                <p>Permanent-Full time</p>
                            </div>
                             <div>
                                <h4>Work Mail</h4>
                                <p>akasahcodes@gmail.com</p>
                            </div>
                            <div>
                                <h4>Date of Exit</h4>
                                <p>-</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className='top_head'> <h3> <span><MdWorkHistory /></span>Personal Information</h3></div>
                        <div className='contentInformation'>
                            <div>
                                <h4>Employee ID</h4>
                                <p>EMP - 270015SC</p>
                            </div>
                            <div>
                                <h4>Contact Number</h4>
                                <p>+91 80173 65995</p>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <p>akshinde@gmail.com</p>
                            </div>
                            <div>
                                <h4>Date of Birth</h4>
                                <p>04 - 02 - 1996</p>
                            </div>
                            <div>
                                <h4>Age</h4>
                                <p>06 years 05 months</p>
                            </div>
                            <div>
                                <h4>Gender</h4>
                                <p>Male</p>
                            </div>
                        </div>
                        {/* Personal information content */}
                    </div>
                </div>

                <div className="nav-bar">
                    <button
                        className={activeTab === 'experience' ? 'active' : ''}
                        onClick={() => setActiveTab('experience')}
                    >
                        Experience
                    </button>
                    <button
                        className={activeTab === 'education' ? 'active' : ''}
                        onClick={() => setActiveTab('education')}
                    >
                        Education
                    </button>
                    <button
                        className={activeTab === 'documents' ? 'active' : ''}
                        onClick={() => setActiveTab('documents')}
                    >
                        Documents
                    </button>
                </div>

                <div className="content">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetails;
