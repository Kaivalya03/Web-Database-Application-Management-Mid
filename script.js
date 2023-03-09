 // Fetch data from JSON link
 fetch('https://upadhayay.github.io/db.json')
 .then(response => response.json())
 .then(data => {
     // Get the book list element
     const bookList = document.getElementById('book-list');
     
     // Iterate over each book in the data
     data.books.forEach(book => {
         // Create a new list item element
         const li = document.createElement('li');
         
         // Set the text content of the list item to the book title and author
         li.textContent = `${book.title}`;
         
         // Add the list item to the book list
         bookList.appendChild(li);
     });
 });