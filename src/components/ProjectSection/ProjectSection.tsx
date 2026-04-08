"use client";

import React, { useEffect, useRef, useState } from "react";

export interface ProjectSectionProps {
  title: string;
  body: React.ReactNode;
  sectionId: string;
  image: string;
  imageAlt?: string;
}

export default function ProjectSection({
  title,
  body,
  sectionId,
  image,
  imageAlt = "",
}: ProjectSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={sectionId}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: "opacity 0.7s ease, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <h2 className="mb-3 font-heading text-[22px] font-bold leading-[1.4] text-content-text md:text-[28px] xl:text-[32px]">
        {title}
      </h2>
      <div className="mb-12 font-body text-base leading-[1.4] text-content-text md:mb-16 md:text-[20px] xl:max-w-[1106px]">
        {body}
      </div>
      <div className="relative h-52 w-full overflow-hidden rounded-card bg-img-bg md:h-72 xl:h-[600px] xl:max-w-[1106px]">
        <img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
