setInterval(() => {
  let dialogElement = Array.from(document.getElementsByClassName('yt-confirm-dialog-renderer')).find(e => e.textContent.includes('Video paused') && e.id == 'main')
  if (dialogElement) {
    let yesButtonCollection = dialogElement.getElementsByTagName('a');
    if (Array.from(yesButtonCollection).length == 1) {
      location.reload()
    }
  }
}, 100);