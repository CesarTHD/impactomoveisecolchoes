setTimeout(() => {
    html2canvas(document.body).then(canvas => {
        const url = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.setAttribute("download", "image.png");
        a.setAttribute("href", url);
        a.click();
    })
}, 5000);

//https://stackoverflow.com/questions/63527772/how-to-print-full-screen-using-jspdf-and-html2canvas