let score = 0;
let combo = 0;
let enemyHP = 100;

function enterGame() {
  document.getElementById("intro").classList.remove("active");
  document.getElementById("game").classList.add("active");
}

function attack() {
  let damage = 5;
  enemyHP -= damage;
  score += damage;
  combo++;

  visualFeedback();
  updateUI();
  checkEnemy();
}

function powerAttack() {
  let damage = 20 + combo; // كل combo يزيد الضرر
  enemyHP -= damage;
  score += damage;
  combo = 0;

  visualFeedback();
  updateUI();
  checkEnemy();
}

function updateUI() {
  document.getElementById("score").textContent = score;
  document.getElementById("combo").textContent = `Combo: ${combo}`;
  if(enemyHP < 0) enemyHP = 0;
  document.getElementById("enemyHP").textContent = `Enemy HP: ${enemyHP}`;
  document.getElementById("enemyLife").style.width = `${enemyHP}%`;
}

function visualFeedback() {
  const enemy = document.getElementById("enemyLife");
  enemy.classList.add("enemy-hit");
  setTimeout(() => enemy.classList.remove("enemy-hit"), 200);

  const scoreEl = document.getElementById("score");
  scoreEl.classList.add("score-update");
  setTimeout(() => scoreEl.classList.remove("score-update"), 300);
}

function checkEnemy() {
  if(enemyHP <= 0) {
    alert(`You defeated the enemy! Score: ${score}`);
    resetGame();
  }
}

function resetGame() {
  enemyHP = 100;
  score = 0;
  combo = 0;
  updateUI();
}
