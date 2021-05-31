function userCard(number) {


     let balance = 100;
      let transactionLimit = 100;
     let  historyLogs = [];
      let key;
      if (number <= 3 && number >= 1) {
          key = number;
      }
      else {
          console.log('key is underfined');
      }

      function putCredits(many) {
    let opr = new Date();
    let date = opr.toLocaleDateString();
    let time = opr.toLocaleTimeString();

          balance += many;
          history('input credits',  many, date +' , '+ time);

    return balance;
      }

      function takeCredits(many) {
         if (balance > balance - many && many < transactionLimit) {

             let opr = new Date();
             let date = opr.toLocaleDateString();
             let time = opr.toLocaleTimeString();
             balance -= many;
             history('out credits',  many, date +' , '+ time );
         }
         else {
             console.log('Error');
         }
          return balance;

      }
      
      function setTransactionLimit(sum) {
          let opr = new Date();
          let date = opr.toLocaleDateString();
          let time = opr.toLocaleTimeString();

           transactionLimit = sum;

          history('\n new transaction limit',  transactionLimit, date +' , '+ time );


          return transactionLimit;
      }

      function transferCredits(kilCredits, card) {
          let opr = new Date();
          let date = opr.toLocaleDateString();
          let time = opr.toLocaleTimeString();
          let cred = card*1.005;
      if (cred <= transactionLimit) {
          card.putCredits(cred);
          history('\n  input transfer credits',  kilCredits, date +' , '+ time );
      }
      else {
          console.log('error');
      }
      }

      function history(opType, credits, opTime) {
                historyLogs.push({
                    opType, credits, opTime
                })
      }

      
      
     function getCardOption() {
         return `balance : ${balance} \n`+
             `transaction limit : ${transactionLimit} \n`+
         `history : ${JSON.stringify(historyLogs)} \n`+
         `key : ${key}`
     }
      function getKey() {
return key
      }

     return  {
          getCardOption,
         putCredits,
         takeCredits,
         setTransactionLimit,
         transferCredits,
         getKey
    }
}

let userCard1 = userCard(1);
let userCard2 = userCard(2);

class UserAccount {
    constructor(name) {
        this.name = name;
        this.card = [];
    }
}

UserAccount.prototype.addCard = function () {
    if (this.card.length < 3) {
        this.card.push(new userCard(this.card.length+1));
    } else {
        console.log('limit end');
    }
}
UserAccount.prototype.getInfo = function() {
    console.log(this);
}
UserAccount.prototype.getCardByKey = function(num) {

    return this.card.find(value => value.getKey() === num); //
}


let user1 = new  UserAccount('Nick');
user1.addCard();
user1.getInfo();



 console.log('__________');

 let card1 = user1.getCardByKey(1);
 card1.putCredits(4000);
 card1.setTransactionLimit(2300);
 console.log('__________');
card2 = user1.getCardByKey(2);
card1.transferCredits(40, card2);

console.log(card2.getCardOption());