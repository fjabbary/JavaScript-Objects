class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  displayBookInfo() {
    console.log(this);
  }
}

/*
const book1 = new Book('Math', 'John Doe', 120);
book1.displayBookInfo()
*/



// ==================== Objects and Math in JavaScript ====================

class Account {
  constructor(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
  }

  showBalance(){
    console.log(`Current balance is $${this.balance}`);
  }

  depositFund(amount) {
    this.balance += amount;
    console.log(`$${amount} deposited to this account`);
  }

  withdrawFund(amount) {
    this.balance -= amount;
    console.log(`$${amount} withdrawn from this account`);
  }

  calCompoundInterest(numOfYears) {
    console.log('==========================================');
    const rate = parseFloat(prompt('What is the interest rate in percentage? \nEnter number only. E.g. if the interest rate is 8%, enter 8')) / 100;
    const accumulatedBalance = Math.round((this.balance) * (1 + rate)**numOfYears);
    console.log(`Accumulated balance after ${numOfYears} years is $${accumulatedBalance}`);

    const compoundInterest = accumulatedBalance - this.balance
    console.log(`Balance change due to interest rate is $${compoundInterest}`);
  }
}


/*
const account1 = new Account('123', 0, 'John Doe')
account1.showBalance()
account1.depositFund(1200)
account1.withdrawFund(200)
account1.showBalance()

account1.calCompoundInterest(3)
*/