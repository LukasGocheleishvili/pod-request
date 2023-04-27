const resultMobile = document.querySelector(".mobile");
const resultDesktop = document.querySelector(".desktop");
const submit = document.getElementById("button");

submit.addEventListener("click", () => {
  const input = document.getElementById("input");
  let email = input.value;
  const regexExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
  const validation = regexExp;
  if (validation.test(email)) {
    resultMobile.classList.remove("output-correct");
    resultDesktop.classList.remove("output-incorrect");
    resultDesktop.textContent = "";
    resultMobile.textContent = "";
    resultMobile.classList.add("output-correct");
    resultDesktop.classList.add("output-correct");
  } else {
    resultMobile.classList.remove("output-correct");
    resultDesktop.classList.remove("output-incorrect");
    resultMobile.textContent = "Oops! Please check your email";
    resultDesktop.textContent = "Oops! Please check your email";
    resultMobile.classList.add("output-incorrect");
    resultDesktop.classList.add("output-incorrect");
  }
});
