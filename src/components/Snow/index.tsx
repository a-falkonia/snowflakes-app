import { useEffect } from "react";

export const Snow = () => {

  const getRndInteger = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    const snowflakes = document.querySelectorAll<HTMLElement>(".snow__flake");

    snowflakes.forEach((snowflake) => {
      snowflake.style.animationDuration = getRndInteger(20, 30) + "s";
      snowflake.style.animationDelay =
        getRndInteger(-1, snowflakes.length / 2) + "s";
    });
  }, []);

  return (
      <div className='snow'>
      <div className='snow__flake animate-snowfall'>﹡</div>
      <div className='snow__flake animate-snowfall'>﹡</div>
      <div className='snow__flake animate-snowfall'>﹡</div>
      <div className='snow__flake animate-snowfall'>﹡</div>
      <div className='snow__flake animate-snowfall'>﹡</div>
      <div className='snow__flake animate-snowfall'>﹡</div>
      <div className='snow__flake animate-snowfall'>﹡</div>
      <div className='snow__flake animate-snowfall'>﹡</div>
      <div className='snow__flake animate-snowfall'>﹡</div>
      <div className='snow__flake animate-snowfall'>﹡</div>
      <div className='snow__flake animate-snowfall'>﹡</div>
      <div className='snow__flake animate-snowfall'>﹡</div>
      <div className='snow__flake animate-snowfall'>﹡</div>
      <div className='snow__flake animate-snowfall'>﹡</div>
      <div className='snow__flake animate-snowfall'>﹡</div>
      <div className='snow__flake animate-snowfall'>﹡</div>
    </div>
  );
};
