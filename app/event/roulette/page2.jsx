'use client';
import { useState, useEffect } from 'react';

// https://codesandbox.io/s/serene-wright-f011g?from-embed=&file=/src/index.js

const EventRoulette = () => {
  const [canvas, setCanvas] = useState(null);
  const product = [
    "떡볶이", '돈가스', "초밥", "피자", "냉면", "치킨", '족발', "피자", "삼겹살",
  ];

  const colors = ["#dc0936", "#e6471d", "#f7a416", "#efe61f", "#60b236", "#209b6c", "#169ed8", "#3f297e", "#87207b", "#be107f", "#e7167b"];

  console.log (product.length, colors.length)
  useEffect(() => {
    const $c = document.getElementById('canvas');
    setCanvas($c);
  }, []);

  useEffect(() => {
    if (canvas) {
      const [cw, ch] = [canvas.width / 2, canvas.height / 2];
      const arc = Math.PI / (product.length / 2);

      const ctx = canvas.getContext(`2d`);

      for (let i = 0; i < product.length; i++) {
        ctx.beginPath();
        ctx.fillStyle = colors[i % (colors.length - 1)];
        ctx.moveTo(cw, ch);
        ctx.arc(cw, ch, cw, arc * (i - 1), arc * i);
        ctx.fill();
        ctx.closePath();
      }

      ctx.fillStyle = "#fff";
      ctx.font = "18px Pretendard";
      ctx.textAlign = "center";

      for (let i = 0; i < product.length; i++) {
        const angle = (arc * i) + (arc / 2);

        ctx.save();

        ctx.translate(
          cw + Math.cos(angle) * (cw - 50),
          ch + Math.sin(angle) * (ch - 50),
        );

        ctx.rotate(angle + Math.PI / 2);

        product[i].split(" ").forEach((text, j) => {
          ctx.fillText(text, 0, 30 * j);
        });

        ctx.restore();
      }
    }
  }, [canvas, product, colors]);

  const rotate = () => {
    if (canvas) {
      canvas.style.transform = `initial`;
      canvas.style.transition = `initial`;

      setTimeout(() => {
        const ran = Math.floor(Math.random() * product.length);

        const arc = 360 / product.length;
        const rotate = (ran * arc) + 3600 + (arc * 3) - (arc / 4);

        canvas.style.transform = `rotate(-${rotate}deg)`;
        canvas.style.transition = `2s`;

        setTimeout(() => alert(`오늘의 야식은?! ${product[ran]} 어떠신가요?`), 2000);
      }, 1);
    }
  };

  return (
    <div className="roulette-wrap">
      <canvas width="380" height="380" id="canvas"></canvas>
      <button onClick={rotate}>룰렛 돌리기</button>
    </div>
  );
};

export default EventRoulette;