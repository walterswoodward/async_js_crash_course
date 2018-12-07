
  console.log("Reading async_await.js begun...", performance.now());

  let users5 = [
    { name: "Jackson", password: "2%l2u4Fd633B" },
    { name: "George", password: "vP3sSu2^C2Hw" }
  ];

  console.log("users5 array added...", performance.now());

  function getUsers5() {
    setTimeout(() => {
      let output = "";
      users5.forEach(user => {
        output += `<li>${user.name}</li>`;
      });
      document.getElementById("promise").innerHTML = output;
      console.log("getUsers5 finished executing...", performance.now());
    }, 1000);
    console.log("getUsers5 read...", performance.now());
  }

  function createUser(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        users5.push(user);
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

  async function init(){
    await   createUser({ name: "Eastwood", password: "H4fj@Lu3DU%o" });
    getUsers5();
  }

  init();