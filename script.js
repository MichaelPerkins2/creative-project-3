document
  .getElementById("search-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const value = document.getElementById("search-input").value;
    if (value === "") return;
    console.log(value);

    const url = "https://imdb-api.com/en/API/SearchMovie/k_r66f91z7/" + value;

    const url2 = "https://imdb-api.com/en/API/SearchSeries/k_r66f91z7/" + value;

    // For Movies
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(json);

        let results = "";
        results += `<h1 style="margin: 2em 0;">Search Results</h1>
                            <hr>
                            <h2>Movies</h2>
                            <hr>`;
        for (let i = 0; i < json.results.length; i++) {
          results += `<div id="app" class="container">
                            <div class="row">
                                <div class="col">
                                    <h3>Title: <strong>${json.results[i].title}</strong></h4> 
                                    <h4>Description: <em>${json.results[i].description}</em></h4>
                                    <h5><a href="">Our Review:</a> Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. Ut enim ad minim veniam...</h5>
                                    <br>
                                    
                                </div>

                            </div>
                            <hr>
                        </div>
                        `;
        }
{/* <button v-on:click="addToCart(${json.results[i]})">Add to Cart</button> */}

        document.getElementById("main").innerHTML = "";
        document.getElementById("movieResults").innerHTML = results;
      });

    // For TV Shows
    fetch(url2)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(json);

        let results = "";
        results += `<h2>TV Shows</h2>
                            <hr>`;
        for (let i = 0; i < json.results.length; i++) {
          results += `<div class="container">
                            <div class="row">
                                <div class="col">
                                    <h3>Title: <strong>${json.results[i].title}</strong></h4> 
                                    <h4>Description: <em>${json.results[i].description}</em></h4>
                                    <h5><a href="">Our Review:</a> Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. Ut enim ad minim veniam...</h5>
                                </div>
                                <div class="image-container col">
                                    <img class="search-img" src="${json.results[i].image}">
                                </div>
                            </div>
                            <hr>
                        </div>
                        `;
        }
        document.getElementById("tvResults").innerHTML = results;
      });
  });

let mock = [
  {
    id: 1,
    name: "Scream (2022)",
    price: "$14.99",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/61df194157cdb1738234b4ed/Scream--sequel--review--Wes-Craven--Scream-5--horror--Courteney-Cox--Neve-Campbell-/960x0.jpg?fit=bounds&format=jpg&width=960",
  },
  {
    id: 2,
    name: "The Batman",
    price: "$14.99",
    image: "https://i.redd.it/10rwnaszcpv71.jpg",
  },
  {
    id: 3,
    name: "Free Guy",
    price: "$14.99",
    image:
      "https://www.johnmcdonald.net.au/wp-content/uploads/2021/08/Screen-Shot-2021-08-11-at-12.58.19-pm.png",
  },
  {
    id: 4,
    name: "Tragedy of Macbeth",
    price: "$14.99",
    image:
      "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/12/tragedy-of-macbeth-what-we-know.jpg",
  },
  {
    id: 5,
    name: "The Lord of the Rings: The Rings of Power",
    price: "$29.99",
    image:
      "https://www.joblo.com/wp-content/uploads/2022/02/the-lord-of-the-rings-the-rings-of-power-posters.jpg",
  },

  {
    id: 6,
    name: "Spider-man: No Way Home",
    price: "$14.99",
    image:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_hero_03_opt.jpg",
  },
  {
    id: 7,
    name: "Tom & Jerry (2021)",
    price: "$14.99",
    image:
      "https://i.pinimg.com/736x/b5/98/0e/b5980e001d4553875fa63b037c9efe66.jpg",
  },
  {
    id: 8,
    name: "Halo",
    price: "$29.99",
    image: "https://cdn.mos.cms.futurecdn.net/pGyDmdniqHURMK2tN3Kh56.jpg",
  },
  {
    id: 9,
    name: "Peaky Blinders",
    price: "$29.99",
    image:
      "https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg",
  },
  {
    id: 10,
    name: "Squid Game",
    price: "$29.99",
    image:
      "https://images.indianexpress.com/2021/10/Suid-Game-Netflix-1200by667.jpg",
  },
  {
    id: 11,
    name: "Yellowstone",
    price: "$29.99",
    image: "https://flxt.tmsimg.com/assets/p16780458_b_h8_aa.jpg",
  },
  {
    id: 12,
    name: "Dune",
    price: "$14.99",
    image: "https://ntvb.tmsimg.com/assets/p16645155_v_h8_ae.jpg?w=1280&h=720",
  },
  {
    id: 13,
    name: "The Lost City",
    price: "$14.99",
    image:
      "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/12/the-lost-city-poster-social-featured.jpg",
  },
  {
    id: 14,
    name: "Foundation",
    price: "$29.99",
    image:
      "https://hypeabout.com/wp-content/uploads/2021/10/foundation-tv-show.webp",
  },
  {
    id: 15,
    name: "Turning Red",
    price: "$14.99",
    image:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0C2D94D36B55CEB8E3F77F2A94D208216330D18933F3F1AB8D5DE7C912E67A9D/scale?width=1200&aspectRatio=1.78&format=jpeg",
  },
  {
    id: 16,
    name: "Coda",
    price: "$14.99",
    image:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/7DD2/production/_123901223_2hgjk0t.jpg",
  },
  {
    id: 17,
    name: "Gone with the Wind",
    price: "$14.99",
    image:
      "https://in2english.net/wp-content/uploads/2020/02/gone-with-the-wind.jpg",
  },
  {
    id: 18,
    name: "Chernobyl",
    price: "$29.99",
    image:
      "https://hbomax-images.warnermediacdn.com/images/GXJvkMAU0JIG6gAEAAAIo/tileburnedin?size=1280x720&partner=hbomaxcom&v=59460adf37209e83294816bba00f6842&language=en-us&host=art-gallery.api.hbo.com&w=Infinity",
  },
  {
    id: 19,
    name: "The Ring",
    price: "$14.99",
    image:
      "https://images.squarespace-cdn.com/content/v1/577820283e00be9cc0dad67a/1486270551629-XGRPUYQ8KWFL98HZ2YKS/rings+-+3.jpg?format=2500w",
  },
  {
    id: 20,
    name: "The Godfather",
    price: "$14.99",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  },
  {
    id: 21,
    name: "American Sniper",
    price: "$14.99",
    image: "https://wallpapercave.com/wp/wp5324880.jpg",
  },
];

var app = new Vue({
  el: "#app",
  data: {
    movies: mock,
    cart: [],
    value: true,
  },
  methods: {
    addToCart(item) {
      this.$root.$data.cart.push(item);
      console.log(this.$root.$data.cart);
    },
    removeFromCart(movie) {
      this.$root.$data.cart.splice(this.$root.$data.cart.indexOf(movie), 1);
      console.log(this.$root.$data.cart);
    },
    cartEmpty() {
      if (this.$root.$data.cart.length === 0) {
        console.log(this.$root.$data.cart);
        return true;
      } else {
        console.log(this.$root.$data.cart);
        return false;
      }
    },
  },
});
