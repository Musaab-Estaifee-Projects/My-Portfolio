"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef, useCallback } from "react";

// Define the properties of each Shooting Star
interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * window.innerWidth;

  switch (side) {
    case 0:
      return { x: offset, y: 0, angle: 45 };
    case 1:
      return { x: window.innerWidth, y: offset, angle: 135 };
    case 2:
      return { x: offset, y: window.innerHeight, angle: 225 };
    case 3:
      return { x: 0, y: offset, angle: 315 };
    default:
      return { x: 0, y: 0, angle: 45 };
  }
};

const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10, // Increased minimum speed to keep the stars moving quickly
  maxSpeed = 40, // Adjusted maximum speed
  minDelay = 2000, // Increased minimum delay between stars to reduce frequency
  maxDelay = 4500, // Increased maximum delay between stars
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 2,
  className,
}) => {
  const [star, setStar] = useState<ShootingStar | null>(null);
  const animationFrameId = useRef<number | null>(null);

  // Create a new star at random intervals based on the provided min and max delay
  const createStar = useCallback(() => {
    const { x, y, angle } = getRandomStartPoint();
    const newStar: ShootingStar = {
      id: Date.now(),
      x,
      y,
      angle,
      scale: 1,
      speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
      distance: 0,
    };
    setStar(newStar);

    const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
    setTimeout(createStar, randomDelay);
  }, [minSpeed, maxSpeed, minDelay, maxDelay]);

  useEffect(() => {
    createStar();
  }, [createStar]);

  useEffect(() => {
    const moveStar = () => {
      if (star) {
        setStar((prevStar) => {
          if (!prevStar) return null;
          const newX =
            prevStar.x +
            prevStar.speed * Math.cos((prevStar.angle * Math.PI) / 180);
          const newY =
            prevStar.y +
            prevStar.speed * Math.sin((prevStar.angle * Math.PI) / 180);
          const newDistance = prevStar.distance + prevStar.speed;
          const newScale = 1 + newDistance / 300;

          // Remove stars when they move out of the viewport
          if (
            newX < -50 ||
            newX > window.innerWidth + 50 ||
            newY < -50 ||
            newY > window.innerHeight + 50
          ) {
            return null;
          }
          return {
            ...prevStar,
            x: newX,
            y: newY,
            distance: newDistance,
            scale: newScale,
          };
        });
      }
      // Use `requestAnimationFrame` for smoother updates
      animationFrameId.current = requestAnimationFrame(moveStar);
    };
    animationFrameId.current = requestAnimationFrame(moveStar);

    return () => {
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
    };
  }, [star]);

  return (
    <svg className={cn("w-full h-full absolute inset-0", className)}>
      {star && (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#gradient)"
          transform={`rotate(${star.angle}, ${
            star.x + (starWidth * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      )}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop
            offset="100%"
            style={{ stopColor: starColor, stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ShootingStars;
