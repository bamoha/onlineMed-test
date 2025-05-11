import { Step } from "@/types/step";
import { Check } from "lucide-react";
import React from "react";

export default function StepProgress({ steps }: { steps: Step[] }) {
  return (
    <div className="flex items-center">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;

        return (
          <div className="flex justify-center flex-col" key={step.title}>
            <div className="flex items-center">
              <div
                className={`flex items-center justify-center w-6 h-6 lg:w-[34px] lg:h-[34px] rounded-full text-sm
                  ${
                    step.status === "complete"
                      ? "bg-primary-custom-blue text-white"
                      : step.status === "current"
                      ? "bg-blue-100 text-black"
                      : "bg-blue-100 text-black opacity-50"
                  }
                `}
              >
                {step.status === "complete" ? (
                  <Check data-testid={"check"} size={17} />
                ) : (
                  index + 1
                )}
              </div>
              {!isLast && (
                <div
                  className={`h-1 lg:w-24 w-14 rounded-full mx-1 lg:mx-2
                  ${
                    step.status === "complete"
                      ? steps[index + 1]?.status === "complete"
                        ? "bg-primary-custom-blue"
                        : "bg-gradient-to-r from-primary-custom-blue to-blue-100"
                      : "bg-blue-100"
                  }
                `}
                />
              )}
            </div>

            <span
              className={"mt-2 text-[10px] lg:text-sm text-black font-sans"}
            >
              {step.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}
