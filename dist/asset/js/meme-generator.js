const generate_meme_btn = document.querySelector(
    ".meme-generator .generate-meme-btn"
);
const meme_image = document.querySelector(".meme-generator img");
const meme_title = document.querySelector(".meme-generator .meme-title");
const meme_author = document.querySelector(".meme-generator .meme-author");

const update_details = (url, title, author) => {
    meme_image.setAttribute("src", url);
    meme_title.innerHTML = title;
    meme_author.innerHTML = `Meme by: ${author}`;
};

const generate_meme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes").then((response) => response.json()).then((data) => {
        update_details(data.url, data.title, data.author);
    });
};

generate_meme_btn.addEventListener("click", generate_meme);

generate_meme();