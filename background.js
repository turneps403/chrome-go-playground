// https://developer.chrome.com/docs/extensions/reference/action/
chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({ url: "https://goplay.space", index: tab.index + 1 });
});
