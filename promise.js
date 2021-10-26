
// //Promise
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     //   reject('foo');
//     throw new Error('foo');
//     }, 300);
//   });
  
//   myPromise.then((value)=>{
//     console.log(value)
//   },(error)=>{
//     console.log(error , "rejected")
//   }).catch((error) => {
//       console.log(error,"catched")
// }
// );
  

// function getUserById(id) {
//     if (typeof id !== 'number' || id <= 0) {
//         throw new Error('Invalid id argument');
//     }

//     return new Promise((resolve, reject) => {
//         a = 1/0;
//         resolve({
//             id: id,
//             username: 'admin'
//         });
//     });
// }

// try {
//     getUserById(1)
//         .then(user => console.log(user.username))
//         .catch(err => console.log(`Caught by .catch ${error}`));
// } catch (error) {
//     console.log(`Caught by try/catch ${error}`);
// }

// let authorized = false;

// function getUserById(id) {
//     return new Promise((resolve, reject) => {
//         if (!authorized) {
//             throw new Error('Unauthorized access to the user data');
//         }

//         resolve({
//             id: id,
//             username: 'admin'
//         });
//     });
// }

// try {
//     getUserById(10)
//         .then(user => console.log(user.username))
//         .catch(err => console.log(`Caught by .catch ${error}`));
// } catch (error) {
//     console.log(`Caught by try/catch ${error}`);
// }


console.log("start")


let getdata = function(){
    return new Promise((resolve, reject) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            resolve(xhttp.responseText);
            }
        };
        xhttp.open("GET", "https://reqres.in/api/users?page=2", true);

        xhttp.send();
    });
}

console.log("between")

getdata().then((value)=>{
    // console.log(value);
})


console.log("end")

async function hello() {
    return await Promise.resolve("Hello");
  };
  
hello().then(alert);