function getURL() {
    chrome.runtime.sendMessage({command: "GetTitle"},
        function (response) {
            message = 'hello world'
        });
  }
  
  let button = document.getElementById('storage')
  button.addEventListener("click", getURL());