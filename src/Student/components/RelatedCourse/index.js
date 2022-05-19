import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
// import PropTypes from 'prop-types';

RelatedCourse.propTypes = {};

function RelatedCourse(props) {
  return (
    <Link to={`/student/courses/1`}>
      <Card className="related-course">
        <img src="/img/default.jpg" alt="thumbnail" />
        <div className="related-course__content">
          <h4>Test bài học ngày 14</h4>
          <p className="staff">My Trinh</p>
          <p className="position">Giám đốc Trung Tâm</p>
        </div>
      </Card>
    </Link>
  );
}

export default RelatedCourse;
