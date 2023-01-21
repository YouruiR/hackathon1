// chrome.runtime.onMessage.addListener( function(request,sender,sendResponse) {
//   if (request.greeting === 'hello world') {
//     console.log('Hello World!')
//   }
// })

// console.log('hello')

export async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);    
  return tab.title;
  ;
}

// console.log(getCurrentTab())

// var func = function(){
//     alert("Success!");
// };

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse){
//         if(request.msg == "startFunc") func();
//     }
// );

// let button = document.getElementById("storage");
// console.log(button)