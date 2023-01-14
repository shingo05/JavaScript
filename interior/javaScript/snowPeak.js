// ローディング実装

setTimeout(function () {
    $('#loading-bg').fadeOut();
}, 3000);


// ボーダー線チカチカ実装
const flore1f = document.querySelector('.flore1f');

function flore() {
    flore1f.classList.toggle('hidden');
}

setInterval(flore, 1000);


