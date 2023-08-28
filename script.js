const aboutUsImg = document.querySelector('.about-us-img')
console.log(aboutUsImg);

const intersectionObserver = new IntersectionObserver(entries => {
    const entry = entries[0]
    if (entry.isIntersecting) {
        entry.target.classList.remove('left')
    } else {
        entry.target.classList.add('left')
    }
})

intersectionObserver.observe(aboutUsImg)

const aboutCompany = document.querySelector('.about-company-img')
const intersectionObserverRight = new IntersectionObserver(entries => {
    const entry = entries[0]

    if (entry.isIntersecting) {
        entry.target.classList.remove('right')
    } else {
        entry.target.classList.add('right')
    }
})
intersectionObserverRight.observe(aboutCompany)