function checkCashRegister(price, cash, cid) {
    let diff = (cash - price).toFixed(2);
    let change = [];
    let cidCopy = [...cid];
    let moneyArr = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.10],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ];
    
    for(let i = 8; i >= 0; i--) {
        let j = 0;
        let k = cid[i][1];
        for(diff; diff >= moneyArr[i][1] && k > 0; diff = (diff - moneyArr[i][1]).toFixed(2)) {
          j++;
          change[i] = [moneyArr[i][0], Number((moneyArr[i][1] * j).toFixed(2))];
          cid[i] = [cid[i][0], (cid[i][1] - moneyArr[i][1]).toFixed(2)];
          k -= moneyArr[i][1];
        }
    }
    
    change = (change.filter(function(x) { return x })).reverse();
       
    if(diff == 0) {
        for(let l = 0; l < cid.length; l++) {
          if(cid[l][1] > 0) {
            return {status: "OPEN", change: change};
        }
        else if(cid[l][1] == 0 && l == cid.length -1) {
            return {status: "CLOSED", change: cidCopy};
        }
      }
    }
    else {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }
}
 
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));