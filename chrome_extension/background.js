// Allows users to open the side panel by clicking the extension toolbar icon
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

// Optional: Log a message when the extension is first installed
chrome.runtime.onInstalled.addListener(() => {
  console.log("orderAgent successfully installed!");
});
