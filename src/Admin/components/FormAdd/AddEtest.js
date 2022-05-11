import { Button, Card, message, Steps } from "antd";
import React, { useState } from "react";
import StepThird from "../FormSteps/StepThird";

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
      content: "Second-content",
    },
    {
      title: "Hoàn thành",
      content: "Last-content",
    },
  ];

  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

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
        <div className="steps-action">
          {currentStep === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {currentStep > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
