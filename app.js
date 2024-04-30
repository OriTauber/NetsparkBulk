
function showHideInputs() {
    var option = document.getElementById("options").value;
    document.getElementById("toggleAllInput").style.display = option === "toggleAll" ? "block" : "none";
    document.getElementById("toggleInput").style.display = option === "toggle" ? "block" : "none";
    document.getElementById("addAllInput").style.display = option === "addAll" ? "block" : "none";
    document.getElementById("addInput").style.display = option === "add" ? "block" : "none";
    document.getElementById("removeAllInput").style.display = option === "removeAll" ? "block" : "none";
    document.getElementById("removeInput").style.display = option === "remove" ? "block" : "none";
}

window.onload = function () {
    showHideInputs();
};
const button = document.querySelector("#submitBtn");

document.getElementById("optionForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var formData = new FormData();
    var option = document.getElementById("options").value;
    var url = "https://netsparkbulkeditor-1.onrender.com/"; // Replace with your actual POST URL

    button.style.display = 'none';
    setTimeout(() => {
        button.style.display = 'block';
    }, 2000);

    switch (option) {
        case "toggle":
            formData.append("id", document.getElementById("idToggle").value)
            formData.append("value", document.getElementById("toggle").value);
            break;
        case "toggleAll":
            formData.append("value", document.getElementById("toggleAll").value === "ON" ? 1 : 0);
            break;
        case "addAll":
            formData.append("day", document.getElementById("dayAddAll").value);
            formData.append("from", document.getElementById("fromAddAll").value);
            formData.append("to", document.getElementById("toAddAll").value);
            formData.append("cookie", document.getElementById("cookieInput").value); // Append Cookie value
            formData.append("mainUrl", document.getElementById("mainUrlInput").value); // Append Main URL value
            break;
        case "add":
            formData.append("id", document.getElementById("idAdd").value);
            formData.append("day", document.getElementById("dayAdd").value);
            formData.append("from", document.getElementById("fromAdd").value);
            formData.append("to", document.getElementById("toAdd").value);
            formData.append("cookie", document.getElementById("cookieInput").value); // Append Cookie value
            formData.append("mainUrl", document.getElementById("mainUrlInput").value); // Append Main URL value
            break;
        case "removeAll":
            formData.append("day", document.getElementById("dayRemoveAll").value);
            formData.append("from", document.getElementById("fromRemoveAll").value);
            formData.append("to", document.getElementById("toRemoveAll").value);
            formData.append("cookie", document.getElementById("cookieInput").value); // Append Cookie value
            formData.append("mainUrl", document.getElementById("mainUrlInput").value); // Append Main URL value
            break;
        case "remove":
            formData.append("id", document.getElementById("idRemove").value);
            formData.append("day", document.getElementById("dayRemove").value);
            formData.append("from", document.getElementById("fromRemove").value);
            formData.append("to", document.getElementById("toRemove").value);
            formData.append("cookie", document.getElementById("cookieInput").value); // Append Cookie value
            formData.append("mainUrl", document.getElementById("mainUrlInput").value); // Append Main URL value
            break;

        default:
            break;
    }


    var urlSearchParams = new URLSearchParams(formData);
    fetch(url + option, {
        mode: 'no-cors',
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlSearchParams
    })
        .then(result => {
            return result.text();
            // Handle success
        })
        .then((result) => {
            console.log(result);
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error
        });
});
