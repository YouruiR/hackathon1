console.log(chrome.runtime)

chrome.runtime.onMessage.addListener( function(request,sender,sendResponse) {
  if (request.greeting === 'hello world') {
    console.log('Hello World!')
  }
})
