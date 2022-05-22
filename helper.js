//2nd api token and id
//2nd api call: https://us-zipcode.api.smartystreets.com/lookup?auth-id=eb7538b5-5919-32f0-6b17-49fd3f2c486c&auth-token=uFq30XEzjgKix7TJo6KJ&zipcode=11365
let zip = {
id: "eb7538b5-5919-32f0-6b17-49fd3f2c486c",
token: "uFq30XEzjgKix7TJo6KJ",
// get the link to work with the api
// getZip: function(zip) {
//     fetch("https://us-zipcode.api.smartystreets.com/lookup?auth-id=" 
//     + this.id 
//     +"&auth-token=" 
//     + this.token 
//     +"&zipcode=" 
//     + zip)
//     .then((response) => response.json())
//     .then((data) => console.log(data)); 
    
//     },
    getZip: function(zip) {
        fetch("https://us-zipcode.api.smartystreets.com/lookup?key=122474228883153309&city=Sandyston&state=NJ&zipcode=07827&auth-id=eb7538b5-5919-32f0-6b17-49fd3f2c486c&auth-token=uFq30XEzjgKix7TJo6KJ")
        .then((response) => response.json())
        .then((data) => console.log(data));
    },

};