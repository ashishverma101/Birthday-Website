// ---------------- Page 1: Yes/No ----------------
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Initial scales
let yesScale = 1;
let noScale = 1;

if (yesBtn) {
    yesBtn.addEventListener('click', () => {
        window.location.href = 'page2.html';
    });
}

if (noBtn) {
    noBtn.addEventListener('click', () => {
        // Decrease No button scale
        noScale -= 0.1;
        if (noScale < 0.2) noScale = 0.2; // prevent disappearing completely
        noBtn.style.transform = `scale(${noScale})`;
        noBtn.style.transition = 'transform 0.3s ease';

        // Increase Yes button scale
        yesScale += 0.1;
        yesBtn.style.transform = `scale(${yesScale})`;
        yesBtn.style.transition = 'transform 0.3s ease';
    });
}

// ---------------- Page 2: Gift Box ----------------
const giftBtn = document.getElementById('giftBtn');
if (giftBtn) {
    giftBtn.addEventListener('click', () => {
        window.location.href = 'page3.html';
    });
}

// ---------------- Page 3: Wishes & Memories ----------------
const nextMsgBtn = document.getElementById('nextMsgBtn');
if (nextMsgBtn) {
    nextMsgBtn.addEventListener('click', () => {
        // For now, redirect to page4
        window.location.href = 'page4.html';
    });
}
/* back Button */
const backBtn = document.getElementById('backBtn');
if (backBtn) {
    backBtn.addEventListener('click', () => {
        window.history.back();
    });
}
