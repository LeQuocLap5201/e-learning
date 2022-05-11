import { Button, Card, Result, Steps } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import StepFirst from "../FormSteps/StepFirst";
import StepSecond from "../FormSteps/StepSecond";

const { Step } = Steps;

export default function AddStudy() {
  //Handle Step
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = (val) => {
    setCurrentStep(val);
  };

  const steps = [
    {
      title: "Thêm chuyên đề",
      content: <StepFirst currentStep={currentStep} nextStep={nextStep} />,
    },
    {
      title: "Nội dung bài học",
      content: <StepSecond currentStep={currentStep} nextStep={nextStep} />,
    },
    {
      title: "Hoàn thành",
      content: (
        <Result
          status="success"
          title="Thêm bài học thành công"
          extra={
            <>
              <Link to="/admin/studies">
                <Button>Danh sách bài học</Button>
              </Link>
              <Button
                type="primary"
                className="btn-primary"
                onClick={() => {
                  setCurrentStep(0);
                }}
              >
                Thêm bài học mới
              </Button>
            </>
          }
        />
      ),
    },
  ];

  return (
    <div className="add-study">
      <Card>
        <Steps current={currentStep}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content" style={{ marginTop: 15 }}>
          {steps[currentStep].content}
        </div>
      </Card>
    </div>
  );
}
