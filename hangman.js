window.addEventListener('load', function () {
  var solution = { "first": 's', "second": 'n', "third": 'a', "fourth": 'k', "fifth": 'e' }
  console.log(Object.values(solution));
  let b_value;
  let counter = 5

  function clicked() {
    console.log(b_value)
  }

  for (let i = 1; i <= 16; i++) {
    const button = document.getElementById(`button${i}`);
    button.addEventListener('click', function () {
      const char = button.textContent;
      let c = document.getElementsByClassName("charA");
      b_value = char;
      for (let j = 0; j < 6; j++){
        if (char == Object.values(solution)[j]) {
          c[j].textContent = char;
        }
        else{
          alert("you still have ")
        }
      }
      clicked();
    });
  }


  /*if(char_butt5 == Object.values(solution)[0]){
    console.log("yes i did it");
  }*/

  /*butt1.addEventListener("click", function () {
    if (char_butt1 == Object.values(solution)[3]) {
      let a = document.getElementById("char4");
      a.textContent = char_butt1;
      console.log("yes i did it");
    }

  })

  butt2.addEventListener("click", function () {
    console.log(char_butt2);
  })

  butt3.addEventListener("click", function () {
    console.log(char_butt3);
  })

  butt4.addEventListener("click", function () {
    console.log(char_butt4);
  })

  butt5.addEventListener("click", function () {
    console.log(char_butt5);
  })

  butt6.addEventListener("click", function () {
    console.log(char_butt6);
  })

  butt7.addEventListener("click", function () {
    console.log(char_butt7);
  })

  butt8.addEventListener("click", function () {
    console.log(char_butt8);
  })

  butt9.addEventListener("click", function () {
    console.log(char_butt9);
  })

  butt10.addEventListener("click", function () {
    console.log(char_butt10);
  })

  butt11.addEventListener("click", function () {
    console.log(char_butt11);
  })

  butt12.addEventListener("click", function () {
    console.log(char_butt12);
  })

  butt13.addEventListener("click", function () {
    console.log(char_butt13);
  })

  butt14.addEventListener("click", function () {
    console.log(char_butt14);
  })

  butt15.addEventListener("click", function () {
    console.log(char_butt15);
  })

  butt16.addEventListener("click", function () {
    console.log(char_butt16);
  })*/



})