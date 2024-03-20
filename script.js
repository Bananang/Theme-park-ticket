const modal = document.querySelector("dialog");
const ticketPrice = document.querySelector(".ticket_fee");
const inputAge = document.querySelector(".input_age");
document.querySelector(".submit").addEventListener("click", () => {
  const ageInput = document.querySelector(".ageValue");
  let age = ageInput.value;
  let price = 0;
  let person = null;

  if (!age || isNaN(age)) {
    alert("입력형식에 맞춰 다시 입력해주세요.");
  } else {
    if (age < 3) {
      // alert("0~36개월 미만의 유아는 파크 입장 무료 입니다.");
      price = "무료";
      person = "유아";
      ageInput.value = null;
      ageInput.focus();
      inputAge.textContent = `입력한 나이: ${age}세`;
      ticketPrice.textContent = `${person}: ${price}`;
    } else {
      if (3 <= age && age <= 13) {
        price = "47,000원";
        person = "어린이";
      } else if (age <= 19) {
        price = "54,000원";
        person = "청소년";
      } else if (age < 65) {
        price = "62,000원";
        person = "어른";
      } else {
        price = "47,000원";
        person = "65세 이상";
      }
      ageInput.value = null;
      ageInput.focus();
      inputAge.textContent = `입력한 나이: ${age}세`;
      ticketPrice.textContent = `${person}: ${price}`;
    }
    modal.showModal();
  }
});

document.querySelector(".closeBtn").addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) modal.close();
});
