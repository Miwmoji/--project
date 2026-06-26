const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");
const popupImg = document.getElementById("popup-img");
const popupGallery = document.getElementById("popup-gallery");
const closeBtn = document.getElementById("close");

// =======================
// DATA (เพิ่มรูปแล้ว)
// =======================
const foodDetails = {
    rosti: {
        title: "🥔 Rösti (เรอชติ)",
        text: "มันฝรั่งทอดกรอบสีทอง หอมชีส รสชาติกลมกล่อม นิยมรับประทานเป็นมื้อเช้า",
        images: [
            "https://mushroomtravelpage.b-cdn.net/wp-content/uploads/2023/01/Rosti01-1024x683.png"
        ]
    },

    fondue: {
        title: "🧀 Cheese Fondue",
        text: "ชีสละลายร้อน ๆ กินคู่ขนมปัง",
        images: [
            "https://www.th-hellomagazine.com/wp-content/uploads/2011/11/115257657_xl-scaled.jpg"
        ]
    },

    alpler: {
        title: "🍝 Älplermagronen",
        text: "มักกะโรนีอบชีสและมันฝรั่ง",
        images: [
            "https://mushroomtravelpage.b-cdn.net/wp-content/uploads/2023/01/Alpler01-1024x683.png"
        ]
    },

    berner: {
        title: "🍖 Berner Platte",
        text: "หมูรมควันและไส้กรอก",
        images: [
            "https://mushroomtravelpage.b-cdn.net/wp-content/uploads/2023/01/Berner01-1024x682.jpg"
        ]
    },

    raclette: {
        title: "🧀 Raclette",
        text: "ชีสละลายร้อน ๆ",
        images: [
            "https://www.cavabienmarche.com/wp-content/uploads/2022/06/ellena-mcguinness-sT1r3QCvor4-unsplash-1024x683.jpg"
        ]
    },

    papet: {
        title: "🌭 Papet Vaudois",
        text: "ไส้กรอกกับมันฝรั่งตุ๋น",
        images: [
            "https://cdn.vinteam.co.th/wp-content/uploads/2025/02/06152703/1000002432.jpg"
        ]
    },

    zurich: {
        title: "🥩 Zürcher Geschnetzeltes",
        text: "เนื้อลูกวัวราดซอสเข้มข้น",
        images: [
            "https://mushroomtravelpage.b-cdn.net/wp-content/uploads/2023/01/Ges01-1024x683.png"
        ]
    },

    risotto: {
        title: "🍚 Saffron Risotto",
        text: "ข้าวหญ้าฝรั่นหอมละมุน",
        images: [
            "https://mushroomtravelpage.b-cdn.net/wp-content/uploads/2023/01/Saffron01-1024x683.png"
        ]
    },

    zopf: {
        title: "🍞 Zopf",
        text: "ขนมปังถักเปียหอมเนย",
        images: [
            "https://i.3dmodels.org/uploads/preorder/zopf/zopf_1000_0001.jpg"
        ]
    },

    muesli: {
        title: "🥣 Bircher Muesli",
        text: "มูสลี่เพื่อสุขภาพ",
        images: [
            "https://www.gourmetandcuisine.com/Images/cooking/recipes/recipe_581detail.jpg"
        ]
    }
};

// =======================
// OPEN POPUP + GALLERY
// =======================
document.querySelectorAll(".more-btn").forEach(button => {
    button.addEventListener("click", () => {

        const food = button.dataset.food;
        const data = foodDetails[food];

        popupTitle.textContent = data.title;
        popupText.textContent = data.text;

        // รูปหลัก
        popupImg.src = data.images[0];

        // gallery
        popupGallery.innerHTML = "";
        data.images.forEach(img => {
            const el = document.createElement("img");
            el.src = img;

            el.onclick = () => {
                popupImg.src = img;
            };

            popupGallery.appendChild(el);
        });

        popup.style.display = "flex";
    });
});

// =======================
// CLOSE POPUP
// =======================
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});

// =======================
// ❄️ SNOW EFFECT
// =======================
function createSnow() {
    const snow = document.createElement("div");
    snow.classList.add("snowflake");
    snow.innerHTML = "❄";

    snow.style.left = Math.random() * 100 + "vw";
    snow.style.animationDuration = (Math.random() * 5 + 5) + "s";
    snow.style.fontSize = (Math.random() * 12 + 10) + "px";
    snow.style.opacity = Math.random();

    document.body.appendChild(snow);

    setTimeout(() => {
        snow.remove();
    }, 10000);
}

setInterval(createSnow, 200);