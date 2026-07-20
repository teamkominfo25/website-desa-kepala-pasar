// ========================================
// DESA KEPALA PASAR
// Script Berita
// ========================================

// Membuat icon Lucide aktif
if (typeof lucide !== "undefined") {
    lucide.createIcons();
}

// ===========================
// Copy Link
// ===========================

function copyLink() {

    navigator.clipboard.writeText(window.location.href);

    alert("Link berita berhasil disalin.");

}

// ===========================
// Share WhatsApp
// ===========================

function shareWhatsapp(){

    let url = encodeURIComponent(window.location.href);

    let title = encodeURIComponent(document.title);

    window.open(
        "https://wa.me/?text=" + title + "%0A" + url,
        "_blank"
    );

}

// ===========================
// Scroll Fade Animation
// ===========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".fade").forEach(el=>{

observer.observe(el);

});

// ===========================
// Back To Top
// ===========================

const topButton=document.getElementById("backTop");

if(topButton){

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.style.display="flex";

}else{

topButton.style.display="none";

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}

}

// ============================
// LIGHTBOX
// ============================

const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("show");

lightboxImage.src=img.src;

});

});

if(closeLightbox){

closeLightbox.onclick=()=>{

lightbox.classList.remove("show");

}

}

if(lightbox){

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("show");

}

}

}

// ========================================
// Progress Bar Scroll
// ========================================

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

const scrollTop = document.documentElement.scrollTop;

const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const progress = (scrollTop / scrollHeight) * 100;

if(progressBar){

progressBar.style.width = progress + "%";

}

});

// ========================================
// Estimasi Waktu Membaca
// ========================================

const article = document.getElementById("articleContent");

const readingTime = document.getElementById("readingTime");

if(article && readingTime){

const words = article.innerText.trim().split(/\s+/).length;

const minutes = Math.max(1, Math.ceil(words / 200));

readingTime.innerHTML = minutes + " menit membaca";

}