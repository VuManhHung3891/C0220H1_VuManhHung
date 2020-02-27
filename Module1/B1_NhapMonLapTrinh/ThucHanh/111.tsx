let Apple = function () {
    this.weight = 10;
    this.decrease = function () {
        if(this.weight > 0){
            this.weight--;
        }
    };
    this.isEmty = function () {
        return false;
    };
    this.getWeight = function () {
        return this.weight
    };
}

let Human = function () {
    this.name = "";
    this.gender = true;
    this.weight = 0;

    this.isMale = function () {
        return this.gender;
    };
    this.setGender = function (gender) {
        this.gender = gender;
    };
    this.checkApple = function (apple) {
        return apple.weight > 0;
    }
    this.eat = function (apple) {
        if(this.checkApple(apple)){
            this.weight++;
            apple.decrease();
        }

    };
    this.say = function (say) {
        document.write(say);
    };
    this.getName = function () {
        return this.name
    };
    this.setName = function (name) {
        this.name = name;
        return this.name;
    };
    this.setWeight = function (weight) {
        this.weight = weight;
        return this.weight
    };
    this.getWeight = function () {
        return this.weight;
    }
}

let apple = new Apple();
document.write(apple.getWeight());

let adam = new Human();

adam.setName("Adam");
document.write(adam.getName());
adam.setWeight(60);
adam.getWeight();
adam.say("may muon an Tao khong");
adam.eat(apple);
adam.eat(apple);adam.eat(apple);
adam.eat(apple);adam.eat(apple);
console.log(adam.getWeight());
console.log(apple.getWeight());


let eva = new Human();
eva.setName("Eva");
document.write(eva.getName());
eva.setWeight(45);
eva.getWeight();
eva.say("Tao khong muon");
eva.eat(apple);
eva.eat(apple);eva.eat(apple);
eva.eat(apple);eva.eat(apple);
eva.eat(apple);eva.eat(apple);
eva.eat(apple);eva.eat(apple);
document.write(eva.getWeight());
document.write(apple.getWeight());
document.write(adam.getName());
adam.say("Sao may an het cua tao");