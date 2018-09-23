setInterval(() => {
  let dialogElement = Array.from(document.getElementsByClassName('yt-confirm-dialog-renderer')).find(e => e.textContent.includes('Video paused') && e.id == 'main')
  if (dialogElement) {
    console.log('Found an unpause button');
    let yesButtonCollection = dialogElement.getElementsByTagName('a');
    if (Array.from(yesButtonCollection).length == 1) {
      yesButtonCollection[0].click()
      console.log('Clicked the unpause button');
    }
  }
}, 100);