
function sendNameToSlack(data) {
    //https://hooks.slack.com/services/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
    fetch('https://hooks.slack.com/services/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', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({
            text: data + " Please answer the question"
        }) // body data type must match "Content-Type" header
    })
}


function randomNamePicker() {
    var namePTag = document.getElementById("firstPTag");
    var studentNames = ["Levi", "Conner", "Josh", "Eddie", "Ousman", "Joon", "Ryan", "Justin", "Joyce", "Jonathan", "Sterling", "Rose", "Jason One", "Jason Two", "Jagpreet"]
    var min = 0;
    var max = 15;
    var randomNumber = Math.random() * (max - min) + min;
    randomNumber = Math.floor(randomNumber)
    namePTag.innerHTML = studentNames[randomNumber];
    sendNameToSlack(studentNames[randomNumber])
}
