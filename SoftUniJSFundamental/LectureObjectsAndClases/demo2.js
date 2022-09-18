class Student {
  constructor(name, grade, iq, sport) {
    this.name = name;
    this.grade = grade;
    this.Iq = iq;
    this.sport = sport;
    this.sniff = ()=> {console.log(`${this.name} practices ${this.sport}`)};
  }
}

let student = new Student('Boko', 5.50, 250, 'swiming');




let student2 = new Student('Poko', 4,50, 170, 'tenis');
let student3 = new Student('Misho', 2.45, 35, 'nothing');
let student4 = new Student('DvD', 3.45, 65, 'eating');



student4.sniff()

// class  Cat {
//     name = 'Kitrie';
//     breed = 'Porodista'
// }

// let firstCat = new Cat();
// firstCat.name = 'Gosho';
// let secondCat = new Cat();

