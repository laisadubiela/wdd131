document.addEventListener("DOMContentLoaded", function() {
    const currentYearElement = document.querySelector("#currentyear");
    const lastModifiedElement = document.querySelector("#lastModified");

    const today = new Date();
    currentYearElement.textContent = today.getFullYear();

    const lastModified = document.lastModified;
    lastModifiedElement.textContent = "Last Modified: " + lastModified;
});

document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector("button");
    const navigation = document.querySelector("nav");
    const navLinks = document.querySelectorAll("a");


    menuButton.addEventListener("click", function() {
        navigation.classList.toggle("open");
        menuButton.textContent = menuButton.textContent === "☰" ? "✖" : "☰";
        navigation.style.display = navigation.style.display === "flex" ? "none" : "flex";
        navLinks.forEach(link => {
            link.style.fontSize = "20px";
        });
    });
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:"images/aba-nigeria-temple.webp"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "images/manti-temple.webp"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "images/payson-utah-temple.webp"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "images/yigo_guam.webp"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "images/washington_dc.webp"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "images/lima-peru-temple.webp"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "images/mexico-city-temple.webp"
    },
    {
        templeName: "São Paulo Brazil Temple",
        location: "São Paulo, Brazil",
        dedicated: "1978, November, 2",
        area: 59246,
        imageUrl: "images/sao-paulo-temple.webp"
    },
    {
        templeName: "Campinas Brazil Temple",
        location: "Campinas, Brazil",
        dedicated: "2002, May, 17",
        area: 48100,
        imageUrl:
        "images/campinas-brazil-temple.webp"
    },
    {
        templeName: "Brasília Brazil Temple",
        location: "Brasilia, Brazil",
        dedicated: "2023, Septemer, 17",
        area: 25000,
        imageUrl:
        "images/brasilia-brazil-temple.webp"
    },
];

createTempleCard(temples);

function createTempleCard(temples) {
    document.querySelector(".cards").innerHTML = "";
    temples.forEach(Temple => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let location = document.createElement('p');
        let dedicated = document.createElement('p');
        let size = document.createElement('p');
        let img = document.createElement('img');

        name.textContent = Temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${Temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${Temple.dedicated}`;
        size.innerHTML = `<span class="label">Area:</span> ${Temple.area} sq ft`;
        img.setAttribute("src", Temple.imageUrl);
        img.setAttribute("alt", `${Temple.templeName}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(size);
        card.appendChild(img);

        document.querySelector(".cards").appendChild(card);

    })
}

const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");
const homeLink = document.querySelector("#Home");
const heading = document.getElementById("h2");

oldLink.addEventListener("click", () => {
    createTempleCard(temples.filter((temple) => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    }));
    heading.innerHTML = "Old";
})

newLink.addEventListener("click", () => {
    createTempleCard(temples.filter((temple) => { 
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year > 2000;
    }));
    heading.innerHTML = "New"
})

largeLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
    heading.innerHTML = "Large"
})

smallLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area <= 90000));
    heading.innerHTML = "Small"
})

homeLink.addEventListener("click", () => {
    createTempleCard(temples);
    heading.innerHTML = "Home"
})

