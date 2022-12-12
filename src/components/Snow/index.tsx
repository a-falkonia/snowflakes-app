import { useEffect } from "react";
import snowflake0 from '/src/assets/snowflake0.png'
import snowflake1 from '/src/assets/snowflake1.png'
import snowflake2 from '/src/assets/snowflake2.png'
import snowflake3 from '/src/assets/snowflake3.png'
import snowflake4 from '/src/assets/snowflake4.png'
import snowflake5 from '/src/assets/snowflake5.png'
  
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

  const snowflakeOptions = [snowflake0, snowflake1, snowflake2, snowflake3, snowflake4, snowflake5]

  const randomizedSnowflakes = []
  for (let i = 0; i < snowflakesNumber; i++){
    randomizedSnowflakes.push(snowflakeOptions[getRndInteger(0,5)])
  }

  return (
    <div className='snow'>
      {randomizedSnowflakes.map((s) => (
        <div className='snow__flake animate-snowfall'>
          <img src={s} alt='﹡' />
        </div>
      ))}
    </div>
  );
};
