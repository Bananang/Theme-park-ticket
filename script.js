document.querySelector(".submit").addEventListener("click", () => {
  const ageInput = document.querySelector(".ageValue");
  let age = ageInput.value;
  let person = "";

  if (!age || isNaN(age)) {
    alert("입력형식에 맞춰 다시 입력해주세요.");
  } else {
    if (age < 3) {
      alert("0~36개월 미만의 유아는 파크 입장 무료 입니다.");
      ageInput.value = null;
      ageInput.focus();
    } else {
      if (3 <= age && age <= 13) {
        person = "어린이 요금: 47,000원";
      } else if (age <= 19) {
        person = "청소년 요금: 54,000원";
      } else if (age < 65) {
        person = "어른 요금: 62,000원";
      } else {
        person = "65세 이상이므로 할인 금액인 어린이 요금 적용되어 47,000원";
      }
      alert(`입력한 나이: ${age}세 \n${person} 입니다.`);
      ageInput.value = null;
      ageInput.focus();
    }
  }
});
