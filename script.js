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
        person = "어린이";
      } else if (age <= 19) {
        person = "청소년";
      } else if (age < 65) {
        person = "어른";
      } else {
        person = "65세 이상이므로 어린이 할인";
      }
      alert(`입력하신 나이는 ${age}세로 ${person} 요금이 적용됩니다.`);
      ageInput.value = null;
      ageInput.focus();
    }
  }
});
