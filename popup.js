function example() {
    console.log('hello')
}

function getURL() {
    chrome.runtime.sendMessage({command: "GetTitle"},
        function (response) {
            message = 'hello world'
        });
  }
  
let titleList = [];

  document.addEventListener("DOMContentLoaded", async function () {
    getTitleListAndRestoreDom();
    const button = document.getElementById('storage');

    button.addEventListener("click", getCurrentTab, false);

    
}, false);

async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    
    const title = tab.title;
    if (titleList.indexOf(title) === -1) {
        addTitleToListAndSave(title);
        addTitleToDom(title);
    }
    // let item = document.createElement("li");
    // item.appendChild(document.createTextNode(`${tab.title}`));
    // ul.appendChild(item);
    // domList.push(tab.title)
}

function getTitleListAndRestoreDom() {
    chrome.storage.local.get({titleList: []}, function(data) {
        titleList = data.titleList;
        titleList.forEach(function(title) {
            addTitleToDom(title)
        })
    })
}

function addTitleToDom(title) {
    let ul = document.getElementById("list");
      const item = document.createElement("li");
      const addedItem = document.createElement('a');
      addedItem.textContent = title;
      item.appendChild(addedItem);
      ul.appendChild(item);
    }

  function addTitleToListAndSave(title) {
    if(titleList.indexOf(title) === -1){
        //Title is not already in list
        titleList.push(title);
        saveTitleList();
    }
  }


  function saveTitleList(callback) {
    chrome.storage.local.set({titleList}, function() {
        if (typeof callback === 'function') {
            callback();
        }
    })
  } 



// const button = document.getElementById("storage")
// button.addEventListener("click", console.log('dada'))