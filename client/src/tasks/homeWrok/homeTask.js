const arrayForDto = [
  { name: 'Maxim', id: 'uuid1', online: true },
  { name: 'Andrew', id: 'uuid2', online: false },
  { name: 'Alex', id: 'uuid3', online: true },
  { name: 'Peter', id: 'uuid4', online: false },
];
const dto = { department: 'SMB', number: 0 };
// Оставить только true  и добавить к user все ключи из dto

// METHOD 1 **************************************************************
// const arrayWithDto = arrayForDto
//   .filter((e) => e.online === true)
//   .map((arr) => ({
//     ...arr,
//     ...dto,
//   }));
// console.log(arrayWithDto);

// METHOD 2 **************************************************************
// const arrayWithDto = arrayForDto.filter((e) => e.online === true);
// for (const i of arrayWithDto) {
//   Object.assign(i, dto);
// }
// console.log(arrayWithDto);

// METHOD 3 **************************************************************
// const arrayWithDto = arrayForDto.filter((e) => e.online === true);
// for (let i = 0; i < arrayWithDto.length; i += 1) {
//   Object.assign(arrayWithDto[i], dto);
// }
// console.log(arrayWithDto);

// METHOD 4 **************************************************************
// const arrayWithDto = arrayForDto.filter((e) => e.online === true);
// for (let i = 0; i < arrayWithDto.length; i += 1) {
//     arrayWithDto[i] = {...arrayWithDto[i], ...dto}
// }
// console.log(arrayWithDto);

const users = [
  { name: 'Viktor', age: 20 },
  { name: 'Alex', age: 30 },
  { name: 'Dmitry', age: 40 },
];
const usersDone = [{ viktor: 20 }, { alex: 30 }, { dmitry: 40 }];

// const users = [{ viktor: 20 }, { alex: 30 }, { dmitry: 40 }];
// age >= 30;

// const updateUsers = users.filter((e) => e.age >= 30);
// const makeObject = (array) => {
//   const result = [];
//   for (let i = 0; i < array.length; i += 1) {
//     result.push(Object.values(array[i]));
//   }
//   return Object.fromEntries(result);
// };
// console.log(makeObject(updateUsers));

// const updateUsers = users.filter((e) => e.age >= 30);
// const makeArr = updateUsers.map((el) => ({ [el.name]: el.age }));
// console.log(makeArr);

const updateUsers = users.filter((e) => {
  if (e.age >= 30) {
    updateUsers.map((e) => ({ [e.name]: e.age }));
  }
});
console.log(updateUsers);