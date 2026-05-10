const message = `I don’t even know if you’ll ever read this.\nBut if you do… I just want you to know, I still think about you sometimes.\n\nbtw happy birthday ya ell,I'm waiting for your birthday to come.niat loh aku wkwk.bingung meh tak tambahi opo, hbd ya ell btw gengsi nya turunin dong, yakalii aku chatt disek teruss Ihkk wkwk.happy birthday,all the best on your special day!many happy returns of the day,I always see you from a distance,turn to me if you want maybe?.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
