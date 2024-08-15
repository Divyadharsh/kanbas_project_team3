import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
export default function GreenCheckmark() {
  return (
    <span className="me-1 position-relative">
      <FaCheckCircle className="text-success me-1 mt-2 position-absolute fs-5" />
      <FaCircle className="text-white me-1 fs-6" />
    </span>
  );
}