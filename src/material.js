class Material {
    constructor(name, price, amount, units) {
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.units = units;
    }

    useMaterial(amountUsed) {
        // console.log('==> amount used', amountUsed);
        // console.log('this amount', this.amount);
        // this.amount = 1
        this.amount = this.amount - amountUsed
        // return `You now have ${this.amount} ${this.units} of ${this.name} left.`


        if (amountUsed > this.amount) {
            console.log('test');
            return `You don\'t have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`
        } else {
            return `You now have ${this.amount} ${this.units} of ${this.name} left.`
        }
        
        

        // return `You don\'t have enough ${this.name}! Try using ${this.amount} bottles or less.`

        // if (amountUsed > this.amount) {
        //     console.log('check');
        //     return `You don\'t have enough ${this.name}! Try using 7 bottles or less.`
        // } 
        // else {
        //     return `You now have ${this.amount} ${this.units} of ${this.name} left.`
        // }
    // }
    }
};

module.exports = Material;
