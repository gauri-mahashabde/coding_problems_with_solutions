//problem statement 11

let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
document.getElementById("element1").innerHTML = sentences;
console.log(sentences);

var mostWordsFound = function (sentences) {
    let max = 0
    for (let i = 0; i < sentences.length; i++) {
        let temp = sentences[i].split(" ").length;
        if (temp > max) max = temp;

    }
    return max;
};

let result = mostWordsFound(sentences);
document.getElementById("element2").innerHTML = result;