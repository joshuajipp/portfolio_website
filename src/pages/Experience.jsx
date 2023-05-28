import React from "react";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import { motion } from "framer-motion";
import "../styles/Experience.css";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

function Experience(props) {
  return (
    <motion.div
      className="experience"
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <VerticalTimeline
        lineColor={
          props.isDarkMode ? "var(--white-color)" : "var(--gray-color)"
        }
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2018 - June 2021"
          iconStyle={{
            background: props.isDarkMode ? "#ff6464" : "#ff0000",
            color: "#fff",
          }}
          icon={<SchoolIcon />}
        >
          <div className="note-header-indent">
            <h3 className="vertical-timeline-element-title">
              Crescent Heights High School
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Grade: 91%</h4>
            <h5 className="grade"> Calgary, AB</h5>
          </div>
          <ul className="text-box">
            <li>Captain of the Basketball Team</li>
            <li>Grade 10 & 11 Athlete of the Year</li>
            <li>Honours Student</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2019 - September 2019"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <div className="note-header-indent">
            <h3 className="vertical-timeline-element-title">
              Seasonal Warehouse Attendant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Atlas Trailer Coach Products</h4>
            <h5 className="grade"> Calgary, AB</h5>
          </div>
          <ul className="text-box">
            <li>
              Filled customers orders, packaged them, created invoices, and got
              them ready for shipping
            </li>
            <li>Managed the inventory and restocked items</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2021 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <div className="note-header-indent">
            <h3 className="vertical-timeline-element-title">
              University of Calgary
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Grade: 3.7/4.0</h4>
            <h5 className="grade">Calgary, AB</h5>
          </div>

          <div>Bachelor of Science - Software Engineering</div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2022 - August 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <div className="note-header-indent">
            <h3 className="vertical-timeline-element-title">
              Big Data Developer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">SDK Tek Services Ltd.</h4>
            <h5 className="grade">Calgary, AB</h5>
          </div>
          <ul className="text-box">
            <li>
              Utilized Python3 and Apache Spark to build object-oriented data
              transformation programs for clients.
            </li>
            <li>
              Created automated unit/integration tests using Python's, pytest
              framework and chispa module to ensure the consistency and
              reliability of the data transformations.
            </li>
            <li>
              Made use of pre-receive hooks on GitHub Enterprise Server to
              reject all commits to the remote repository containing suspicious
              regex patterns which trace back to the possible data leak in the
              commit being made.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2023 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <div className="note-header-indent">
            <h3 className="vertical-timeline-element-title">
              DevOps Consultant Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">SDK Tek Services Ltd.</h4>
            <h5 className="grade">Calgary, AB</h5>
          </div>
          <ul className="text-box">
            <li>
              In progress...
            </li>

          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </motion.div>
  );
}

export default Experience;
