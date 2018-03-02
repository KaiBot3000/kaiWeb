
eliminateSONetworking();
eliminateGHNotifications();

/*
* Eliminate the "Hot Networking Topics" section on Stack Overflow
*/
function eliminateSONetworking() {
    let replacementMessage = '<span style="opacity:0.25;"><3 KaiWeb ditched this for you <3</span>';
    let networkDiv=document.getElementById('hot-network-questions');
    if (networkDiv) {
        networkDiv.innerHTML = replacementMessage;
    }
}

/*
* Eliminate the notifications indicator on GitHub
*/
function eliminateGHNotifications() {
    let notifications=document.getElementsByClassName('notification-indicator');
    for (let i=0; i<notifications.length; i++) {
        notifications[i].parentNode.removeChild(notifications[i]);
    }
}
