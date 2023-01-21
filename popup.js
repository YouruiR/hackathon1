// import { getCurrentTab } from "./background.js"

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
  
  document.addEventListener("DOMContentLoaded", async function () {
    // const button = document.getElementById("storage");
    // button.setAttribute("id", "newButton")   ;
    // button.onclick = example;
    // button.appendChild(document.createTextNode('press me'));
    // document.body.appendChild(button)
    const button = document.getElementById('storage')
    // const currentTab = await getCurrentTab();
    button.addEventListener("click", getCurrentTab, false);

    // button.onclick = (function(){
    //     chrome.runtime.sendMessage({ msg: "startFunc" });
    //  }, false);
      

    async function getCurrentTab() {
        let queryOptions = { active: true, currentWindow: true };
        // `tab` will either be a `tabs.Tab` instance or `undefined`.
        let [tab] = await chrome.tabs.query(queryOptions);    
        console.log(tab.title);
      }


  }, false);



// const button = document.getElementById("storage")
// button.addEventListener("click", console.log('dada'))