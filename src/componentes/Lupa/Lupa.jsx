import React, { useRef } from 'react';
import './Lupa.css';

const Lupa = ({ img }) => {
  const lensRef = useRef();
  const containerRef = useRef();

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const lens = lensRef.current;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const lensX = x - lens.offsetWidth / 2;
    const lensY = y - lens.offsetHeight / 2;
    lens.style.left = `${lensX}px`;
    lens.style.top = `${lensY}px`;

    const bgX = (x / rect.width) * 100;
    const bgY = (y / rect.height) * 100;

    lens.style.backgroundPosition = `${bgX}% ${bgY}%`;
  };

  const handleEnter = () => {
    lensRef.current.style.display = 'block';
  };

  const handleLeave = () => {
    lensRef.current.style.display = 'none';
  };

  return (
    <div
      className="zoom-container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <img src={img} alt="Product" className="zoom-img" />
      <div
        ref={lensRef}
        className="zoom-lens"
        style={{ backgroundImage: `url(${img})` }}
      />
    </div>
  );
};

export default Lupa;
