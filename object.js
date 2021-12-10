const Person = {
    firstName: "Rafi",
    lastName: "Salsabil",
    fullname: function() {
            return `${this.firstName} ${this.lastName}`;
        }
    }

    console.log(Person.fullname)

