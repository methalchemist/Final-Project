//2nd api token and id
//2nd api call: https://us-zipcode.api.smartystreets.com/lookup?auth-id=eb7538b5-5919-32f0-6b17-49fd3f2c486c&auth-token=uFq30XEzjgKix7TJo6KJ&zipcode=11365
let zip = {
    id: "eb7538b5-5919-32f0-6b17-49fd3f2c486c",
    token: "uFq30XEzjgKix7TJo6KJ",
    // get the link to work with the api
    getZip: async function (zip) {
      const config = {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      };
      let myresponse = await axios.get(
        "https://us-zipcode.api.smartystreets.com/lookup?key=122539901345325978&zipcode=11365",
        config
      );
      // fetch("https://us-zipcode.api.smartystreets.com/lookup?auth-id=eb7538b5-5919-32f0-6b17-49fd3f2c486c&auth-token=uFq30XEzjgKix7TJo6KJ&zipcode=11365")
      // .then((response) => response.json())
      // .then((data) => console.log(data));
      console.log(myresponse);
    },
    displayZip: function(data) {
        const {city, state, zipcode} = data[0];
        console.log(city, state, zipcode);
        document.querySelector(".city").innerText = "Weather in " + city + ", " + state;
        document.querySelector(".zip").innerText = zipcode;
    },
  };