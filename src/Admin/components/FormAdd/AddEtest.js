import { Button, Card, Result, Steps } from "antd";
import React, { useState } from "react";
import StepThird from "../FormSteps/StepThird";
import StepFourth from "../FormSteps/StepFourth";
import StepFifth from "../FormSteps/StepFifth";
import { Link } from "react-router-dom";

const { Step } = Steps;

export default function AddEtest() {
  //Handle Step
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = (val) => {
    setCurrentStep(val);
  };

  const steps = [
    {
      title: "Tạo bài kiểm tra",
      content: <StepThird currentStep={currentStep} nextStep={nextStep} />,
    },
    {
      title: "Nội dung câu hỏi",
      content: (
        <>
          <StepFourth currentStep={currentStep} nextStep={nextStep} />
          <StepFifth currentStep={currentStep} nextStep={nextStep} />
        </>
      ),
    },
    {
      title: "Hoàn thành",
      content: (
        <Result
          status="success"
          title="Thêm bài học thành công"
          extra={
            <>
              <Link to="/admin/e-tests">
                <Button>Danh sách bài kiểm tra</Button>
              </Link>
              <Button
                type="primary"
                className="btn-primary"
                onClick={() => {
                  setCurrentStep(0);
                }}
              >
                Thêm bài kiểm tra mới
              </Button>
            </>
          }
        />
      ),
    },
  ];

  return (
    <div className="add-etest">
      <Card title="Tạo bài kiểm tra">
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
