const buttonGreen = document.querySelector('.change-color-green');
const buttonYellow = document.querySelector('.change-color-yellow');

buttonGreen.onclick = (element) => {
    debugger
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "green";'});
    });
}
buttonYellow.onclick = (element) => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "yellow";'});
    });
}

