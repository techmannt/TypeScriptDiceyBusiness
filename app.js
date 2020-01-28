"use strict";
var diceArr = [];
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.value = 0;
        this.div = $('<div class="die"></div>');
        this.roll();
        $('main').append(this.div);
        this.div.click(function () { return _this.reRoll(); });
        this.div.dblclick(function () { return _this.destroy(); });
    }
    Die.prototype.destroy = function () {
        this.div.remove();
        diceArr.splice(diceArr.indexOf(this), 1);
    };
    Die.prototype.roll = function () {
        this.value = Math.floor(Math.random() * 6) + 1;
        $(this.div).text(this.value);
    };
    Die.prototype.reRoll = function () {
        this.value = Math.floor(Math.random() * 6) + 1;
        $(this.div).text(this.value);
    };
    return Die;
}());
$('.generateDieBtn').click(function () { return diceArr.push(new Die()); });
$('.rollDieBtn').click(function () { return diceArr.forEach(function (dice) { return dice.reRoll(); }); });
$('.sumDieBtn').click(function () {
    var sum = 0;
    diceArr.forEach(function (die) { return sum += die.value; });
    console.log(sum);
});
