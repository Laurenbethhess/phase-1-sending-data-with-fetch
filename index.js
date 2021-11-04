

//     function submitData(name, email) {
//         fetch("http://localhost:3000/users", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               Accept: "application/json",
//             },
//             body: JSON.stringify({
//                 name: `${name}`,
//                 email: `${email}`,
//             }),
//         })
//         .then(resp => resp.json())
//         .then(data => {
//             let newh1 = document.createElement('h1')
//             document.body.append(newh1)
//             newh1.innerhtml = data.id
//         })
//         .catch(error => {
//             let newError = document.createElement('h1')
//             newError.innerHTML = error.message
//             document.body.append(newError)
//           })
//     }

// submitData('Lauren', 'laurenbethhess@gmail.com')


function submitData(name, email) {
    const configurationObjects = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`,
        })
    }       
    return fetch("http://localhost:3000/users", configurationObjects)
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        let newh1 = document.createElement('h1')
        newh1.innerHTML = object.id;
        document.body.append(newh1)
    })
    .catch(function (error) {
        let newError = document.createElement('h1')
        newError.innerHTML = error.message
        document.body.append(newError)
      });
} 