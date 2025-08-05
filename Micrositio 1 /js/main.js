function toggleLanguage() {
  const esElements = document.querySelectorAll('.es');
  const frElements = document.querySelectorAll('.fr');
  esElements.forEach(el => el.style.display = el.style.display === 'none' ? '' : 'none');
  frElements.forEach(el => el.style.display = el.style.display === 'none' ? '' : 'none');
}
