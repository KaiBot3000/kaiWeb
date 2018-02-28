document.addEventListener('DOMContentLoaded', function() {
    let eliminate = document.getElementById('eliminate');
    eliminate.addEventListener('click', eliminateNetworking);
});

function eliminateNetworking() {
    chrome.tabs.executeScript({
        code: '(' + function() {
            let replacementMessage = '<span style="opacity:0.25;"><3 KaiWeb ditched this for you <3</span>';
            let networkDiv=document.getElementById('hot-network-questions');
            networkDiv.innerHTML = replacementMessage;
            return {success: true, html: document.body.innerHTML};
        } + ')();'
    }, function() {
        if (err) {
            console.log(err);
        }
    });
}
