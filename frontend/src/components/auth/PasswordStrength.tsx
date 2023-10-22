import React from "react";
import PasswordLock from "../assets/PassowordLock";
import IndividualMatch from "./IndividualMatch";

const PasswordStrength = ({ text }: { text: string }) => {
  const lengthPass = text.length > 7;
  const lowerCasePass = lengthPass && text.match(/[a-z]+/g) ? true : false;
  const upperCasePass = lengthPass && text.match(/[A-Z]+/g) ? true : false;
  const symbolPass = lengthPass && text.match(/[^A-Z0-9]+/gi) ? true : false;
  return (
    <div className="p-4 flex gap-4 w-full bg-[rgba(52,152,219,0.10)]">
      <PasswordLock className="min-h-[32px] min-w-[32px]" />
      <div className="flex flex-col">
        <h3 className="text-primary-gray font-semi-bold leading-[23px]">
          Your password needs to include:
        </h3>
        <div className="flex gap-4 mt-[5.5px]">
          <IndividualMatch
            matchText="At least 8 characters strong"
            isValid={text.length > 7}
          />
          <IndividualMatch
            matchText="One lower case character"
            isValid={lowerCasePass}
          />
        </div>
        <div className="flex gap-4 mt-2">
          <IndividualMatch matchText="One upper case" isValid={upperCasePass} />
          <IndividualMatch
            matchText="A symbol or special character"
            isValid={symbolPass}
          />
        </div>
      </div>
    </div>
  );
};

export default PasswordStrength;
