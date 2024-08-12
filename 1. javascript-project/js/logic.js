const books = [
    {
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "imageLink": "static/images/things-fall-apart.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
    },
    {
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "imageLink": "static/images/fairy-tales.jpg",
        "language": "Danish",
        "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
    },
    {
        "author": "Dante Alighieri",
        "country": "Italy",
        "imageLink": "static/images/the-divine-comedy.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
        "pages": 928,
        "title": "The Divine Comedy",
        "year": 1315
    },
    {
        "author": "Unknown",
        "country": "Sumer and Akkadian Empire",
        "imageLink": "static/images/the-epic-of-gilgamesh.jpg",
        "language": "Akkadian",
        "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
        "pages": 160,
        "title": "The Epic Of Gilgamesh",
        "year": -1700
    },
    {
        "author": "Unknown",
        "country": "Achaemenid Empire",
        "imageLink": "static/images/the-book-of-job.jpg",
        "language": "Hebrew",
        "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
        "pages": 176,
        "title": "The Book Of Job",
        "year": -600
    },
    {
        "author": "Unknown",
        "country": "India/Iran/Iraq/Egypt/Tajikistan",
        "imageLink": "static/images/one-thousand-and-one-nights.jpg",
        "language": "Arabic",
        "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
        "pages": 288,
        "title": "One Thousand and One Nights",
        "year": 1200
    },
    {
        "author": "Unknown",
        "country": "Iceland",
        "imageLink": "static/images/njals-saga.jpg",
        "language": "Old Norse",
        "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
        "pages": 384,
        "title": "Nj\u00e1l's Saga",
        "year": 1350
    },
]

const showList = () => {
    const container = document.querySelector(".section-books");
    const fragment = document.createDocumentFragment();

    for (const book of books) {
        const box = document.createElement('div');
        box.setAttribute('class', 'book');
        const bookImage = document.createElement('img');
        bookImage.setAttribute('class', 'bookImg');
        bookImage.src = book.imageLink;
        box.appendChild(bookImage);

        const book_title = document.createElement('p');
        book_title.textContent = book.title;
        const book_lang = document.createElement('p');
        book_lang.textContent = book.language;
        const book_pages = document.createElement('p');
        book_pages.textContent = book.pages;

        box.appendChild(book_title);
        box.appendChild(book_lang);
        box.appendChild(book_pages);

        fragment.appendChild(box);
    }

    container.appendChild(fragment);
}

showList();
