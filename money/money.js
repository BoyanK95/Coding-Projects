const moneyBtn = document.getElementById("moneyBtn");
const containerEl = document.getElementById("container");
const btnContainerRootDiv = document.getElementsByClassName("btn-container")[0];
moneyBtn.addEventListener("click", giveMeMoney);

function giveMeMoney(e) {
  let imgEl = document.createElement("img");
  let divRootEl = document.createElement("div");
  let moreMoneyBtn = document.createElement("button");
  imgEl.src = "./littleMoney.webp";
  divRootEl.appendChild(imgEl);
  containerEl.appendChild(imgEl);

  moreMoneyBtn.textContent = "Give MORE Money !!!";
  moreMoneyBtn.setAttribute("id", "moneyBtn");
  btnContainerRootDiv.appendChild(moreMoneyBtn);

  moreMoneyBtn.addEventListener("click", moreMoney);
  console.log(e.currentTarget);
  e.currentTarget.disabled = true;

  function moreMoney(e) {
    let imgEl = document.createElement("img");
    imgEl.src = "./aLotOfMoney.webp";
    imgEl.classList.add('aLotOfMoney')
    divRootEl.appendChild(imgEl);
    containerEl.appendChild(imgEl);
    console.log(e);
  }
}
