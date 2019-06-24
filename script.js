const msgCount = 3;

var acquariusMessages = ["Acquarius has mastered the art of ignoring people.", 
"Anyone ever called you 'impulsive?' Yeah...", 
"Famous Acquarius include Ellen DeGeneres, Charles Darwin, Shakira and Oprah Winfrey."];
var piscesMessages = ["Pisceans may get their feelings hurt easily because to them, there are no emotional boundaries. They feel practically everything.",
"A pisces hates being under pressure,and feeling worthless to those they care about.",
"Famous Pisces include: Albert Einstein, George Washington and Rihanna."];
var ariesMessages = ["Famous Aries include Charlie Chaplin, Emma Watson and Lady Gaga.",
"Aries often use their management skills and are truly the most idealistic, original, and successful sign of the Zodiac.",
"Aries love being the center of attention."];
var taurusMessages = ["Taurus is naturally suspicious of new situations or people.",
"Taurus are physical creatures in need of human contact in order to feel a real connection.",
"Famous Taurus include Queen Elizabeth II, Dwayne 'The Rock' Johnson and and Adele."];
var geminiMessages = ["Geminis are sharp individuals who love to meet new people and experience new situations.",
"Geminis are massive flirts at times...",
"Famous Geminis include Donald Trimp, Kanye West and Angelina Jolie."];
var cancerMessages =["Cancers are known to be particularly emotional signs.",
"Cancers are very protective of their friends and loved ones.",
"Famous cancers include Ariana Grande, Selena Gomez and Kevin Hart."];
var leoMessages = ["Leos are dramatic, confident, warm-hearted, and dominant.",
"They assume a leadership role in relationships and want a partner with self-awareness, reasoning, and the same level of intellect.",
"Famous Leos include Barack Obama, Kylie Jenner and Daniel Radcliffe."];
var virgoMessages = ["Virgos are doers - they organize very well.",
"Virgos have a high sense of duty and derive great pleasure from contributing to the life of others in a positive way.",
"Famous virgos include Beyonce, Michael Jackson and Nick Jonas."];
var libraMessages = ["Libras hate to see others in pain, but when if irritate a Libra, their temper can be destructive.",
"No need to give Libra orders. They won’t obey them anyway. ;)",
"Famous Libras include Eminem, Lil Wayne and Will Smith."];
var scorpioMessages = ["Scorpio is a long-term strategist, especially when it comes to relationships.",
"Scorpios experience each emotion with extreme intensity.",
"Famous Scorpios include Pablo Picasso, Hillary Clinton and Bill Gates."];
var sagittariusMessages = ["A Sagittarius hardly holds grudges. They are quick to forgive and move on.",
"Sagittarius are really good at reading people.",
"Famous Sagittariuses include Taylor Swift, Nicki Minaj and Jay-Z."];
var capricornMessages = ["Capricorns hold a serious demeanor. They do not believe in lose talk and casual meetings.",
"Although they lead with their serious side, once befriended they displaytheir funny, lighter side.",
"Famous Capricorns include David Bowie, Bradley Cooper and Mac Miller."];

function randomNum(){
	return Math.floor(Math.random() * msgCount);
};

function generateAcqMessage(){
	console.log("acq");
	var num = randomNum();
	var msg = acquariusMessages[num];
	document.getElementById("message").innerHTML = msg;
}

function generatePisMessage(){
	console.log("pis");
	var num = randomNum();
	var msg = piscesMessages[num];
	document.getElementById("message").innerHTML = msg;
}

function generateAriMessage(){
	console.log("ari");
	var num = randomNum();
	var msg = ariesMessages[num];
	document.getElementById("message").innerHTML = msg;
}

function generateTauMessage(){
	console.log("tau");
	var num = randomNum();
	var msg = taurusMessages[num];
	document.getElementById("message").innerHTML = msg;
}

function generateGemMessage(){
	console.log("gem");
	var num = randomNum();
	var msg = geminiMessages[num];
	document.getElementById("message").innerHTML = msg;
}

function generateCanMessage(){
	console.log("can");
	var num = randomNum();
	var msg = cancerMessages[num];
	document.getElementById("message").innerHTML = msg;
}

function generateLeoMessage(){
	console.log("leo");
	var num = randomNum();
	var msg = leoMessages[num];
	document.getElementById("message").innerHTML = msg;
}

function generateVirgMessage(){
	console.log("virg");
	var num = randomNum();
	var msg = virgoMessages[num];
	document.getElementById("message").innerHTML = msg;
}

function generateLibMessage(){
	console.log("lib");
	var num = randomNum();
	var msg = libraMessages[num];
	document.getElementById("message").innerHTML = msg;
}

function generateScoMessage(){
	console.log("sco");
	var num = randomNum();
	var msg = scorpioMessages[num];
	document.getElementById("message").innerHTML = msg;
}

function generateSagMessage(){
	console.log("sag");
	var num = randomNum();
	var msg = sagittariusMessages[num];
	document.getElementById("message").innerHTML = msg;
}

function generateCapMessage(){
	console.log("cap");
	var num = randomNum();
	var msg = capricornMessages[num];
	document.getElementById("message").innerHTML = msg;
}