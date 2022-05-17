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
        <img
          src="https://media.istockphoto.com/photos/empty-product-stand-podium-pedestal-exhibition-with-palm-trees-and-picture-id1319770522?b=1&k=20&m=1319770522&s=170667a&w=0&h=k2Fw5WK1sVxKWcydc9Wn3iLPgHLLZnLjmSLwk74tJvw="
          alt=""
        />
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
