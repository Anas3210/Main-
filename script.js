const bulb = document.getElementById('bulb');
const cord = document.getElementById('cord');
const body = document.body;
const letterModal = document.getElementById('letterModal');
const closeBtn = document.getElementById('closeBtn');

let clickCount = 0; // টগল গণনার জন্য কাউন্টার

function toggleLight() {
  bulb.classList.toggle('on');
  body.classList.toggle('dark-mode');
  
  clickCount++; // প্রতি ক্লিকে ১ করে বাড়বে

  // ৩ বার লাইট অন/অফ করার পর চিঠিটি পপ-আপ হবে
  if (clickCount === 3) {
    setTimeout(() => {
      letterModal.classList.add('active');
    }, 400); // হালকা একটু ডিলে দিয়ে ওপেন হবে সুন্দর ইফেক্টের জন্য
  }
}

// Cord & Bulb event listeners
cord.addEventListener('click', toggleLight);
bulb.addEventListener('click', toggleLight);

// Close button to hide letter
closeBtn.addEventListener('click', () => {
  letterModal.classList.remove('active');
});
