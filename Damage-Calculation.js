function attack (damage) {

    var totalDamage = damage - 2
    return totalDamage
}
  
function damageCalculation (numberOfAttacks, damagePerAttack) {
    var result = attack(damagePerAttack)* numberOfAttacks
    return result  
}
  
// TEST CASE
console.log(damageCalculation(9, 25)); // 207
console.log(damageCalculation(10, 4)); // 20
console.log(damageCalculation(5, 20)); // 90