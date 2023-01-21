{/* <script type="module">
    import { getCurrentTab } from "./background.js";

</script> */}

function example() {
    console.log('hello')
}

function getURL() {
    chrome.runtime.sendMessage({command: "GetTitle"},
        function (response) {
            message = 'hello world'
        });
  }
  
  //   console.log(button)
  
  document.addEventListener("DOMContentLoaded", () => {
    const button = document.createElement("button");
    button.setAttribute("id", "newButton");
    // button.onclick = example;
    button.appendChild(document.createTextNode('press me'));
    document.body.appendChild(button)
    //   let button = document.getElementById('storage')
    //   button.addEventListener("click", example);

    button.onclick = (function(){
        chrome.runtime.sendMessage({ msg: "startFunc" });
     });
      
  })



// const button = document.getElementById("storage")
// button.addEventListener("click", console.log('dada'))