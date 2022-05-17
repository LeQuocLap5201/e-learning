import React from "react";
// import PropTypes from "prop-types";
import "./index.css";
import { Button, Card, Progress } from "antd";
import { Link } from "react-router-dom";

CardCourse.propTypes = {};

function CardCourse(props) {
  return (
    <Link to={`/student/courses/1`}>
      <Card className="card-course">
        {/* <img src="/img/default.jpg" alt="thumbnail" /> */}
        <img
          src="https://media.istockphoto.com/photos/empty-product-stand-podium-pedestal-exhibition-with-palm-trees-and-picture-id1319770522?b=1&k=20&m=1319770522&s=170667a&w=0&h=k2Fw5WK1sVxKWcydc9Wn3iLPgHLLZnLjmSLwk74tJvw="
          alt=""
        />
        <div className="card-course__content">
          <h4>Test bài học ngày 14</h4>
          <p className="staff">My Trinh</p>
          <p className="position">Giám đốc Trung Tâm</p>
          <div className="card-course__tag">
            <div className="course-tag">Học xong</div>
            <div className="course-tag">Pass</div>
          </div>
          <Progress
            className="course-progress"
            trailColor="transparent"
            strokeColor="#fff"
            percent={70}
          />
          <div className="course-listbtn">
            <Button shape="round">
              <Link to={`/student/test/1`}>Thi tiếp</Link>
            </Button>
            <Button shape="round">
              <Link to={`/student/courses/2/3`}>Học lại</Link>
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default CardCourse;
