
// const fileinput = document.querySelector(".file-input"),
//     filteroptions = document.querySelectorAll(".filter button"),
//     filternam = document.querySelector(".filter-info .name"),
//     filterValue = document.querySelector(".filter-info .value"),
//     filterslid = document.querySelector(".slider input"),
//     providimg = document.querySelector(".preview-img img"),
//     rotaroption = document.querySelector(".rotat button "),

//     choosimgebtn = document.querySelector(".choose-img");

// let brightness = "100", saturation = "100", inversion = "0", grayscale = "0";
// let rotate = 0, flipHorizontal = 1, flipVertical = 1;


// const applyFilter = () => {
//     ptovidimg.style.transform = `rotate(${rotate}deg)`
//     ptovidimg.style.filter = `brightness(${brightness}%)
//     saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
// }

// const loadimg = () => {
//     let file = fileinput.files[0];
//     if (!file) return;

//     ptovidimg.src = URL.createObjectURL(file);
//     ptovidimg.addEventListener("load", () => {
//         resetFilterBtn.click();
//         document.querySelector(".container").classList.remove("disable");
//     });
// }



// filteroptions.forEach(option => {
//     option.addEventListener("click", () => {
//         document.querySelector(".active").classList.remove("active");
//         option.classList.add("active");
//         filternam.innerText = option.innerText;

//         if (option.id === "brightness") {
//             filterslid.max = '200'
//             filterslid.value = brightness;
//             filterValue.innerText = `${brightness}%`;
//         } else if (option.id === "saturation") {
//             filterslid.max = '200'
//             filterslid.value = saturation;
//             filterValue.innerText = `${saturation}%`
//         } else if (option.id === "inversion") {
//             filterslid.max = '100'
//             filterslid.value = inversion;
//             filterValue.innerText = `${inversion}%`;
//         } else {
//             filterslid.max = '100'
//             filterslid.value = grayscale;
//             filterValue.innerText = `${grayscale}%`;
//         }
//     });
// });

// const updateFilter = () => {
//     filterValue.innerText = `${filterslid.value}%`;
//     const selectedFilter = document.querySelector(".filter .active");

//     if (selectedFilter.id === "brightness") {
//         brightness = filterslid.value;
//     } else if (selectedFilter.id === "saturation") {
//         saturation = filterslid.value;
//     } else if (selectedFilter.id === "inversion") {
//         inversion = filterslid.value;
//     } else {
//         grayscale = filterslid.value;
//     }
//     applyFilter();
// }
// rotaroption.forEach(option => {
//     option.addEventListener("click", () => {
//         if (option.id === "left") {
//             rotate -= 90;
//         } else if (option.id === "right") {
//             rotate += 90;
//         } else if (option.id === "horizontal") {
//             flipHorizontal = flipHorizontal === 1 ? -1 : 1;
//         } else {
//             flipVertical = flipVertical === 1 ? -1 : 1;
//         }
//         applyFilter();
//     });
// });

// filterslid.addEventListener("input", updateFilter);
// fileinput.addEventListener("change", loadimg);
// choosimgebtn.addEventListener("click", () => fileinput.click());



const fileinput = document.querySelector(".file-input"),
    filteroptions = document.querySelectorAll(".filter button"),
    filternam = document.querySelector(".filter-info .name"),
    filterValue = document.querySelector(".filter-info .value"),
    filterslid = document.querySelector(".slider input"),
    restfilrrerbtn = document.querySelector(".reset-filter"),
    rotaroption = document.querySelectorAll(".rotate button"),
    providimg = document.querySelector(".preview-img img"),
    saveimgebtn = document.querySelector(".save-img "),

    choosimgebtn = document.querySelector(".choose-img")

let brightness = 100, saturation = 100, inversion = 0, grayscale = 0;
let rotate = 0, flipHorizontal = 1, flipVertical = 1;

const loadimg = () => {
    let file = fileinput.files[0];
    if (!file) return;
    providimg.src = URL.createObjectURL(file);
    providimg.addEventListener("load", () => {
        restfilrrerbtn.click()
        document.querySelector(".container").classList.remove("disable");
    });
}

const applyFilter = () => {
    providimg.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`;
    providimg.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
}

filteroptions.forEach(option => {
    option.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        option.classList.add("active");
        filternam.innerText = option.innerText;

        if (option.id === "brightness") {
            filterslid.max = "200";
            filterslid.value = brightness;
            filterValue.innerText = `${brightness}%`;
        } else if (option.id === "saturation") {
            filterslid.max = "200";
            filterslid.value = saturation;
            filterValue.innerText = `${saturation}%`
        } else if (option.id === "inversion") {
            filterslid.max = "100";
            filterslid.value = inversion;
            filterValue.innerText = `${inversion}%`;
        } else {
            filterslid.max = "100";
            filterslid.value = grayscale;
            filterValue.innerText = `${grayscale}%`;
        }
    });
});

const updateFilter = () => {
    filterValue.innerText = `${filterslid.value}%`;
    const selectedFilter = document.querySelector(".filter .active");

    if (selectedFilter.id === "brightness") {
        brightness = filterslid.value;
    } else if (selectedFilter.id === "saturation") {
        saturation = filterslid.value;
    } else if (selectedFilter.id === "inversion") {
        inversion = filterslid.value;
    } else {
        grayscale = filterslid.value;
    }
    applyFilter();
}

rotaroption.forEach(option => {
    option.addEventListener("click", () => {
        if (option.id === "left") {
            rotate -= 90;
        } else if (option.id === "right") {
            rotate += 90;
        } else if (option.id === "vertical") {
            flipHorizontal = flipHorizontal === 1 ? -1 : 1;
        } else {
            flipVertical = flipVertical === 1 ? -1 : 1;
        }
        applyFilter();
    });
});

const restfilter = () => {
    brightness = 100; saturation = 100; inversion = 0; grayscale = 0;
    rotate = 0; flipHorizontal = 1; flipVertical = 1;
    filteroptions[0].click()
    applyFilter();
}
const saveimg = () => {
    const canves = document.createElement("canvas")
    const ctx = canves.getContext("2d")
    canves.width = providimg.naturalWidth
    canves.height = providimg.naturalHeight
    ctx.filter = `brightness(${brightness}%) saturate(${saturation}%) 
    invert(${inversion}%)
     grayscale(${grayscale}%)`;
    ctx.scale(flipHorizontal, flipVertical)
    ctx.translate(canves.width / 2, canves.height / 2)
    if (rotate !== 0) {
        ctx.rotate(rotate * Math.PI / 180)
    }
    ctx.drawImage(providimg, -canves.width / 2, -canves.height / 2, canves.width, canves.height)

    const link = document.createElement("a")
    link.download = "imagezh.jpg"
    link.href = canves.toDataURL()
    link.click()

}


fileinput.addEventListener("change", loadimg);
filterslid.addEventListener("input", updateFilter);

restfilrrerbtn.addEventListener("click", restfilter);
saveimgebtn.addEventListener("click", saveimg);
choosimgebtn.addEventListener("click", () => fileinput.click());