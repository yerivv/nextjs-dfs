'use client'
import React, { useState, useEffect } from 'react';

//https://lts0606.tistory.com/572

const EventRoulette = () => {
  const [canvas, setCanvas] = useState(null);
  const product = [
    {
      no: "1",
      name: "1000P",
      type: "point",
      content: "1,000P",
      color: "#efe61f",
    },
    {
      no: "2",
      name: "10%",
      type: "coupon",
      content: "10%",
      color: "#169ed8",
    },
    {
      no: "3",
      name: "꽝",
      type: "oops",
      content: "꽝!",
      color: "#fff",
    }
  ];

  //console.log(product[0].color)

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
        ctx.fillStyle = product[i].color;
        ctx.moveTo(cw, ch);
        ctx.arc(cw, ch, cw, arc * i, arc * (i + 1));
        ctx.fill();
        ctx.closePath();
      }

      ctx.fillStyle = "#000";
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

        product[i].content.split(" ").forEach((text, j) => {
          ctx.fillText(text, 0, 30 * j);
        });

        ctx.restore();
      }
    }
  }, [canvas, product]);

  const rotate = () => {
    if (canvas) {
      canvas.style.transform = `initial`;
      canvas.style.transition = `initial`;

      setTimeout(() => {
        const ran = Math.floor(Math.random() * product.length);

        const arc = 360 / product.length;
        const rotate = (ran * arc) + 3600 + (arc * (product.length-2)) - (arc / (product.length-1));

        canvas.style.transform = `rotate(-${rotate}deg)`;
        canvas.style.transition = `2s`;

        setTimeout(() => alert(`당첨된 내용 : ${product[ran].content} 어떠신가요?`), 2000);
      }, 1);
    }
  };

  return (
    <div className="roulette-wrap">
      <div className="canvas-box">
        <canvas width="380" height="380" id="canvas"></canvas>
      </div>
      <button onClick={rotate}>룰렛 돌리기</button>
    </div>
  );
}

export default EventRoulette;


// useEffect(() => {
//   if (content) {
//     setRouletteImg(content?.rouletteImgName);
//     setRouletteSpin(content?.rouletteTime);
//     setRouletteLength(content?.eventBnefResponseDtos.length);
//   }
// }, [content]);
// const user = useRecoilValue(currentUser);
// const { register, handleSubmit, watch, setValue } = useForm({});

// const rRotate = data => {
//   if (data?.data?.seqNo === 0) return;
//   var panel = document.querySelector('.rouletterContainer');

//   var deg = [];
//   let degOnePiece = 0;
//   for (var i = 1, len = rouletteLength; i <= len; i++) {
//     deg.push((360 / len) * i - (360/len));
//   }

//   var num = 0;
//   const setNum = data?.data?.seqNo - 1;
//   var ani = setInterval(() => {
//     num++;
//     panel.style.transform = 'rotate(' + 360 * num + 'deg)';
//     // 회전수
//     if (num === rouletteSpin * 10) {
//       clearInterval(ani);
//       panel.style.transform = 'rotate(-' + deg[setNum] + 'deg)';
//     }
//   }, rouletteSpin * 10);
// };

// const RouletteExecute = async () => {
//   if (open) return;
//   const data = await postRouletteEvent(content?.eventNum);
//   if (data) {
//     if (data?.data?.msg === 'already') {
//       setOpen(true);
//       setEventResult(data?.data);
//       return null;
//     }else{
//       rRotate(data);
//       setTimeout(() => {
//         if (data?.data?.seqNo === 0) return;
//         RouletteRusult(data); // 룰렛 이벤트 당첨처리
//         //setButtonHide(true);
//         setOpen(true);
//         setEventResult(data?.data);
//       }, (rouletteSpin + 2 )* 1000);
//     }
//   }
// };

// const RouletteRusult = data => {
//   if (data?.data?.seqNo === 0) return;
//   if (data?.data?.msg === 'ok' || data?.data?.msg === 'BOOM') {
//     console.info('data data.seqNo1==>', data?.data.seqNo);
//   } else if (
//     data?.data?.msg === 'already' ||
//     data?.data?.msg === 'period' ||
//     data?.data?.msg === 'limit0' ||
//     data?.data?.msg === 'limit1'
//   ) {
//     setOpen(true);
//     setEventResult(data?.data);
//   }
// };

// const onSubmit = () => {
//   if (!user?.regularMember) {
//     alert('정회원만 이벤트에 참여하실 수 있습니다.');
//     return;
//   } else {
//     RouletteExecute();
//   }
// };