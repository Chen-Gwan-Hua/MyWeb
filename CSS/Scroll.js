/*var alink = document.getElementsByClassName("anchor")

for (var i = 0; i < alink.length; i++) {
    alink[i].addEventListener('click', function() {
        let anchor = this.getAttribute('href');
        console.log(anchor);
        let topPos = document.getElementById(anchor).offsetTop;
        window.scroll(0, topPos);
        return false;
    })
}*/

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 10) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

window.addEventListener('scroll', function() {
        let ySet = document.querySelector('#anchor1').offsetTop;
        const yLet = document.querySelector('.introduce')
        if (window.pageYOffset >= ySet - 100) {
            yLet.classList.add('active');
        } else {
            yLet.classList.remove('active');
        }
    })
    /*window.addEventListener('scroll', function() {
        let ySet = document.querySelector('#anchor1').offsetTop;
        const yLet = document.querySelector('.introduce')
        if (window.pageYOffset >= ySet - 100) {
            yLet.classList.add('active');
        } else {
            yLet.classList.remove('active');
        }
    })
    window.addEventListener('scroll', function() {
        let ySet = document.querySelector('#anchor1').offsetTop;
        const yLet = document.querySelector('.introduce')
        if (window.pageYOffset >= ySet - 100) {
            yLet.classList.add('active');
        } else {
            yLet.classList.remove('active');
        }
    })
    window.addEventListener('scroll', function() {
        let ySet = document.querySelector('#anchor1').offsetTop;
        const yLet = document.querySelector('.introduce')
        if (window.pageYOffset >= ySet - 100) {
            yLet.classList.add('active');
        } else {
            yLet.classList.remove('active');
        }
    })*/

// import axios from 'axios';

// axios.get('http://localhost:3000/users')
//     .then(function(response) {
//         console.log('11');
//         console.log(response.data); // api ???????????????????????????
//         console.log(response.status); // ????????? HTTP?????????
//         console.log(response.config); // ?????? Request ??? config
//     });
// axios({
//         method: 'get',
//         url: 'http://localhost:3000/users',
//         params: {
//             id: 3
//         }
//     })
//     .then(function(response) {
//         console.log(response.data);
//         console.log(response.status); // ????????? HTTP?????????
//         console.log(response.config);
//         alert('ewwe');
//     })
//     .catch(function(error) {
//         console.log('fall');
//     })
/* axios.post('http://localhost:3000/users', { // ???????????????????????????????????????
        firstName: 'Fred',
        lastName: 'Flintstone'
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    }); */

/*window.addEventListener('scroll', function() {
    let ySet = document.querySelector('#anchor1').offsetTop;
    const yLet = document.querySelector('.introduce')
    if (window.pageYOffset >= ySet - 100) {
        yLet.classList.add('active');
    } else {
        yLet.classList.remove('active');
    }
})
window.addEventListener('scroll', function() {
    let ySet = document.querySelector('#anchor1').offsetTop;
    const yLet = document.querySelector('.introduce')
    if (window.pageYOffset >= ySet - 100) {
        yLet.classList.add('active');
    } else {
        yLet.classList.remove('active');
    }
})
window.addEventListener('scroll', function() {
    let ySet = document.querySelector('#anchor1').offsetTop;
    const yLet = document.querySelector('.introduce')
    if (window.pageYOffset >= ySet - 100) {
        yLet.classList.add('active');
    } else {
        yLet.classList.remove('active');
    }
})*/