document.addEventListener("DOMContentLoaded", () => {
    const addABook = document.getElementById('addBook');  
    const bookDatabase = JSON.parse(localStorage.getItem("bookDatabase")) || [];
    const bookName = document.getElementById('bookName');
    const authorName = document.getElementById('author');
    const imageUrl = document.getElementById('imageUrl'); 
    const genres = document.querySelector('.genre');

    

    listBooks = () => {
        const tbody = document.getElementsByTagName('tbody')[0];
        td = document.createElement('td');
        bookDatabase.forEach((books) => {
            tr = document.createElement('tr');
            books.forEach((book) => {
                td = document.createElement('td');
                if (book.includes('http')) {
                    a = document.createElement('a');
                    a.href = book;
                    img = document.createElement('img');
                    img.src = book;
                    img.style.width = "100px";
                    img.style.height = "100px";
                    img.style.borderRadius = "20px"
                    a.appendChild(img);
                    td.appendChild(a);
                    tr.appendChild(td);
                } else {
                    td.textContent = book;
                    tr.appendChild(td);
                }
               
            });
            tbody.appendChild(tr);
        })
    }

    listBooks();
    

    addABook.addEventListener('click', () => {
        const book = bookName.value;
        const author = authorName.value;
        const genre = genres.value;
        const url = imageUrl.value;
        const date = getDate();

        bookDatabase.push([book, author, genre, url, date]);
        localStorage.setItem('bookDatabase', JSON.stringify(bookDatabase));
        location.reload()
    });
});


getDate = () => {
    // Get date from the Date method
    const date = new Date();

    // Get day, month and year from the date method.
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    // Format abd return date
    const currentDate = `${day}/${month}/${year}`;
    return currentDate;
}