/*const { default: axios } = require("axios");*/
/*GNews API KEY:51f3baf690408212bb314fb13198b18d */

/*NewsData*/
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 10) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})
var app = new Vue({
    el: '#thumb-case',
    data: {
        title: [],
        img: [],
        description: [],
        date: [],
        imgIndex: 0,
        headlineTitle: [],
        headlineImage: []

    },
    methods: {
        Headline: function() {
            var self = this;
            axios.get('https://gnews.io/api/v4/top-headlines?token=51f3baf690408212bb314fb13198b18d')
                .then(function(response) {
                    let i = response.data.articles.length;

                    for (let f = 0; f < i; f++) {
                        let hI = response.data.articles[f].image;
                        let hT = response.data.articles[f].title;
                        self.headlineImage.push(hI);
                        self.headlineTitle.push(hT);
                    }
                    console.log(self.headlineImage, self.headlineTitle);
                })
                .catch(function(error) {
                    console.log(error);
                })
        },
        Article: function() {
            var self = this;
            axios.get('https://gnews.io/api/v4/search?q=example&token=51f3baf690408212bb314fb13198b18d')
                .then(function(response) {
                    let i = response.data.articles.length;

                    for (let f = 0; f < i; f++) {
                        let count = response.data.articles[f].image;
                        let h2 = response.data.articles[f].title;
                        let dsc = response.data.articles[f].description;
                        let time = response.data.articles[f].publishedAt;
                        self.img.push(count);
                        self.title.push(h2);
                        self.description.push(dsc);
                        self.date.push(time);
                    }
                })
                .catch(function(error) {
                    console.log(error);
                })
        },
        prev: function() {
            let len = this.headlineImage.length;
            if (this.imgIndex === 0) {
                this.imgIndex = len - 1;
            } else {
                this.imgIndex--;
            }


        },
        next: function() {
            let len = this.headlineImage.length;
            if (this.imgIndex === len - 1) {
                this.imgIndex = 0;
            } else {
                this.imgIndex++;
            }
        }
    }
})
app.Article();
app.Headline();