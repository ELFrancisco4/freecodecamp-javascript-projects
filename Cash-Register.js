const checkCashRegister = (price, cash, cid) => {
    const UNIT_AMOUNT = {  
    "PENNY": .01,
    "NICKEL": .05,
    "DIME": .10,
    "QUARTER": .25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
   }
  
  
   let currencies = cid.map((x) => {
        return x.filter((val) => {
          return typeof val == "number"
        })
      }) // Remove string values from cid array
      currencies.map((x) => {
        x.forEach((num) => {
          currencies.push(num)
        })
      })
     currencies = currencies.filter((x) =>{
        return typeof x == "number"
      })
      let totalCashInDrawer = currencies.reduce((acc, val) => {
        return acc + val
      }).toFixed(2) // Total amount of cash in register
      let changeDue = cash - price
  
    let change = [] //change array 
       if(changeDue == totalCashInDrawer){
       return {
         status: "CLOSED",
         change: cid
       }
     } 
  else if (changeDue > totalCashInDrawer) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
     else{
         cid = cid.reverse() // Change the order to the required format
    for (let elem of cid) { //Determine the change due in coins and bills in the right order
        let arr = [elem[0], 0];
        while (changeDue >= UNIT_AMOUNT[elem[0]] && elem[1] > 0) {
          arr[1] += UNIT_AMOUNT[elem[0]];
          elem[1] -= UNIT_AMOUNT[elem[0]];
          changeDue -= UNIT_AMOUNT[elem[0]];
          changeDue = changeDue.toFixed(2)
        } 
        if (arr[1] > 0) {
          change.push(arr);
        }
      }
       if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } 
     
     }
       return {
         status: "OPEN",
         change: change
       }
  }
  
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))