let timer = document.getElementById("timer");
let btnStart = document.getElementById("start");
let btnReset = document.getElementById("reset");
let ativo = false

btnStart.addEventListener("click", ()=>{
	ativo = !ativo
	if(ativo){
		btnStart.innerHTML = '<img src="img/pause.png" alt="pause">'
	}else{
		btnStart.innerHTML = '<img src="img/play-button.png" alt="play">'
	}
})
btnReset.addEventListener("click", ()=>{num=0; timer.innerHTML = "00:00:00";})


var num = 0;

timer.innerHTML = "00:00:00";

handlerTimer = setInterval(()=>{
	if(ativo){
		num++;
		timer.innerHTML = numToString(num);
	}
}, 1000);


function upNum() {
	
}

function numToString(num) {
    let nh = Math.floor(num / 3600);
    let res = num % 3600;
    let nm = Math.floor(res / 60);
    let ns = res % 60;

    const h = nh < 10 ? "0" + nh : nh;
    const m = nm < 10 ? "0" + nm : nm;
    const s = ns < 10 ? "0" + ns : ns;
    return h + ":" + m + ":" + s;
}
