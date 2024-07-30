"use client";

import React, { useState, useEffect } from "react";

const sleep = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

async function getProgress(progress: number) {
  await sleep(300);
  return progress + 10;
}

interface CircularProgressProps {
  size: number;
  strokeWidth: number;
  initialProgress: number;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  size,
  strokeWidth,
  initialProgress,
}) => {
  const [progress, setProgress] = useState(initialProgress);

  useEffect(() => {
    const fetchProgress = async (progress: number) => {
      try {
        if (progress >= 100) return;
        setProgress(await getProgress(progress));
      } catch (error) {
        console.error("Error fetching progress:", error);
      }
    };

    fetchProgress(progress);
  }, [progress]);

  const radius = (size - strokeWidth) / 2;

  // Calculate the SVG arc path
  const getArcPath = (percentage: number) => {
    if (percentage >= 100) {
      return `M ${size / 2} ${size / 2 - radius}
              A ${radius} ${radius} 0 1 1 ${size / 2 - 0.001} ${size / 2 - radius}`;
    }
    const angleRad = (percentage / 100) * 2 * Math.PI - Math.PI / 2;
    const endX = size / 2 + radius * Math.cos(angleRad);
    const endY = size / 2 + radius * Math.sin(angleRad);
    const largeArcFlag = percentage > 50 ? 1 : 0;
    return `M ${size / 2} ${size / 2 - radius}
            A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
  };

  return (
    <div className="inline-block">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle
          className="text-gray-200"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          stroke="currentColor"
        />
        <path
          d={getArcPath(progress)}
          fill="none"
          stroke="#3B82F6"
          strokeWidth={strokeWidth}
          strokeLinecap="butt"
        />
        <text
          className="fill-current text-3xl font-bold text-gray-700"
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
        >
          {`${Math.round(Math.min(progress, 100))}%`}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgress;
