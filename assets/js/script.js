function navigateTo(url) {
  document.body.style.opacity = '0';
  setTimeout(() => {
    window.location.href = url;
  }, 200);
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.4s ease';
    document.body.style.opacity = '1';
  }, 100);
});
