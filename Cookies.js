document.cookie = "name=Cookies ;";
document.cookie = "favorite_food=Choco Chips;";

function showCookies() {
  const output = document.getElementById('cookies')
  output.textContent = ` ${document.cookie}`
}

function clear() {
  const output = document.getElementById('cookies')
  output.textContent = ''
}

