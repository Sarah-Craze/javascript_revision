const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  
  // 1. Sors-moi la liste des titres des livres du CDI
  const titles = books.map(book => book.title);
  
  // 2. Est-ce que tous les livres ont été empruntés au moins une fois?
  const allBooksRented = books.every(book => book.rented > 0);
  
  // 3. Quel est le livre le plus emprunté?
  const mostRentedBook = books.reduce((prev, current) => (prev.rented > current.rented) ? prev : current);
  
  // 4. Quel est le livre le moins emprunté?
  const leastRentedBook = books.reduce((prev, current) => (prev.rented < current.rented) ? prev : current);
  
  // 5. Supprime le livre avec l'ID 133712
  const booksWithout133712 = books.filter(book => book.id !== 133712);
  
  console.log(titles);
  console.log(allBooksRented);
  console.log(mostRentedBook);
  console.log(leastRentedBook);
  console.log(booksWithout133712);