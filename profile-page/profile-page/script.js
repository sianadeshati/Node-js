function changeName() {
    var element = document.getElementById("nameedit");
    element.innerText = "Siana";
}

function acceptButton(name) {
    var element = document.getElementById(name);
    element.remove();
    var badge = document.getElementById("badge-conn");
    badge.innerText = parseInt(badge.innerText) + 1;
    var reqBadge = document.getElementById("req-badge");
    reqBadge.innerText = parseInt(reqBadge.innerHTML) -1;
}

function cancelButton(name) {
    var element = document.getElementById(name);
    element.remove();
    var reqBadge = document.getElementById("req-badge");
    reqBadge.innerText = parseInt(reqBadge.innerHTML) -1;
}