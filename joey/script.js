let projects = [
    {
        "title": "bellabot-mechanical-drawing.ai",
        "medium": "illustrator.exe",
        "description": `I traced an existing product image and applied gradients to recreate a photo-realistic illustration of the Bellabot.`,
        "image": "assets/projects/bellabot.png",
        "color": "skyblue"
    },
    {
        "title": "socal-meowdown.psd",
        "medium": "photoshop.exe",
        "description": `I merged multiple images together to create a book cover for a fake book called SoCal Meowdown.`,
        "image": "assets/projects/socal.png",
        "color": "orangered"
    },
    {
        "title": "edible.fig",
        "medium": "figma.com",
        "description": `Edible is a mobile app where users can track the groceries they need to buy as well as the groceries they have at home so that they can save money and the environment.`,
        "image": "assets/projects/edible.png",
        "color": "gold"
    },
    {
        "title": "viking-cat.psd",
        "medium": "photoshop.exe",
        "description": `Using the filter in photoshop, I restored color in an old black and white photo of a cat from the 1930s.`,
        "image": "assets/projects/viking-cat.jpg",
        "color": "lime"
    }
]

function displayProject(id) {
    var title = document.getElementById("project-title")
    var medium = document.getElementById("project-medium")
    var description = document.getElementById("project-description")
    var image = document.getElementById("project-image")
    var index

    if (id === "bellabot") {
        index = 0
    } else if (id === "socal") {
        index = 1
    } else if (id === "edible") {
        index = 2
    } else if (id === "viking-cat") {
        index = 3
    }

    title.innerHTML = projects[index].title
    title.style.color = projects[index].color
    medium.innerHTML = projects[index].medium
    description.innerHTML = projects[index].description
    image.src = projects[index].image
}

function showContent(id) {
    var content = document.getElementById(id)
    var display = content.style.display

    var arrow = document.getElementById(`${id}-arrow`)
    
    if (display == "none") {
        content.style.display = "flex"
        arrow.src = "assets/down.svg"
        console.log('hello')
    } else {
        content.style.display = "none"
        arrow.src = "assets/up.svg"
        console.log('goodbye')
    }
}

function showGridContent(id) {
    var content = document.getElementById(id)
    var display = content.style.display

    var arrow = document.getElementById(`${id}-arrow`)
    
    if (display == "none") {
        content.style.display = "grid"
        arrow.src = "assets/down.svg"
        console.log('hello grid')
    } else {
        content.style.display = "none"
        arrow.src = "assets/up.svg"
        console.log('goodbye grid')
    }
}

function sendback() {
    location.href = "/index.html"
}