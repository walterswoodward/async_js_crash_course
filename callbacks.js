console.log("Reading callbacks.js begun...", performance.now());

let users2 = [
  { name: "Jackson", password: "2%l2u4Fd633B" },
  { name: "George", password: "vP3sSu2^C2Hw" }
];

console.log("users2 array added...", performance.now());

function getUsers() {
  setTimeout(() => {
    let output = "";
    users2.forEach(user => {
      output += `<li>${user.name}</li>`;
    });
    document.getElementById("callback").innerHTML = output;
    console.log("getUsers finished executing...", performance.now());
  }, 1000);
  console.log("getUsers read...", performance.now());
}

function createUser(user, callback) {
  setTimeout(() => {
    users2.push(user);
    console.log("createUser finished executing...", performance.now());
    
    callback()
  }, 2000);
  console.log("createUser read...", performance.now());
}

createUser({ name: "Eastwood", password: "H4fj@Lu3DU%o" }, getUsers);
