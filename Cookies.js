document.cookie = "name=Cookies ;secure;";
document.cookie = "favorite_food=Choco Chips; secure";

function showCookies() {
  const output = document.getElementById('cookies')
  output.textContent = ` ${document.cookie}`
}

function clear() {
  const output = document.getElementById('cookies')
  output.textContent = ''
}

