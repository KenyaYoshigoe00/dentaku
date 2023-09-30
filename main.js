let hyouji = document.getElementById("result");

function click_number(input_number){
  if ( hyouji.innerHTML == 0){
    hyouji.innerHTML = input_number;
  }else{
    hyouji.innerHTML += input_number;
  }
}

function plus(){
  if (hyouji.innerHTML.endsWith("+") || hyouji.innerHTML.endsWith("-") 
    || hyouji.innerHTML.endsWith("*") || hyouji.innerHTML.endsWith("/")){
    let slice = hyouji.innerHTML.slice(0, -1);
    hyouji.innerHTML = slice + "+";
  }else{
    hyouji.innerHTML += "+";
  }
}

function minus(){
  if (hyouji.innerHTML.endsWith("+") || hyouji.innerHTML.endsWith("-") 
    || hyouji.innerHTML.endsWith("*") || hyouji.innerHTML.endsWith("/")){
    let slice = hyouji.innerHTML.slice(0, -1);
    hyouji.innerHTML = slice + "-";
  }else{
    hyouji.innerHTML += "-";
  }
}

function times(){
  if (hyouji.innerHTML.endsWith("+") || hyouji.innerHTML.endsWith("-") 
    || hyouji.innerHTML.endsWith("*") || hyouji.innerHTML.endsWith("/")){
    let slice = hyouji.innerHTML.slice(0, -1);
    hyouji.innerHTML = slice + "*";
  }else{
    hyouji.innerHTML += "*";
  }
}

function divide(){
  if (hyouji.innerHTML.endsWith("+") || hyouji.innerHTML.endsWith("-") 
    || hyouji.innerHTML.endsWith("*") || hyouji.innerHTML.endsWith("/")){
    let slice = hyouji.innerHTML.slice(0, -1);
    hyouji.innerHTML = slice + "/";
  }else{
    hyouji.innerHTML += "/";
  }
}

function dot(){
  hyouji.innerHTML += ".";
}

function equal(){
  hyouji.innerHTML = eval(hyouji.innerHTML);
}

function ac(){
  hyouji.innerHTML = 0;
}