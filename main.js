const playBtn = document.querySelector(".play_btn");
const yut = document.querySelectorAll(".yut");
const yut4 = document.querySelector(".yut04");
const resultBox = document.querySelector(".result_wrap");
const resultText = document.querySelector(".txt");
const retryBtn = document.querySelector(".retry");
const btnMore = document.querySelector(".btn_more");
const nakClass = document.querySelector(".nak");
const tit = document.querySelector("h3");
let moreCount = 0; // 한번 더 나온 횟수

// 초기 시작 버튼
playBtn.addEventListener("click", (e) => {
  // 버튼 제거
  const button = e.target;
  button.style.display = "none";

  // nak 클래스 제거
  yut4.classList.remove("nak");

  // 돌아가는 모션 클래스 추가
  yut.forEach((yut) => {
    yut.classList.add("rotate");
    yut.classList.add("on");
  });

  setTimeout(() => {
    // 0 ~ 9까지 랜덤으로 정수 생성
    const nak = Math.floor(Math.random() * 9) + 1;

    // 네번째 윷에 nak 붙이기
    if (nak === 7) {
      yut4.classList.add("nak");
    }

    // 1(뒤) / 2(앞)가 번갈아 나와 윷에 active 붙여주어 뒤집기 추가
    for (let i = 0; i <= yut.length - 1; i++) {
      const random = Math.floor(Math.random() * 2) + 1;
      if (random === 1) {
        yut[i].classList.add("active");
      } else {
        yut[i].classList.remove("active");
      }
    }

    // 뒤집은 후 돌아가는 모션 제거
    yut.forEach((yut) => {
      yut.classList.remove("rotate");
    });

    // 일정 시간 뒤 모달팝업 뜨기
    setTimeout(() => {
      resultBox.classList.add("on"); // 모달 온
      let activeNak = yut4.classList.contains("nak"); // 낙인지 아닌지 판별

      // 낙인지 먼저 판별 후
      if (activeNak) {
        resultText.innerText = "낙🤪🤪";
        resultText.style.color = "red";
      } else {
        // 낙이 아니면
        const activeCount = document.querySelectorAll(".active").length;
        // activeCount = 0;
        switch (activeCount) {
          case 0:
            resultText.innerText = "모";
            retryBtn.style.display = "none";
            btnMore.style.display = "block";
            break;
          case 1:
            // 한개가 뒤집혔는데 그게 4번째 윷이면
            if (yut4.classList.contains("active")) {
              resultText.innerText = "빽 도😝\n(뒤로가기)";
              resultText.style.color = "red";
            } else {
              resultText.innerText = "도";
            }
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
  }, 1000);
});

retryBtn.addEventListener("click", () => {
  location.reload();
});

btnMore.addEventListener("click", () => {
  const retryText = resultText.innerText;

  // 한번 더 나온 횟수 증가
  moreCount++;
  console.log(moreCount);
  if (moreCount > 1) {
    tit.innerText = `한번 더가 ${moreCount}번이나!!!`;
  } else {
    tit.innerText = `${retryText}(이)가 나왔으니 한번 더!!`;
  }
  resultBox.classList.remove("on"); // 모달 닫기
  retryBtn.style.display = "block";
  btnMore.style.display = "none";
  playBtn.style.display = "block";
});
