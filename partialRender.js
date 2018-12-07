

  console.log("Reading partialRender.js begun...", performance.now());

  let users1 = [
    { name: "Jackson", password: "2%l2u4Fd633B" },
    { name: "George", password: "vP3sSu2^C2Hw" }
  ];

  console.log("users1 array added...", performance.now());

  function getUsers() {
    setTimeout(() => {
      let output = "";
      users1.forEach(user => {
        output += `<li>${user.name}</li>`;
      });
      document.getElementById("partial").innerHTML = output;
      console.log("getUsers finished executing...", performance.now());
    }, 1000);
    console.log("getUsers read...", performance.now());
  }

  function createUser(user) {
    setTimeout(() => {
      users1.push(user);
      console.log("createUser finished executing...", performance.now());
      // 2000 is just meant to simulate the very real scenario of a function that
      // you NEED to finish executing (e.g. createUser) before a function another
      // function (e.g. getUsers), but since the first is SLOWER than the second,
      // you end up rendering only half of your data!
    }, 2000);
    console.log("createUser read...", performance.now());
  }

  createUser({ name: "Eastwood", password: "H4fj@Lu3DU%o" });
  getUsers();

