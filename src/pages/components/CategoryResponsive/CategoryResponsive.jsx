import { Button, Dropdown } from "react-bootstrap";
import { IoMdArrowDropdown } from "react-icons/io";
import ArticleCard from "../../Home/Card/ArticleCard";
import EducationCard from "../../Home/Card/EducationCard";
import MeetupCard from "../../Home/Card/MeetupCard";
import JobCard from "../../Home/Card/JobCard";
import { GrEdit } from "react-icons/gr";
import { MdEdit } from "react-icons/md";
import { useState } from "react";


const CategoryResponsive = () => {
    const [short, setShort] = useState(false);

    return (
        <div className="position relative">
            <div className="d-flex justify-content-between align-items-center m-3">
                <div>
                    <h4>Posts(368)</h4>
                </div>
                <Dropdown align="end">
                    <Dropdown.Toggle
                        variant="light"
                        id="dropdown-basic">
                        Filter: All <IoMdArrowDropdown />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setShort(false)}>All</Dropdown.Item>
                        <Dropdown.Item onClick={() => setShort(true)}>Short View</Dropdown.Item>
                        <Dropdown.Item >Article</Dropdown.Item>
                        <Dropdown.Item >Event</Dropdown.Item>
                        <Dropdown.Item >Education</Dropdown.Item>
                        <Dropdown.Item >Job</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
            </div>

            {/* articles */}
            <div>
                <ArticleCard />
                <div className={`${short ? 'd-none' : 'd-block'}`}>
                    <EducationCard />
                    <MeetupCard />
                    <JobCard />
                </div>
            </div>


            <div style={{ position: 'relative' }}>
                <div className="position-fixed bottom-0 end-0 bg-danger bg-gradient text-primary p-2 rounded-circle text-white m-3">

                    <Button variant="" className="fs-2 text-white" ><MdEdit /></Button>

                </div>
            </div>
        </div>
    );
};

export default CategoryResponsive;