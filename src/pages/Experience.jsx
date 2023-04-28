import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import { motion } from "framer-motion";

function Experience() {
  return (
    <motion.div
      className="experience"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2018 - June 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Crescent Heights High School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Calgary, AB</h4>
          <ul>
            <li>Captain of the Basketball Team</li>
            <li>Grade 10 & 11 Athlete of the Year</li>
            <li>Basketball and Volleyball Team</li>
            <li>Honours Student</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2019 - September 2019"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Seasonal Warehouse Attendant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Calgary, AB</h4>
          <ul>
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
          <h3 className="vertical-timeline-element-title">
            University of Calgary
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Calgary, AB</h4>

          <p>Bachelor of Science - Software Engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2022 - August 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Big Data Developer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Calgary, AB</h4>
          <ul>
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
      </VerticalTimeline>
    </motion.div>
  );
}

export default Experience;
