"use client";
import React from "react";

export default function Button() {
  return (
    <div className="mt-4">
      <button
        onClick={() => alert("Button clicked!")}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Click Here
      </button>
    </div>
  );
}
