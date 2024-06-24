const languages = ['JavaScript', 'Python', 'Java'];


const ulElement = document.getElementById('programming-languages');

languages.forEach(language => {
    const liElement = document.createElement('li');
    liElement.textContent = language;
    ulElement.appendChild(liElement);
});
