
  console.log("Reading promises.js begun...", performance.now());

  let users3 = [
    { name: "Jackson", password: "2%l2u4Fd633B" },
    { name: "George", password: "vP3sSu2^C2Hw" }
  ];

  console.log("users3 array added...", performance.now());

  function getUser3() {
    setTimeout(() => {
      let output = "";
      users3.forEach(user => {
        output += `<li>${user.name}</li>`;
      });
      document.getElementById("promise").innerHTML = output;
      console.log("getUser3 finished executing...", performance.now());
    }, 1000);
    console.log("getUser3 read...", performance.now());
  }

  function createUser(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        users3.push(user);
        console.log("createUser finished executing...", performance.now());

        const error = false;

        if (!error) {
          resolve();
        } else {
          reject({ error: "Something went wrong" });
        }
      }, 2000);
      console.log("createUser read...", performance.now());
    });
  }

  createUser({ name: "Eastwood", password: "H4fj@Lu3DU%o" })
    .then(getUser3)
    .catch(err => console.log(err));
