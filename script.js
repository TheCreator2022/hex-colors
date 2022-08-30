var color = [0, 0, 0, 0, 0, 0]
var docs = [
  document.getElementById("ra"),
  document.getElementById("rb"),
  document.getElementById("ga"),
  document.getElementById("gb"),
  document.getElementById("ba"),
  document.getElementById("bb"),
  document.getElementById("demo1"),
  document.getElementById("demo2"),
]
const hexa = "0123456789ABCDEF"
var result = () => "#" + hexa[Math.floor(color[0])] + hexa[Math.floor(color[1])] + hexa[Math.floor(color[2])] + hexa[Math.floor(color[3])] + hexa[Math.floor(color[4])] + hexa[Math.floor(color[5])]

function d(value, a) {
	color[a] += value
}

function update() {
	docs[0].innerText = color[0]
	docs[1].innerText = color[1]
	docs[2].innerText = color[2]
	docs[3].innerText = color[3]
	docs[4].innerText = color[4]
	docs[5].innerText = color[5]
	docs[6].innerText = result()
	docs[7].style.background = result ()
}

setInterval(update, 100)