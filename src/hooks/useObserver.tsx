import React, { useState, useRef, useEffect } from "react";

export default function NavObserver() {
  const [isVisible, setIsVisible] = useState(false);
  const inputRef = useRef<HTMLElement>();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });

    observer.observe(inputRef.current);

    return () => observer.disconnect();
  }, []);

  return {
    isVisible,
    inputRef,
  };
}
