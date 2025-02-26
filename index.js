document.addEventListener('copy', (event) => {
    const { clipboardData } = event;
    const selection = document.getSelection();
    if (!clipboardData || !selection) return;
    const msg = `${selection.toString()}
  
  License: CC-BY-SA-4.0
  Thank you!
  `;
    clipboardData.setData('text/plain', msg);
    event.preventDefault();
  });