if ('serviceWorker' in navigator) {
    //navigator 是指瀏覽器
    navigator.serviceWorker
        .register('/sw.js') //讀取到根目錄 public底下的sw.js
        .then(function () {
            console.log('Service worker registered')
        });
}
