const person = {
    name : 'akki',
    getFullname : function(){
        return person.name;
    }
};
const response = person.getFullname;
console.log(response());