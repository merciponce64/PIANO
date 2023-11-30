const pianokeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelectorAll(".volume-slider input");
const keysCheckbok = document.querySelectorAll(".keys-checkbok input");

let allkeys = [];
let audio = new Audio(`tunes/a.wav`);

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;

    audio.play();

    const clickedkey = document.querySelector(`[data-key = "${key}"]`);
    clickedkey.classList.add("active");

    setTimeout(() =>{
        clickedkey.classList.remove("active")
    },150)
}

pianokeys.forEach(key =>{

    allkeys.push(key.dataset.key);

    //mediante el envento clik se ejecuta playtune
    key.addEventListener("click", () =>{
        playTune(key.dataset.key);
    })
})

const handleVolume = (e)=>{
    //captura el valor del volume
    audio.volume = e.target.value;
}

const showHidekeys = () =>{
    pianokeys.forEach(key.classList.toggle("hide"));
}

const pressedkey = (e) =>{
    if(allkeys.includes(e.key)) playTune(e.key);
}

keysCheckbok.addEventListener("click",showHidekeys);
volumeSlider.addEventListener("input",handleVolume);