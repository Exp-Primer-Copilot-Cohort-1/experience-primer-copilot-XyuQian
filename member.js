function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        skills: ['JS', 'React', 'Node'],
        address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA'
        },
        getBirthYear: function() {
            return 2017 - this.age;
        }
    }
    return member;
}