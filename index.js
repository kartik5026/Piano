document.addEventListener('keydown',function(event){
    var val = event.key;
    play(val);
    btnAnimation(val);

})

function btnAnimation(key){
    document.querySelector("."+key).classList.add("playing");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("playing");
    },100);
}
function play(val){
    switch (val) {
        case 'a':
            var audio = new Audio("./piano-mp3/040.wav");
            audio.play();
            break;
        case 's':
            
            var audio = new Audio("./piano-mp3/041.wav");
            audio.play();
            break;

            case 'd':
            
            var audio = new Audio("./piano-mp3/042.wav");
            audio.play();
            break; 
            
            case 'f':
            
            var audio = new Audio("./piano-mp3/043.wav");
            audio.play();
            break;

            case 'g':
            
            var audio = new Audio("./piano-mp3/044.wav");
            audio.play();
            break;

            case 'h':
            
            var audio = new Audio("./piano-mp3/045.wav");
            audio.play();
            break;

            case 'j':
            
            var audio = new Audio("./piano-mp3/046.wav");
            audio.play();
            break;

            case 'k':
            
            var audio = new Audio("./piano-mp3/047.wav");
            audio.play();
            break;

            case 'l':
            
            var audio = new Audio("./piano-mp3/048.wav");
            audio.play();
            break;

            case 'm':
            
            var audio = new Audio("./piano-mp3/049.wav");
            audio.play();
            break;

            case 'w':
            
            var audio = new Audio("./piano-mp3/050.wav");
            audio.play();
            break;

            case 'e':
            
            var audio = new Audio("./piano-mp3/051.wav");
            audio.play();
            break;

            case 't':
            
            var audio = new Audio("./piano-mp3/052.wav");
            audio.play();
            break;

            case 'y':
            
            var audio = new Audio("./piano-mp3/053.wav");
            audio.play();
            break;

            case 'u':
            
            var audio = new Audio("./piano-mp3/055.wav");
            audio.play();
            break;

            case 'o':
            
            var audio = new Audio("./piano-mp3/055.wav");
            audio.play();
            break;

            case 'p':
            
            var audio = new Audio("./piano-mp3/056.wav");
            audio.play();
            break;

            
        default:
            break;
    }
}