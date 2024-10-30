import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [steps, setSteps] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleNext = () => {
    if (steps < 3) setSteps((s) => s + 1);
  };

  const handlePrevious = () => {
    if (steps > 1) setSteps((s) => s - 1);
  };

  const handleClose = () => {
    setIsOpen((io) => !io);
  };

  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={steps >= 1 ? "active" : ""}>1</div>
            <div className={steps >= 2 ? "active" : ""}>2</div>
            <div className={steps >= 3 ? "active" : ""}>3</div>
          </div>
          <div className="message">
            <p>
              Step{steps}:{messages[steps - 1]}
            </p>
          </div>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
