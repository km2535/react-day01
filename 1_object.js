const student = {
  apple: "김사과",
  banana: "반하나",
  orange: "오렌지",
};

console.log(student);
const { apple, banana, orange, oj = "오징어" } = student;
console.log(apple);
console.log(banana);
console.log(orange);
console.log(oj);

const user = ["김사과", "반하나", "오렌지"];
const [kim, ban, oh] = user;

console.log(kim);
console.log(ban);
console.log(oh);

const dog = {
  name: "luci",
  age: 25,
  weight: 3.5,
};

function print({ name, age, weight }) {
  console.log(
    `우리집 강아지 이름은 ${name}이고 나이는 ${age} 몸무게는 ${weight}`
  );
}

print(dog);
