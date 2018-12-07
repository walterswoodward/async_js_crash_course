const promise1 = Promise.resolve("Bello");
const promise2 = 21;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "That's All Folks!");
});
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res =>
  res.json()
);

Promise.all([promise1, promise2, promise3, promise4])
.then(values =>
  console.log("From Promise.all()...", values)
);
