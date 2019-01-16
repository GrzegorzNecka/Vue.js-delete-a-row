new Vue({
    el: "#app",
    data: {
        users: [
            {firstName: "Jan", lastName: "Kowalski", age: 32},
            {firstName: "Anna", lastName: "Nowak", age: 27},
            {firstName: "Tomasz", lastName: "Zielony", age: 40},
            {firstName: "Katarzyna", lastName: "Tomczyk", age: 34},
            {firstName: "Mariusz", lastName: "Klasa", age: 21}
        ]
    },
    methods: {
        remove: function(index) {

            this.users.splice(index, 1)
        }
    }
});