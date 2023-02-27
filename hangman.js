window.addEventListener('load', function () {
  var solution = { "first": 's', "second": 'n', "third": 'a', "fourth": 'k', "fifth": 'e' }
  console.log(Object.values(solution));
  let b_value;
  let counter = 7;


  function clicked() {
    console.log(b_value)
    return b_value;
  }

  for (let i = 1; i <= 16; i++) {
    const button = document.getElementById(`button${i}`);
    button.addEventListener('click', function () {
      const char = button.textContent;
      let c = document.getElementsByClassName("charA");
      b_value = char;

      for (let j = 0; j < 5; j++) {
        if (char == Object.values(solution)[j]) {
          c[j].textContent = char;
          counter = counter + 1;
        }
      }
      counter -= 1;
      if (counter != 7) {
        const sent = document.getElementById("count");
        sent.textContent = "you still have " + counter + " tries";
        if (counter == 0) {
          alert("you lose")
        }
      }
    });
  }


})