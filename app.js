let diceArr = [];

class Die {
  constructor(value) {
    this.div = $('<div class="die"></div>');
    this.roll();
    $('main').append(this.div);
    this.div.click(() => this.reRoll());
    this.div.dblclick(() => this.destroy());
  }

  destroy() {
    this.div.remove();
    diceArr.splice(diceArr.indexOf(this), 1);
  }

  roll() {
    this.value = Math.floor(Math.random() * 6) + 1;
    $(this.div).append(this.value);
  }

  reRoll() {
    this.value = Math.floor(Math.random() * 6) + 1;
    $(this.div).text(this.value);
  }
}

$('.generateDieBtn').click(() => diceArr.push(new Die()));
$('.rollDieBtn').click(() => diceArr.forEach(dice => dice.reRoll()));
$('.sumDieBtn').click(() => {
  let sum = 0;
  diceArr.forEach((die) => sum += die.value);
  console.log(sum);
});
