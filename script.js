function generateKey(length) {
    document.getElementById("copyText").innerText = "";
    length != 0
        ? (number = length)
        : (number = document.getElementById("customLength").value);

    const array = new Uint8Array(number);
    window.crypto.getRandomValues(array);
    const key = Array.from(array)
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");

    document.getElementById("key").innerHTML = key;
}

function generateApiKey(length) {
    document.getElementById("copyText").innerText = "";
    const array = new Uint8Array(length);
    window.crypto.getRandomValues(array);
    const string = Array.from(array)
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");

    string.length == 32
        ? (key =
              string.slice(0, 8) +
              "-" +
              string.slice(8, 12) +
              "-" +
              string.slice(12, 16) +
              "-" +
              string.slice(16, 20) +
              "-" +
              string.slice(20))
        : (key =
              string.slice(0, 16) +
              "-" +
              string.slice(16, 24) +
              "-" +
              string.slice(24, 32) +
              "-" +
              string.slice(32, 40) +
              "-" +
              string.slice(40));

    document.getElementById("key").innerHTML = key;
}

function copyText() {
    const text = document.getElementById("key").innerText;
    const copyText = document.getElementById("copyText");

    navigator.clipboard
        .writeText(text)
        .then(() => {
            copyText.innerText = "Copied!";
        })
        .catch(() => {
            copyText.innerText = "Error!";
        });
}
