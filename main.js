import "./styles/style.scss";

async function fetchData() {
    const r = await fetch("https://randomuser.me/api/");
    const data = await r.json();
    const user = data.results[0];
    return user;
}
const userData = await fetchData();
const nameDiv = document.querySelector(".name");
const name = `${userData.name.first}` + ` ` + `${userData.name.last}`;
nameDiv.innerHTML += name;
const p1 = document.querySelector(".p1");
// p1.innerHTML += name;
const image = document.getElementById("image");
image.setAttribute("src", `${userData.picture.large}`);
