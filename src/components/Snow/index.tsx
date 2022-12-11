import { useEffect } from "react";

export const Snow = () => {
  const snowflakesNumber = 30;

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

  const snowflakeTypes = []
  for (let i = 0; i < snowflakesNumber; i++){
    snowflakeTypes.push(getRndInteger(0,5))
  }

  return (
    <div className='snow'>
      {snowflakeTypes.map((s) => (
        <div className='snow__flake animate-snowfall'>
          <img
            src={`/src/assets/snowflake${s}.png`}
            alt='﹡'
          />
        </div>
      ))}
    </div>
  );
};
