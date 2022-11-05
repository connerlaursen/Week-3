// TODO: What does 'this' refer to? global scope
console.log(this);

// TODO: What does 'this' refer to? local scope this
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// TODO: What will this log? 20
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// TODO: What will this log? It will log the initial investment times 1.15
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
