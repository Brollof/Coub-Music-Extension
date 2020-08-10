console.log("Coub Music Finder is running")

let authorTag = document.getElementsByClassName("musicAuthor")[0]
let titleTag = document.getElementsByClassName("musicTitle")[0]
let author = "", title = "";

if (authorTag) {
  author = authorTag.innerText;
}

if (titleTag) {
  title = titleTag.innerText;
}

let songString = `${author} - ${title}`;
console.log(`Song: ${songString}`);

let desc = document.getElementsByClassName("coub__description")[0]
let songTag = document.createElement("a");

songTag.className = "mySongTag"; // for debug purposes only

if (!author && !title) {
  songTag.innerText = "No title :("
} else {
  songTag.innerText = songString;
  songTag.href = `https://www.youtube.com/results?search_query=${songString}`;
  songTag.target = "blank";
  songTag.style.borderBottom = "1px solid darkred";
}

if (desc) {
  desc.appendChild(songTag);
}