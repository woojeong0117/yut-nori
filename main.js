const playBtn = document.querySelector(".play_btn");
const yut = document.querySelectorAll(".yut");
const yut4 = document.querySelector(".yut04");
const resultBox = document.querySelector(".result_wrap");
const resultText = document.querySelector(".txt");
const retryBtn = document.querySelector(".retry");
const btnMore = document.querySelector(".btn_more");
const nakClass = document.querySelector(".nak");
const tit = document.querySelector("h3");

playBtn.addEventListener("click", () => {
  yut4.classList.remove("nak");
  yut.forEach((yut) => {
    yut.classList.add("rotate");
  });
  setTimeout(() => {
    const nak = Math.floor(Math.random() * 9) + 1;

    // 네번째 윷에 nak 붙이기
    if (nak === 7) {
      yut4.classList.add("nak");
    }

    for (let i = 0; i <= yut.length - 1; i++) {
      const random = Math.floor(Math.random() * 2) + 1;
      if (random === 1) {
        yut[i].classList.add("active");
      } else {
        yut[i].classList.remove("active");
      }
    }

    yut.forEach((yut) => {
      yut.classList.remove("rotate");
    });
    let activeNak = yut4.classList.contains("nak"); // 낙인지 아닌지 판별

    setTimeout(() => {
      resultBox.classList.add("on");
      if (activeNak) {
        resultText.innerText = "낙🤪🤪";
      } else {
        // const activeCount = document.querySelectorAll(".active").length;
        activeCount = 0;
        switch (activeCount) {
          case 0:
            resultText.innerText = "모";
            retryBtn.style.display = "none";
            btnMore.style.display = "block";
            break;
          case 1:
            resultText.innerText = "도";
            break;
          case 2:
            resultText.innerText = "개";
            break;
          case 3:
            resultText.innerText = "걸";
            break;
          case 4:
            resultText.innerText = "윷";
            retryBtn.style.display = "none";
            btnMore.style.display = "block";
            break;
        }
      }
    }, 1000);
  }, 900);
});

retryBtn.addEventListener("click", () => {
  location.reload();
});

btnMore.addEventListener("click", () => {
  const retryText = resultText.innerText();
  console.log(resultText);
  tit.innerText = "";
});
