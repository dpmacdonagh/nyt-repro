const mockNytResponses = {
  names: [
    {
      list_name: 'Combined Print and E-Book Fiction',
      display_name: 'Combined Print & E-Book Fiction',
      list_name_encoded: 'combined-print-and-e-book-fiction',
      oldest_published_date: '2011-02-13',
      newest_published_date: '2019-08-11',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Combined Print and E-Book Nonfiction',
      display_name: 'Combined Print & E-Book Nonfiction',
      list_name_encoded: 'combined-print-and-e-book-nonfiction',
      oldest_published_date: '2011-02-13',
      newest_published_date: '2019-08-11',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Hardcover Fiction',
      display_name: 'Hardcover Fiction',
      list_name_encoded: 'hardcover-fiction',
      oldest_published_date: '2008-06-08',
      newest_published_date: '2019-08-11',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Hardcover Nonfiction',
      display_name: 'Hardcover Nonfiction',
      list_name_encoded: 'hardcover-nonfiction',
      oldest_published_date: '2008-06-08',
      newest_published_date: '2019-08-11',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Trade Fiction Paperback',
      display_name: 'Paperback Trade Fiction',
      list_name_encoded: 'trade-fiction-paperback',
      oldest_published_date: '2008-06-08',
      newest_published_date: '2019-08-11',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Mass Market Paperback',
      display_name: 'Paperback Mass-Market Fiction',
      list_name_encoded: 'mass-market-paperback',
      oldest_published_date: '2008-06-08',
      newest_published_date: '2017-01-29',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Paperback Nonfiction',
      display_name: 'Paperback Nonfiction',
      list_name_encoded: 'paperback-nonfiction',
      oldest_published_date: '2008-06-08',
      newest_published_date: '2019-08-11',
      updated: 'WEEKLY'
    },
    {
      list_name: 'E-Book Fiction',
      display_name: 'E-Book Fiction',
      list_name_encoded: 'e-book-fiction',
      oldest_published_date: '2011-02-13',
      newest_published_date: '2017-01-29',
      updated: 'WEEKLY'
    },
    {
      list_name: 'E-Book Nonfiction',
      display_name: 'E-Book Nonfiction',
      list_name_encoded: 'e-book-nonfiction',
      oldest_published_date: '2011-02-13',
      newest_published_date: '2017-01-29',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Hardcover Advice',
      display_name: 'Hardcover Advice & Misc.',
      list_name_encoded: 'hardcover-advice',
      oldest_published_date: '2008-06-08',
      newest_published_date: '2013-04-21',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Paperback Advice',
      display_name: 'Paperback Advice & Misc.',
      list_name_encoded: 'paperback-advice',
      oldest_published_date: '2008-06-08',
      newest_published_date: '2013-04-21',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Advice How-To and Miscellaneous',
      display_name: 'Advice, How-To & Miscellaneous',
      list_name_encoded: 'advice-how-to-and-miscellaneous',
      oldest_published_date: '2013-04-28',
      newest_published_date: '2019-08-11',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Chapter Books',
      display_name: 'Children’s Chapter Books',
      list_name_encoded: 'chapter-books',
      oldest_published_date: '2008-06-08',
      newest_published_date: '2012-12-09',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Childrens Middle Grade',
      display_name: 'Children’s Middle Grade',
      list_name_encoded: 'childrens-middle-grade',
      oldest_published_date: '2012-12-16',
      newest_published_date: '2015-08-23',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Childrens Middle Grade E-Book',
      display_name: 'Children’s Middle Grade E-Book',
      list_name_encoded: 'childrens-middle-grade-e-book',
      oldest_published_date: '2015-08-30',
      newest_published_date: '2017-01-29',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Childrens Middle Grade Hardcover',
      display_name: 'Children’s Middle Grade Hardcover',
      list_name_encoded: 'childrens-middle-grade-hardcover',
      oldest_published_date: '2015-08-30',
      newest_published_date: '2019-08-11',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Childrens Middle Grade Paperback',
      display_name: 'Children’s Middle Grade Paperback',
      list_name_encoded: 'childrens-middle-grade-paperback',
      oldest_published_date: '2015-08-30',
      newest_published_date: '2017-01-29',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Paperback Books',
      display_name: 'Children’s Paperback Books',
      list_name_encoded: 'paperback-books',
      oldest_published_date: '2008-06-08',
      newest_published_date: '2012-12-09',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Picture Books',
      display_name: 'Children’s Picture Books',
      list_name_encoded: 'picture-books',
      oldest_published_date: '2008-06-08',
      newest_published_date: '2019-08-11',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Series Books',
      display_name: 'Children’s Series',
      list_name_encoded: 'series-books',
      oldest_published_date: '2008-06-08',
      newest_published_date: '2019-08-11',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Young Adult',
      display_name: 'Young Adult',
      list_name_encoded: 'young-adult',
      oldest_published_date: '2012-12-16',
      newest_published_date: '2015-08-23',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Young Adult E-Book',
      display_name: 'Young Adult E-Book',
      list_name_encoded: 'young-adult-e-book',
      oldest_published_date: '2015-08-30',
      newest_published_date: '2017-01-29',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Young Adult Hardcover',
      display_name: 'Young Adult Hardcover',
      list_name_encoded: 'young-adult-hardcover',
      oldest_published_date: '2015-08-30',
      newest_published_date: '2019-08-11',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Young Adult Paperback',
      display_name: 'Young Adult Paperback',
      list_name_encoded: 'young-adult-paperback',
      oldest_published_date: '2015-08-30',
      newest_published_date: '2017-01-29',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Hardcover Graphic Books',
      display_name: 'Hardcover Graphic Books',
      list_name_encoded: 'hardcover-graphic-books',
      oldest_published_date: '2009-03-15',
      newest_published_date: '2017-01-29',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Paperback Graphic Books',
      display_name: 'Paperback Graphic Books',
      list_name_encoded: 'paperback-graphic-books',
      oldest_published_date: '2009-03-15',
      newest_published_date: '2017-01-29',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Manga',
      display_name: 'Manga',
      list_name_encoded: 'manga',
      oldest_published_date: '2009-03-15',
      newest_published_date: '2017-01-29',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Combined Print Fiction',
      display_name: 'Combined Hardcover & Paperback Fiction',
      list_name_encoded: 'combined-print-fiction',
      oldest_published_date: '2011-02-13',
      newest_published_date: '2013-05-12',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Combined Print Nonfiction',
      display_name: 'Combined Hardcover & Paperback Nonfiction',
      list_name_encoded: 'combined-print-nonfiction',
      oldest_published_date: '2011-02-13',
      newest_published_date: '2013-05-12',
      updated: 'WEEKLY'
    },
    {
      list_name: 'Animals',
      display_name: 'Animals',
      list_name_encoded: 'animals',
      oldest_published_date: '2014-09-07',
      newest_published_date: '2017-01-15',
      updated: 'MONTHLY'
    },
    {
      list_name: 'Audio Fiction',
      display_name: 'Audio Fiction',
      list_name_encoded: 'audio-fiction',
      oldest_published_date: '2018-03-11',
      newest_published_date: '2019-07-14',
      updated: 'MONTHLY'
    },
    {
      list_name: 'Audio Nonfiction',
      display_name: 'Audio Nonfiction',
      list_name_encoded: 'audio-nonfiction',
      oldest_published_date: '2018-03-11',
      newest_published_date: '2019-07-14',
      updated: 'MONTHLY'
    },
    {
      list_name: 'Business Books',
      display_name: 'Business',
      list_name_encoded: 'business-books',
      oldest_published_date: '2013-11-03',
      newest_published_date: '2019-07-14',
      updated: 'MONTHLY'
    },
    {
      list_name: 'Celebrities',
      display_name: 'Celebrities',
      list_name_encoded: 'celebrities',
      oldest_published_date: '2014-09-07',
      newest_published_date: '2017-01-15',
      updated: 'MONTHLY'
    },
    {
      list_name: 'Crime and Punishment',
      display_name: 'Crime and Punishment',
      list_name_encoded: 'crime-and-punishment',
      oldest_published_date: '2014-10-12',
      newest_published_date: '2017-01-15',
      updated: 'MONTHLY'
    },
    {
      list_name: 'Culture',
      display_name: 'Culture',
      list_name_encoded: 'culture',
      oldest_published_date: '2014-10-12',
      newest_published_date: '2017-01-15',
      updated: 'MONTHLY'
    },
    {
      list_name: 'Education',
      display_name: 'Education',
      list_name_encoded: 'education',
      oldest_published_date: '2014-10-12',
      newest_published_date: '2017-01-15',
      updated: 'MONTHLY'
    },
    {
      list_name: 'Espionage',
      display_name: 'Espionage',
      list_name_encoded: 'espionage',
      oldest_published_date: '2014-12-14',
      newest_published_date: '2017-01-15',
      updated: 'MONTHLY'
    },
    {
      list_name: 'Expeditions Disasters and Adventures',
      display_name: 'Expeditions',
      list_name_encoded: 'expeditions-disasters-and-adventures',
      oldest_published_date: '2014-12-14',
      newest_published_date: '2017-01-15',
      updated: 'MONTHLY'
    },
    {
      list_name: 'Fashion Manners and Customs',
      display_name: 'Fashion, Manners and Customs',
      list_name_encoded: 'fashion-manners-and-customs',
      oldest_published_date: '2014-10-12',
      newest_published_date: '2017-01-15',
      updated: 'MONTHLY'
    },
    {
      list_name: 'Food and Fitness',
      display_name: 'Food and Diet',
      list_name_encoded: 'food-and-fitness',
      oldest_published_date: '2013-09-01',
      newest_published_date: '2017-01-15',
      updated: 'MONTHLY'
    },
    {
      list_name: 'Games and Activities',
      display_name: 'Games and Activities',
      list_name_encoded: 'games-and-activities',
      oldest_published_date: '2014-10-12',
      newest_published_date: '2017-01-15',
      updated: 'MONTHLY'
    },
    {
      list_name: 'Hardcover Business Books',
      display_name: 'Hardcover Business Books',
      list_name_encoded: 'hardcover-business-books',
      oldest_published_date: '2011-07-03',
      newest_published_date: '2013-10-13',
      updated: 'MONTHLY'
    },
    {
      list_name: 'Health',
      display_name: 'Health',
      list_name_encoded: 'health',
      oldest_published_date: '2014-10-12',
      newest_published_date: '2017-01-15',
      updated: 'MONTHLY'
    },
    {
      list_name: 'Humor',
      display_name: 'Humor',
      list_name_encoded: 'humor',
      oldest_published_date: '2014-09-07',
      newest_published_date: '2017-01-15',
      updated: 'MONTHLY'
    },
    {
      list_name: 'Indigenous Americans',
      display_name: 'Indigenous Americans',
      list_name_encoded: 'indigenous-americans',
      oldest_published_date: '2014-12-14',
      newest_published_date: '2016-01-10',
      updated: 'MONTHLY'
    },
    {
      list_name: 'Relationships',
      display_name: 'Love and Relationships',
      list_name_encoded: 'relationships',
      oldest_published_date: '2014-09-07',
      newest_published_date: '2017-01-15',
      updated: 'MONTHLY'
    },
    {
      list_name: 'Paperback Business Books',
      display_name: 'Paperback Business Books',
      list_name_encoded: 'paperback-business-books',
      oldest_published_date: '2011-07-03',
      newest_published_date: '2013-10-13',
      updated: 'MONTHLY'
    },
    {
      list_name: 'Family',
      display_name: 'Parenthood and Family',
      list_name_encoded: 'family',
      oldest_published_date: '2014-09-07',
      newest_published_date: '2017-01-15',
      updated: 'MONTHLY'
    },
    {
      list_name: 'Hardcover Political Books',
      display_name: 'Politics and American History',
      list_name_encoded: 'hardcover-political-books',
      oldest_published_date: '2011-07-03',
      newest_published_date: '2017-01-15',
      updated: 'MONTHLY'
    },
    {
      list_name: 'Race and Civil Rights',
      display_name: 'Race and Civil Rights',
      list_name_encoded: 'race-and-civil-rights',
      oldest_published_date: '2014-12-14',
      newest_published_date: '2017-01-15',
      updated: 'MONTHLY'
    },
    {
      list_name: 'Religion Spirituality and Faith',
      display_name: 'Religion, Spirituality and Faith',
      list_name_encoded: 'religion-spirituality-and-faith',
      oldest_published_date: '2014-09-07',
      newest_published_date: '2017-01-15',
      updated: 'MONTHLY'
    },
    {
      list_name: 'Science',
      display_name: 'Science',
      list_name_encoded: 'science',
      oldest_published_date: '2013-04-14',
      newest_published_date: '2019-07-14',
      updated: 'MONTHLY'
    },
    {
      list_name: 'Sports',
      display_name: 'Sports and Fitness',
      list_name_encoded: 'sports',
      oldest_published_date: '2014-03-02',
      newest_published_date: '2019-07-14',
      updated: 'MONTHLY'
    },
    {
      list_name: 'Travel',
      display_name: 'Travel',
      list_name_encoded: 'travel',
      oldest_published_date: '2014-09-07',
      newest_published_date: '2017-01-15',
      updated: 'MONTHLY'
    }
  ],
  overview: {
    status: 'OK',
    copyright: 'Copyright (c) 2019 The New York Times Company.  All Rights Reserved.',
    num_results: 55,
    results: {
      bestsellers_date: '2019-07-27',
      published_date: '2019-08-11',
      published_date_description: 'latest',
      previous_published_date: '2019-08-04',
      next_published_date: '',
      lists: [
        {
          list_id: 704,
          list_name: 'Combined Print and E-Book Fiction',
          list_name_encoded: 'combined-print-and-e-book-fiction',
          display_name: 'Combined Print & E-Book Fiction',
          updated: 'WEEKLY',
          list_image: 'https://s1.nyt.com/du/books/images/9781538750568.jpg',
          list_image_width: 328,
          list_image_height: 495,
          books: [
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/One-Good-Deed-David-Baldacci/dp/1538750562?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'David Baldacci',
              book_image: 'https://s1.nyt.com/du/books/images/9781538750568.jpg',
              book_image_width: 328,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by David Baldacci',
              contributor_note: '',
              created_date: '2019-07-31 22:02:11',
              description: 'A World War II veteran on parole must find the real killer in a small town or face going back to jail.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '1538750554',
              primary_isbn13: '9781538750551',
              book_uri: 'nyt://book/f98ddab9-e895-565a-818a-b4488ec8c2e4',
              publisher: 'Grand Central',
              rank: 1,
              rank_last_week: 0,
              sunday_review_link: '',
              title: 'ONE GOOD DEED',
              updated_date: '2019-07-31 22:02:11',
              weeks_on_list: 1,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/One-Good-Deed-David-Baldacci/dp/1538750562?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9781538750551?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781538750551'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Where-Crawdads-Sing-Delia-Owens/dp/0735219095?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Delia Owens',
              book_image: 'https://s1.nyt.com/du/books/images/9780735219090.jpg',
              book_image_width: 328,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by Delia Owens',
              contributor_note: '',
              created_date: '2019-07-31 22:02:11',
              description: 'In a quiet town on the North Carolina coast in 1969, a young woman who survived alone in the marsh becomes a murder suspect.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0735219095',
              primary_isbn13: '9780735219090',
              book_uri: 'nyt://book/053b4109-4555-5aa1-9b39-cc40549bcdf0',
              publisher: 'Putnam',
              rank: 2,
              rank_last_week: 2,
              sunday_review_link: '',
              title: 'WHERE THE CRAWDADS SING',
              updated_date: '2019-07-31 22:02:11',
              weeks_on_list: 46,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Where-Crawdads-Sing-Delia-Owens/dp/0735219095?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780735219090?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780735219090'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/New-Girl-Novel-Gabriel-Allon-ebook/dp/B07F18LND4?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Daniel Silva',
              book_image: 'https://s1.nyt.com/du/books/images/9780062834898.jpg',
              book_image_width: 328,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by Daniel Silva',
              contributor_note: '',
              created_date: '2019-07-31 22:02:11',
              description: 'Gabriel Allon, the chief of Israeli intelligence, partners with the crown prince of Saudi Arabia, whose daughter is kidnapped.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0062834894',
              primary_isbn13: '9780062834898',
              book_uri: 'nyt://book/e308e25d-b1dd-559d-92b2-ec81b7bbad80',
              publisher: 'Harper',
              rank: 3,
              rank_last_week: 1,
              sunday_review_link: '',
              title: 'THE NEW GIRL',
              updated_date: '2019-07-31 22:02:11',
              weeks_on_list: 2,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/New-Girl-Novel-Gabriel-Allon-ebook/dp/B07F18LND4?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780062834898?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062834898'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Nickel-Boys-Novel-Colson-Whitehead/dp/0385537077?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Colson Whitehead',
              book_image: 'https://s1.nyt.com/du/books/images/9780385537070.jpg',
              book_image_width: 328,
              book_image_height: 495,
              book_review_link: 'https://www.nytimes.com/2019/07/11/books/review-nickel-boys-colson-whitehead.html',
              contributor: 'by Colson Whitehead',
              contributor_note: '',
              created_date: '2019-07-31 22:02:11',
              description: 'Two boys respond to horrors at a Jim Crow-era reform school in ways that impact them decades later.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0385537077',
              primary_isbn13: '9780385537070',
              book_uri: 'nyt://book/b9c84bf7-ad1c-56a3-9b42-e9b37e488f42',
              publisher: 'Doubleday',
              rank: 4,
              rank_last_week: 3,
              sunday_review_link: '',
              title: 'THE NICKEL BOYS',
              updated_date: '2019-07-31 22:02:11',
              weeks_on_list: 2,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Nickel-Boys-Novel-Colson-Whitehead/dp/0385537077?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780385537070?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780385537070'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Reckoning-Novel-John-Grisham-ebook/dp/B079DBS447?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'John Grisham',
              book_image: 'https://s1.nyt.com/du/books/images/9780385544160.jpg',
              book_image_width: 326,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by John Grisham',
              contributor_note: '',
              created_date: '2019-07-31 22:02:11',
              description: 'A decorated World War II veteran shoots and kills a pastor inside a Mississippi church.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0525620931',
              primary_isbn13: '9780525620938',
              book_uri: 'nyt://book/821816fe-b672-571b-8cc7-5a23a25b58e8',
              publisher: 'Doubleday',
              rank: 5,
              rank_last_week: 8,
              sunday_review_link: '',
              title: 'THE RECKONING',
              updated_date: '2019-07-31 22:02:11',
              weeks_on_list: 24,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Reckoning-Novel-John-Grisham-ebook/dp/B079DBS447?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780525620938?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780525620938'
                }
              ]
            }
          ]
        },
        {
          list_id: 708,
          list_name: 'Combined Print and E-Book Nonfiction',
          list_name_encoded: 'combined-print-and-e-book-nonfiction',
          display_name: 'Combined Print & E-Book Nonfiction',
          updated: 'WEEKLY',
          list_image: 'https://s1.nyt.com/du/books/images/9780399590504.jpg',
          list_image_width: 328,
          list_image_height: 495,
          books: [
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Educated-Memoir-Tara-Westover/dp/0399590501?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Tara Westover',
              book_image: 'https://s1.nyt.com/du/books/images/9780399590504.jpg',
              book_image_width: 328,
              book_image_height: 495,
              book_review_link: 'https://www.nytimes.com/2018/03/01/books/review/tara-westover-educated.html',
              contributor: 'by Tara Westover',
              contributor_note: '',
              created_date: '2019-07-31 22:02:12',
              description: 'The daughter of survivalists, who is kept out of school, educates herself enough to leave home for university.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0399590501',
              primary_isbn13: '9780399590504',
              book_uri: 'nyt://book/08c80da5-f436-5afd-b925-42fe6f0c28cc',
              publisher: 'Random House',
              rank: 1,
              rank_last_week: 1,
              sunday_review_link: '',
              title: 'EDUCATED',
              updated_date: '2019-07-31 22:02:12',
              weeks_on_list: 75,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Educated-Memoir-Tara-Westover/dp/0399590501?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780399590504?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780399590504'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Becoming-Michelle-Obama/dp/1524763136?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Michelle Obama',
              book_image: 'https://s1.nyt.com/du/books/images/9781524763138.jpg',
              book_image_width: 326,
              book_image_height: 495,
              book_review_link: 'https://www.nytimes.com/2018/12/06/books/review/michelle-obama-becoming-memoir.html',
              contributor: 'by Michelle Obama',
              contributor_note: '',
              created_date: '2019-07-31 22:02:12',
              description: 'The former first lady describes her journey from the South Side of Chicago to the White House, and how she balanced work, family and her husband’s political ascent.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '1524763136',
              primary_isbn13: '9781524763138',
              book_uri: 'nyt://book/2892bc2e-4ad3-5e0a-bc6e-d2cd983c3c52',
              publisher: 'Crown',
              rank: 2,
              rank_last_week: 6,
              sunday_review_link: '',
              title: 'BECOMING',
              updated_date: '2019-07-31 22:02:12',
              weeks_on_list: 37,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Becoming-Michelle-Obama/dp/1524763136?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9781524763138?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781524763138'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Three-Women-Lisa-Taddeo/dp/1451642296?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Lisa Taddeo',
              book_image: 'https://s1.nyt.com/du/books/images/9781451642292.jpg',
              book_image_width: 330,
              book_image_height: 493,
              book_review_link: 'https://www.nytimes.com/2019/06/28/books/review-three-women-lisa-taddeo.html',
              contributor: 'by Lisa Taddeo',
              contributor_note: '',
              created_date: '2019-07-31 22:02:12',
              description: 'The inequality of female desire is explored through the sex lives of a homemaker, a high school student and a restaurant owner.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '1451642296',
              primary_isbn13: '9781451642292',
              book_uri: 'nyt://book/d04618a0-18a6-5de7-bfc5-93703ba67ac7',
              publisher: 'Avid Reader',
              rank: 3,
              rank_last_week: 3,
              sunday_review_link: '',
              title: 'THREE WOMEN',
              updated_date: '2019-07-31 22:02:12',
              weeks_on_list: 3,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Three-Women-Lisa-Taddeo/dp/1451642296?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9781451642292?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781451642292'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Pioneers-Heroic-Settlers-Brought-American/dp/1501168681?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'David McCullough',
              book_image: 'https://s1.nyt.com/du/books/images/9781501168680.jpg',
              book_image_width: 330,
              book_image_height: 491,
              book_review_link: 'https://www.nytimes.com/2019/05/13/books/review/david-mccullough-pioneers.html',
              contributor: 'by David McCullough',
              contributor_note: '',
              created_date: '2019-07-31 22:02:12',
              description: 'The Pulitzer Prize-winning historian tells the story of the settling of the Northwest Territory through five main characters.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '1501168681',
              primary_isbn13: '9781501168680',
              book_uri: 'nyt://book/df1561f5-d15a-52bc-94e0-f56125a91f39',
              publisher: 'Simon & Schuster',
              rank: 4,
              rank_last_week: 5,
              sunday_review_link: '',
              title: 'THE PIONEERS',
              updated_date: '2019-07-31 22:02:12',
              weeks_on_list: 12,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Pioneers-Heroic-Settlers-Brought-American/dp/1501168681?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9781501168680?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781501168680'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Mueller-Report-Washington-Post/dp/1982129735?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'with related materials  The Washington Post',
              book_image: 'https://s1.nyt.com/du/books/images/9781982129736.jpg',
              book_image_width: 330,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'with related materials by The Washington Post',
              contributor_note: '',
              created_date: '2019-07-31 22:02:12',
              description: 'Redacted findings from the special counsel’s investigation into Russian interference in the 2016 presidential election and potential obstruction of justice by the president.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '1982129735',
              primary_isbn13: '9781982129736',
              book_uri: 'nyt://book/d4a74353-2149-5275-9ca2-76e1483163d1',
              publisher: 'Scribner',
              rank: 5,
              rank_last_week: 11,
              sunday_review_link: '',
              title: 'THE MUELLER REPORT',
              updated_date: '2019-07-31 22:02:12',
              weeks_on_list: 14,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Mueller-Report-Washington-Post/dp/1982129735?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9781982129736?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781982129736'
                }
              ]
            }
          ]
        },
        {
          list_id: 1,
          list_name: 'Hardcover Fiction',
          list_name_encoded: 'hardcover-fiction',
          display_name: 'Hardcover Fiction',
          updated: 'WEEKLY',
          list_image: 'https://s1.nyt.com/du/books/images/9781538750568.jpg',
          list_image_width: 328,
          list_image_height: 495,
          books: [
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/One-Good-Deed-David-Baldacci/dp/1538750562?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'David Baldacci',
              book_image: 'https://s1.nyt.com/du/books/images/9781538750568.jpg',
              book_image_width: 328,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by David Baldacci',
              contributor_note: '',
              created_date: '2019-07-31 22:02:03',
              description: 'A World War II veteran on parole must find the real killer in a small town or face going back to jail.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '1538750562',
              primary_isbn13: '9781538750568',
              book_uri: 'nyt://book/4b97780e-24db-5f2b-a944-af107d586812',
              publisher: 'Grand Central',
              rank: 1,
              rank_last_week: 0,
              sunday_review_link: '',
              title: 'ONE GOOD DEED',
              updated_date: '2019-07-31 22:02:03',
              weeks_on_list: 1,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/One-Good-Deed-David-Baldacci/dp/1538750562?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9781538750568?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781538750568'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Where-Crawdads-Sing-Delia-Owens/dp/0735219095?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Delia Owens',
              book_image: 'https://s1.nyt.com/du/books/images/9780735219090.jpg',
              book_image_width: 328,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by Delia Owens',
              contributor_note: '',
              created_date: '2019-07-31 22:02:03',
              description: 'A woman who survived alone in the marsh becomes a murder suspect.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0735219095',
              primary_isbn13: '9780735219090',
              book_uri: 'nyt://book/053b4109-4555-5aa1-9b39-cc40549bcdf0',
              publisher: 'Putnam',
              rank: 2,
              rank_last_week: 2,
              sunday_review_link: '',
              title: 'WHERE THE CRAWDADS SING',
              updated_date: '2019-07-31 22:02:03',
              weeks_on_list: 47,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Where-Crawdads-Sing-Delia-Owens/dp/0735219095?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780735219090?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780735219090'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Nickel-Boys-Novel-Colson-Whitehead/dp/0385537077?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Colson Whitehead',
              book_image: 'https://s1.nyt.com/du/books/images/9780385537070.jpg',
              book_image_width: 328,
              book_image_height: 495,
              book_review_link: 'https://www.nytimes.com/2019/07/11/books/review-nickel-boys-colson-whitehead.html',
              contributor: 'by Colson Whitehead',
              contributor_note: '',
              created_date: '2019-07-31 22:02:03',
              description: 'Two boys respond to horrors at a Jim Crow-era reform school in ways that impact them decades later.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0385537077',
              primary_isbn13: '9780385537070',
              book_uri: 'nyt://book/b9c84bf7-ad1c-56a3-9b42-e9b37e488f42',
              publisher: 'Doubleday',
              rank: 3,
              rank_last_week: 3,
              sunday_review_link: '',
              title: 'THE NICKEL BOYS',
              updated_date: '2019-07-31 22:02:03',
              weeks_on_list: 2,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Nickel-Boys-Novel-Colson-Whitehead/dp/0385537077?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780385537070?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780385537070'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/New-Girl-Novel-Gabriel-Allon-ebook/dp/B07F18LND4?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Daniel Silva',
              book_image: 'https://s1.nyt.com/du/books/images/9780062834898.jpg',
              book_image_width: 328,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by Daniel Silva',
              contributor_note: '',
              created_date: '2019-07-31 22:02:03',
              description: 'Gabriel Allon, the chief of Israeli intelligence, partners with the crown prince of Saudi Arabia, whose daughter is kidnapped.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0062834835',
              primary_isbn13: '9780062834836',
              book_uri: 'nyt://book/f874a364-0ea2-5b11-b9be-4ee9bdfba807',
              publisher: 'Harper',
              rank: 4,
              rank_last_week: 1,
              sunday_review_link: '',
              title: 'THE NEW GIRL',
              updated_date: '2019-07-31 22:02:03',
              weeks_on_list: 2,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/New-Girl-Novel-Gabriel-Allon-ebook/dp/B07F18LND4?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780062834836?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062834836'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Thrawn-Treason-Star-Wars/dp/1984820982?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Timothy Zahn',
              book_image: 'https://s1.nyt.com/du/books/images/9781984820983.jpg',
              book_image_width: 326,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by Timothy Zahn',
              contributor_note: '',
              created_date: '2019-07-31 22:02:03',
              description: 'A Star Wars saga. Grand Admiral Thrawn must choose between his sense of duty to the Chiss Ascendancy and loyalty to the Empire.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '1984820982',
              primary_isbn13: '9781984820983',
              book_uri: 'nyt://book/9a3fee10-e876-5c52-934d-73a78cf64361',
              publisher: 'Del Rey',
              rank: 5,
              rank_last_week: 0,
              sunday_review_link: '',
              title: 'THRAWN: TREASON',
              updated_date: '2019-07-31 22:02:03',
              weeks_on_list: 1,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Thrawn-Treason-Star-Wars/dp/1984820982?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9781984820983?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781984820983'
                }
              ]
            }
          ]
        },
        {
          list_id: 2,
          list_name: 'Hardcover Nonfiction',
          list_name_encoded: 'hardcover-nonfiction',
          display_name: 'Hardcover Nonfiction',
          updated: 'WEEKLY',
          list_image: 'https://s1.nyt.com/du/books/images/9780399590504.jpg',
          list_image_width: 328,
          list_image_height: 495,
          books: [
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Educated-Memoir-Tara-Westover/dp/0399590501?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Tara Westover',
              book_image: 'https://s1.nyt.com/du/books/images/9780399590504.jpg',
              book_image_width: 328,
              book_image_height: 495,
              book_review_link: 'https://www.nytimes.com/2018/03/01/books/review/tara-westover-educated.html',
              contributor: 'by Tara Westover',
              contributor_note: '',
              created_date: '2019-07-31 22:02:08',
              description: 'The daughter of survivalists leaves home for university.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0399590501',
              primary_isbn13: '9780399590504',
              book_uri: 'nyt://book/08c80da5-f436-5afd-b925-42fe6f0c28cc',
              publisher: 'Random House',
              rank: 1,
              rank_last_week: 1,
              sunday_review_link: '',
              title: 'EDUCATED',
              updated_date: '2019-07-31 22:02:08',
              weeks_on_list: 75,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Educated-Memoir-Tara-Westover/dp/0399590501?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780399590504?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780399590504'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Becoming-Michelle-Obama/dp/1524763136?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Michelle Obama',
              book_image: 'https://s1.nyt.com/du/books/images/9781524763138.jpg',
              book_image_width: 326,
              book_image_height: 495,
              book_review_link: 'https://www.nytimes.com/2018/12/06/books/review/michelle-obama-becoming-memoir.html',
              contributor: 'by Michelle Obama',
              contributor_note: '',
              created_date: '2019-07-31 22:02:09',
              description: 'The former first lady describes how she balanced work, family and her husband’s political ascent.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '1524763136',
              primary_isbn13: '9781524763138',
              book_uri: 'nyt://book/2892bc2e-4ad3-5e0a-bc6e-d2cd983c3c52',
              publisher: 'Crown',
              rank: 2,
              rank_last_week: 4,
              sunday_review_link: '',
              title: 'BECOMING',
              updated_date: '2019-07-31 22:02:09',
              weeks_on_list: 37,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Becoming-Michelle-Obama/dp/1524763136?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9781524763138?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781524763138'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Pioneers-Heroic-Settlers-Brought-American/dp/1501168681?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'David McCullough',
              book_image: 'https://s1.nyt.com/du/books/images/9781501168680.jpg',
              book_image_width: 330,
              book_image_height: 491,
              book_review_link: 'https://www.nytimes.com/2019/05/13/books/review/david-mccullough-pioneers.html',
              contributor: 'by David McCullough',
              contributor_note: '',
              created_date: '2019-07-31 22:02:09',
              description: 'The Pulitzer Prize-winning historian tells the story of the settling of the Northwest Territory through five main characters.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '1501168681',
              primary_isbn13: '9781501168680',
              book_uri: 'nyt://book/df1561f5-d15a-52bc-94e0-f56125a91f39',
              publisher: 'Simon & Schuster',
              rank: 3,
              rank_last_week: 3,
              sunday_review_link: '',
              title: 'THE PIONEERS',
              updated_date: '2019-07-31 22:02:09',
              weeks_on_list: 12,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Pioneers-Heroic-Settlers-Brought-American/dp/1501168681?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9781501168680?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781501168680'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Three-Women-Lisa-Taddeo/dp/1451642296?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Lisa Taddeo',
              book_image: 'https://s1.nyt.com/du/books/images/9781451642292.jpg',
              book_image_width: 330,
              book_image_height: 493,
              book_review_link: 'https://www.nytimes.com/2019/06/28/books/review-three-women-lisa-taddeo.html',
              contributor: 'by Lisa Taddeo',
              contributor_note: '',
              created_date: '2019-07-31 22:02:09',
              description: 'The inequality of female desire is explored through the sex lives of a homemaker, a high school student and a restaurant owner.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '1451642296',
              primary_isbn13: '9781451642292',
              book_uri: 'nyt://book/d04618a0-18a6-5de7-bfc5-93703ba67ac7',
              publisher: 'Avid Reader',
              rank: 4,
              rank_last_week: 5,
              sunday_review_link: '',
              title: 'THREE WOMEN',
              updated_date: '2019-07-31 22:02:09',
              weeks_on_list: 3,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Three-Women-Lisa-Taddeo/dp/1451642296?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9781451642292?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781451642292'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Unfreedom-Press-Mark-R-Levin/dp/1476773092?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Mark R Levin',
              book_image: 'https://s1.nyt.com/du/books/images/9781476773094.jpg',
              book_image_width: 323,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by Mark R. Levin',
              contributor_note: '',
              created_date: '2019-07-31 22:02:09',
              description: 'The conservative commentator and radio host makes his case that the press is aligned with political ideology.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '1476773092',
              primary_isbn13: '9781476773094',
              book_uri: 'nyt://book/f5df2207-179e-5504-95de-d5c3d8f8f066',
              publisher: 'Threshold Editions',
              rank: 5,
              rank_last_week: 6,
              sunday_review_link: '',
              title: 'UNFREEDOM OF THE PRESS',
              updated_date: '2019-07-31 22:02:09',
              weeks_on_list: 10,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Unfreedom-Press-Mark-R-Levin/dp/1476773092?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9781476773094?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781476773094'
                }
              ]
            }
          ]
        },
        {
          list_id: 17,
          list_name: 'Trade Fiction Paperback',
          list_name_encoded: 'trade-fiction-paperback',
          display_name: 'Paperback Trade Fiction',
          updated: 'WEEKLY',
          list_image: 'https://s1.nyt.com/du/books/images/9780425284681.jpg',
          list_image_width: 330,
          list_image_height: 495,
          books: [
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Before-We-Were-Yours-Novel/dp/0425284689?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Lisa Wingate',
              book_image: 'https://s1.nyt.com/du/books/images/9780425284681.jpg',
              book_image_width: 330,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by Lisa Wingate',
              contributor_note: '',
              created_date: '2019-07-31 22:02:08',
              description: 'A South Carolina lawyer learns about the questionable practices of a Tennessee orphanage.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0425284700',
              primary_isbn13: '9780425284704',
              book_uri: 'nyt://book/44a5774a-c9b1-5b39-84b4-09e1985a9706',
              publisher: 'Ballantine',
              rank: 1,
              rank_last_week: 2,
              sunday_review_link: '',
              title: 'BEFORE WE WERE YOURS',
              updated_date: '2019-07-31 22:02:08',
              weeks_on_list: 10,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Before-We-Were-Yours-Novel/dp/0425284689?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780425284704?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780425284704'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Tattooist-Auschwitz-Novel-Heather-Morris/dp/0062797158?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Heather Morris',
              book_image: 'https://s1.nyt.com/du/books/images/9780062797155.jpg',
              book_image_width: 328,
              book_image_height: 495,
              book_review_link: 'https://www.nytimes.com/2018/11/16/books/review/tattooist-auschwitz-heather-morris.html',
              contributor: 'by Heather Morris',
              contributor_note: '',
              created_date: '2019-07-31 22:02:08',
              description: 'A concentration camp detainee tasked with permanently marking fellow prisoners falls in love with one of them.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0062797158',
              primary_isbn13: '9780062797155',
              book_uri: 'nyt://book/f61306e8-2543-561b-bbde-78c9d188cb39',
              publisher: 'Harper',
              rank: 2,
              rank_last_week: 3,
              sunday_review_link: '',
              title: 'THE TATTOOIST OF AUSCHWITZ',
              updated_date: '2019-07-31 22:02:08',
              weeks_on_list: 47,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Tattooist-Auschwitz-Novel-Heather-Morris/dp/0062797158?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780062797155?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062797155'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Little-Fires-Everywhere-Celeste-Ng-ebook/dp/B01N4VW75U?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Celeste Ng',
              book_image: 'https://s1.nyt.com/du/books/images/9780735224308.jpg',
              book_image_width: 328,
              book_image_height: 495,
              book_review_link: 'https://www.nytimes.com/2017/09/25/books/review/little-fires-everywhere-celeste-ng.html',
              contributor: 'by Celeste Ng',
              contributor_note: '',
              created_date: '2019-07-31 22:02:08',
              description: 'An artist with a mysterious past and a disregard for the status quo upends a quiet town outside Cleveland.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0735224315',
              primary_isbn13: '9780735224315',
              book_uri: 'nyt://book/f343748c-cc89-5545-a895-324c4190a56f',
              publisher: 'Penguin',
              rank: 3,
              rank_last_week: 4,
              sunday_review_link: '',
              title: 'LITTLE FIRES EVERYWHERE',
              updated_date: '2019-07-31 22:02:08',
              weeks_on_list: 12,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Little-Fires-Everywhere-Celeste-Ng-ebook/dp/B01N4VW75U?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780735224315?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780735224315'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Eleanor-Oliphant-Completely-Fine-Novel/dp/0735220697?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Gail Honeyman',
              book_image: 'https://s1.nyt.com/du/books/images/9780735220690.jpg',
              book_image_width: 329,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by Gail Honeyman',
              contributor_note: '',
              created_date: '2019-07-31 22:02:08',
              description: 'A young woman’s well-ordered life is disrupted by the I.T. guy from her office.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0735220697',
              primary_isbn13: '9780735220690',
              book_uri: 'nyt://book/2bd6c088-1047-5294-ba1e-aa762b6b06d8',
              publisher: 'Penguin',
              rank: 4,
              rank_last_week: 7,
              sunday_review_link: '',
              title: 'ELEANOR OLIPHANT IS COMPLETELY FINE',
              updated_date: '2019-07-31 22:02:08',
              weeks_on_list: 60,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Eleanor-Oliphant-Completely-Fine-Novel/dp/0735220697?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780735220690?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780735220690'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Woman-Window-Novel-J-Finn/dp/0062678418?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'AJ Finn',
              book_image: 'https://s1.nyt.com/du/books/images/9780062678416.jpg',
              book_image_width: 330,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by A.J. Finn',
              contributor_note: '',
              created_date: '2019-07-31 22:02:08',
              description: 'A recluse who drinks heavily and takes prescription drugs may have witnessed a crime across from her Harlem townhouse.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0062678426',
              primary_isbn13: '9780062678423',
              book_uri: 'nyt://book/09920fff-91d3-5cac-a955-573530bee64b',
              publisher: 'Morrow',
              rank: 5,
              rank_last_week: 5,
              sunday_review_link: '',
              title: 'THE WOMAN IN THE WINDOW',
              updated_date: '2019-07-31 22:02:08',
              weeks_on_list: 21,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Woman-Window-Novel-J-Finn/dp/0062678418?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780062678423?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062678423'
                }
              ]
            }
          ]
        },
        {
          list_id: 4,
          list_name: 'Paperback Nonfiction',
          list_name_encoded: 'paperback-nonfiction',
          display_name: 'Paperback Nonfiction',
          updated: 'WEEKLY',
          list_image: 'https://s1.nyt.com/du/books/images/9781982129736.jpg',
          list_image_width: 330,
          list_image_height: 495,
          books: [
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Mueller-Report-Washington-Post/dp/1982129735?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'with related materials  The Washington Post',
              book_image: 'https://s1.nyt.com/du/books/images/9781982129736.jpg',
              book_image_width: 330,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'with related materials by The Washington Post',
              contributor_note: '',
              created_date: '2019-07-31 22:02:10',
              description: 'Redacted findings from the special counsel’s investigation into Russian interference in the 2016 presidential election and potential obstruction of justice by the president.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '1982129735',
              primary_isbn13: '9781982129736',
              book_uri: 'nyt://book/d4a74353-2149-5275-9ca2-76e1483163d1',
              publisher: 'Scribner',
              rank: 1,
              rank_last_week: 3,
              sunday_review_link: '',
              title: 'THE MUELLER REPORT',
              updated_date: '2019-07-31 22:02:10',
              weeks_on_list: 14,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Mueller-Report-Washington-Post/dp/1982129735?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9781982129736?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781982129736'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Born-Crime-Stories-African-Childhood-ebook/dp/B01DHWACVY?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Trevor Noah',
              book_image: 'https://s1.nyt.com/du/books/images/9780399588181.jpg',
              book_image_width: 326,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by Trevor Noah',
              contributor_note: '',
              created_date: '2019-07-31 22:02:10',
              description: 'A memoir about growing up biracial in apartheid South Africa by the host of “The Daily Show.”',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0399588191',
              primary_isbn13: '9780399588198',
              book_uri: 'nyt://book/c82bc1ff-7305-5acf-b948-a4163f03e2bc',
              publisher: 'Spiegel & Grau',
              rank: 2,
              rank_last_week: 1,
              sunday_review_link: '',
              title: 'BORN A CRIME',
              updated_date: '2019-07-31 22:02:10',
              weeks_on_list: 24,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Born-Crime-Stories-African-Childhood-ebook/dp/B01DHWACVY?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780399588198?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780399588198'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'http://www.amazon.com/Sapiens-A-Brief-History-Humankind-ebook/dp/B00ICN066A?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Yuval Noah Harari',
              book_image: 'https://s1.nyt.com/du/books/images/9780062316097.jpg',
              book_image_width: 128,
              book_image_height: 192,
              book_review_link: '',
              contributor: 'by Yuval Noah Harari',
              contributor_note: '',
              created_date: '2019-07-31 22:02:10',
              description: 'How Homo sapiens became Earth’s dominant species.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0062316117',
              primary_isbn13: '9780062316110',
              book_uri: 'nyt://book/8396e181-cd69-5074-a009-ec8f051c54f2',
              publisher: 'Harper Perennial',
              rank: 3,
              rank_last_week: 4,
              sunday_review_link: '',
              title: 'SAPIENS',
              updated_date: '2019-07-31 22:02:10',
              weeks_on_list: 63,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'http://www.amazon.com/Sapiens-A-Brief-History-Humankind-ebook/dp/B00ICN066A?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780062316110?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062316110'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'http://www.amazon.com/The-Body-Keeps-Score-Healing/dp/0670785938?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Bessel van der Kolk',
              book_image: 'https://s1.nyt.com/du/books/images/9780670785933.jpg',
              book_image_width: 128,
              book_image_height: 193,
              book_review_link: '',
              contributor: 'by Bessel van der Kolk',
              contributor_note: '',
              created_date: '2019-07-31 22:02:10',
              description: 'How trauma affects the body and mind, and innovative treatments for recovery.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0143127748',
              primary_isbn13: '9780143127741',
              book_uri: 'nyt://book/e3e33e9d-0e67-5fec-b0d2-2ecddc38ce0e',
              publisher: 'Penguin',
              rank: 4,
              rank_last_week: 7,
              sunday_review_link: '',
              title: 'THE BODY KEEPS THE SCORE',
              updated_date: '2019-07-31 22:02:10',
              weeks_on_list: 40,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'http://www.amazon.com/The-Body-Keeps-Score-Healing/dp/0670785938?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780143127741?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780143127741'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/White-Fragility-People-About-Racism/dp/0807047414?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Robin DiAngelo',
              book_image: 'https://s1.nyt.com/du/books/images/9780807047415.jpg',
              book_image_width: 330,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by Robin DiAngelo',
              contributor_note: '',
              created_date: '2019-07-31 22:02:10',
              description: 'Historical and cultural analyses on what causes defensive moves by white people and how this inhibits cross-racial dialogue.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0807047414',
              primary_isbn13: '9780807047415',
              book_uri: 'nyt://book/27f88b69-d265-5d7b-8950-01377374e783',
              publisher: 'Beacon Press',
              rank: 5,
              rank_last_week: 6,
              sunday_review_link: '',
              title: 'WHITE FRAGILITY',
              updated_date: '2019-07-31 22:02:10',
              weeks_on_list: 55,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/White-Fragility-People-About-Racism/dp/0807047414?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780807047415?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780807047415'
                }
              ]
            }
          ]
        },
        {
          list_id: 24,
          list_name: 'Advice How-To and Miscellaneous',
          list_name_encoded: 'advice-how-to-and-miscellaneous',
          display_name: 'Advice, How-To & Miscellaneous',
          updated: 'WEEKLY',
          list_image: 'https://s1.nyt.com/du/books/images/9780062457714.jpg',
          list_image_width: 330,
          list_image_height: 495,
          books: [
            {
              age_group: '',
              amazon_product_url: 'http://www.amazon.com/Subtle-Art-Not-Giving-Counterintuitive/dp/0062457713?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Mark Manson',
              book_image: 'https://s1.nyt.com/du/books/images/9780062457714.jpg',
              book_image_width: 330,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by Mark Manson',
              contributor_note: '',
              created_date: '2019-07-31 22:02:09',
              description: '',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0062457713',
              primary_isbn13: '9780062457714',
              book_uri: 'nyt://book/61980bbe-79bd-5824-9412-31c5f07762fd',
              publisher: 'Harper',
              rank: 1,
              rank_last_week: 2,
              sunday_review_link: '',
              title: 'THE SUBTLE ART OF NOT GIVING A F*CK',
              updated_date: '2019-07-31 22:02:09',
              weeks_on_list: 137,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'http://www.amazon.com/Subtle-Art-Not-Giving-Counterintuitive/dp/0062457713?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780062457714?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062457714'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Girl-Wash-Your-Face-Believing/dp/1400201659?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Rachel Hollis',
              book_image: 'https://s1.nyt.com/du/books/images/9781400201655.jpg',
              book_image_width: 325,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by Rachel Hollis',
              contributor_note: '',
              created_date: '2019-07-31 22:02:09',
              description: '',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '1400201659',
              primary_isbn13: '9781400201655',
              book_uri: 'nyt://book/a2cb761a-3858-5ce8-86f3-f1d3245be6bc',
              publisher: 'Thomas Nelson',
              rank: 2,
              rank_last_week: 4,
              sunday_review_link: '',
              title: 'GIRL, WASH YOUR FACE',
              updated_date: '2019-07-31 22:02:09',
              weeks_on_list: 68,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Girl-Wash-Your-Face-Believing/dp/1400201659?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9781400201655?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781400201655'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'http://www.amazon.com/You-Are-Badass-Doubting-Greatness-ebook/dp/B00B3M3VWS?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Jen Sincero',
              book_image: 'https://s1.nyt.com/du/books/images/9780762447695.jpg',
              book_image_width: 315,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by Jen Sincero',
              contributor_note: '',
              created_date: '2019-07-31 22:02:09',
              description: '',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0762447699',
              primary_isbn13: '9780762447695',
              book_uri: 'nyt://book/c6bbe004-75a3-5030-9472-9d5632f212f4',
              publisher: 'Running Press',
              rank: 3,
              rank_last_week: 3,
              sunday_review_link: '',
              title: 'YOU ARE A BADASS',
              updated_date: '2019-07-31 22:02:09',
              weeks_on_list: 182,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'http://www.amazon.com/You-Are-Badass-Doubting-Greatness-ebook/dp/B00B3M3VWS?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780762447695?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780762447695'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Dare-Lead-Brave-Conversations-Hearts/dp/0399592520?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Brené Brown',
              book_image: 'https://s1.nyt.com/du/books/images/9780399592522.jpg',
              book_image_width: 326,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by Brené Brown',
              contributor_note: '',
              created_date: '2019-07-31 22:02:09',
              description: '',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0399592520',
              primary_isbn13: '9780399592522',
              book_uri: 'nyt://book/e9569270-fe3a-5fe4-a068-7eca3da622e7',
              publisher: 'Random House',
              rank: 4,
              rank_last_week: 5,
              sunday_review_link: '',
              title: 'DARE TO LEAD',
              updated_date: '2019-07-31 22:02:09',
              weeks_on_list: 27,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Dare-Lead-Brave-Conversations-Hearts/dp/0399592520?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780399592522?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780399592522'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Girl-Stop-Apologizing-Shame-Free-Embracing/dp/1400209609?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Rachel Hollis',
              book_image: 'https://s1.nyt.com/du/books/images/9781400209606.jpg',
              book_image_width: 325,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by Rachel Hollis',
              contributor_note: '',
              created_date: '2019-07-31 22:02:09',
              description: '',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '1400209609',
              primary_isbn13: '9781400209606',
              book_uri: 'nyt://book/d60d3b6b-730e-52d3-9309-b3e93822d06e',
              publisher: 'HarperCollins Leadership',
              rank: 5,
              rank_last_week: 1,
              sunday_review_link: '',
              title: 'GIRL, STOP APOLOGIZING',
              updated_date: '2019-07-31 22:02:09',
              weeks_on_list: 21,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Girl-Stop-Apologizing-Shame-Free-Embracing/dp/1400209609?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9781400209606?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781400209606'
                }
              ]
            }
          ]
        },
        {
          list_id: 13,
          list_name: 'Childrens Middle Grade Hardcover',
          list_name_encoded: 'childrens-middle-grade-hardcover',
          display_name: 'Children’s Middle Grade Hardcover',
          updated: 'WEEKLY',
          list_image: 'https://s1.nyt.com/du/books/images/9781419740275.jpg',
          list_image_width: 330,
          list_image_height: 484,
          books: [
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Diary-Awesome-Friendly-Jeff-Kinney/dp/141974027X?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Jeff Kinney',
              book_image: 'https://s1.nyt.com/du/books/images/9781419740275.jpg',
              book_image_width: 330,
              book_image_height: 484,
              book_review_link: '',
              contributor: 'by Jeff Kinney',
              contributor_note: '',
              created_date: '2019-07-31 22:02:07',
              description: 'Greg’s best friend Rowley Jefferson writes his own diary.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '141974027X',
              primary_isbn13: '9781419740275',
              book_uri: 'nyt://book/2c334e8d-2b14-588a-9e43-98e5cad415ef',
              publisher: 'Amulet',
              rank: 1,
              rank_last_week: 1,
              sunday_review_link: '',
              title: 'DIARY OF AN AWESOME FRIENDLY KID',
              updated_date: '2019-07-31 22:02:07',
              weeks_on_list: 16,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Diary-Awesome-Friendly-Jeff-Kinney/dp/141974027X?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9781419740275?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781419740275'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'http://www.amazon.com/Wonder-R-J-Palacio-ebook/dp/B0051ANPZQ?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'RJ Palacio',
              book_image: 'https://s1.nyt.com/du/books/images/9780375899881.jpg',
              book_image_width: 329,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by R.J. Palacio',
              contributor_note: '',
              created_date: '2019-07-31 22:02:07',
              description: 'A boy with a facial deformity starts school.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0375869026',
              primary_isbn13: '9780375869020',
              book_uri: 'nyt://book/ae6bd2cf-a5d7-535a-99dd-ca8e283c2b01',
              publisher: 'Knopf',
              rank: 2,
              rank_last_week: 2,
              sunday_review_link: 'https://www.nytimes.com/2012/04/08/books/review/wonder-by-r-j-palacio.html',
              title: 'WONDER',
              updated_date: '2019-07-31 22:02:07',
              weeks_on_list: 207,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'http://www.amazon.com/Wonder-R-J-Palacio-ebook/dp/B0051ANPZQ?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780375869020?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780375869020'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Refugee-Alan-Gratz/dp/0545880831?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Alan Gratz',
              book_image: 'https://s1.nyt.com/du/books/images/9780545880831.jpg',
              book_image_width: 327,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by Alan Gratz',
              contributor_note: '',
              created_date: '2019-07-31 22:02:07',
              description: 'Three children in three different conflicts look for safe haven.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0545880831',
              primary_isbn13: '9780545880831',
              book_uri: 'nyt://book/32519cc3-8ee6-5bc8-9a1a-563502a5d2ad',
              publisher: 'Scholastic',
              rank: 3,
              rank_last_week: 3,
              sunday_review_link: '',
              title: 'REFUGEE',
              updated_date: '2019-07-31 22:02:07',
              weeks_on_list: 65,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Refugee-Alan-Gratz/dp/0545880831?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780545880831?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780545880831'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Katt-vs-Dogg-James-Patterson/dp/0316411566?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'James Patterson and Chris Grabenstein',
              book_image: 'https://s1.nyt.com/du/books/images/9780316411561.jpg',
              book_image_width: 330,
              book_image_height: 487,
              book_review_link: '',
              contributor: 'by James Patterson and Chris Grabenstein. Illustrated by Anuki Lopez',
              contributor_note: 'Illustrated by Anuki Lopez',
              created_date: '2019-07-31 22:02:07',
              description: 'Oscar and Molly call a temporary truce while they try to find their way out of the forest.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0316411566',
              primary_isbn13: '9780316411561',
              book_uri: 'nyt://book/06c076af-10ef-5c9b-8a56-930a25817900',
              publisher: 'jimmy patterson',
              rank: 4,
              rank_last_week: 5,
              sunday_review_link: '',
              title: 'KATT VS. DOGG',
              updated_date: '2019-07-31 22:02:07',
              weeks_on_list: 17,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Katt-vs-Dogg-James-Patterson/dp/0316411566?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780316411561?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780316411561'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Wolf-Called-Wander-Rosanne-Parry/dp/0062895931?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Rosanne Parry',
              book_image: 'https://s1.nyt.com/du/books/images/9780062895936.jpg',
              book_image_width: 328,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by Rosanne Parry. Illustrated by Mónica Armiño',
              contributor_note: 'Illustrated by Mónica Armiño',
              created_date: '2019-07-31 22:02:07',
              description: 'A young wolf named Swift embarks on a perilous journey.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0062895931',
              primary_isbn13: '9780062895936',
              book_uri: 'nyt://book/6102cac8-d02a-5510-9d8a-832e650a4002',
              publisher: 'Greenwillow',
              rank: 5,
              rank_last_week: 7,
              sunday_review_link: '',
              title: 'A WOLF CALLED WANDER',
              updated_date: '2019-07-31 22:02:07',
              weeks_on_list: 11,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Wolf-Called-Wander-Rosanne-Parry/dp/0062895931?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780062895936?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062895936'
                }
              ]
            }
          ]
        },
        {
          list_id: 7,
          list_name: 'Picture Books',
          list_name_encoded: 'picture-books',
          display_name: 'Children’s Picture Books',
          updated: 'WEEKLY',
          list_image: 'https://s1.nyt.com/du/books/images/9781368003551.jpg',
          list_image_width: 330,
          list_image_height: 249,
          books: [
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/We-Dont-Eat-Our-Classmates/dp/1368003559?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Ryan T Higgins',
              book_image: 'https://s1.nyt.com/du/books/images/9781368003551.jpg',
              book_image_width: 330,
              book_image_height: 249,
              book_review_link: '',
              contributor: 'by Ryan T. Higgins',
              contributor_note: '',
              created_date: '2019-07-31 22:02:10',
              description: 'Penelope Rex must control her urge to eat the children in her class.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '1368003559',
              primary_isbn13: '9781368003551',
              book_uri: 'nyt://book/da87a064-8146-57d0-8e43-ac3a5d05b646',
              publisher: 'Disney-Hyperion',
              rank: 1,
              rank_last_week: 7,
              sunday_review_link: '',
              title: 'WE DON\'T EAT OUR CLASSMATES!',
              updated_date: '2019-07-31 22:02:10',
              weeks_on_list: 15,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/We-Dont-Eat-Our-Classmates/dp/1368003559?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9781368003551?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781368003551'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Pigeon-HAS-Go-School/dp/1368046452?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Mo Willems',
              book_image: 'https://s1.nyt.com/du/books/images/9781368046459.jpg',
              book_image_width: 330,
              book_image_height: 330,
              book_review_link: '',
              contributor: 'by Mo Willems',
              contributor_note: '',
              created_date: '2019-07-31 22:02:10',
              description: 'Pigeon deals with the anxieties of going to school for the first time.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '1368046452',
              primary_isbn13: '9781368046459',
              book_uri: 'nyt://book/9c5942b0-2cdd-5be0-81ac-a2c78db6c95a',
              publisher: 'Hyperion',
              rank: 2,
              rank_last_week: 1,
              sunday_review_link: '',
              title: 'THE PIGEON HAS TO GO TO SCHOOL!',
              updated_date: '2019-07-31 22:02:10',
              weeks_on_list: 4,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Pigeon-HAS-Go-School/dp/1368046452?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9781368046459?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781368046459'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'http://www.amazon.com/The-Wonderful-Things-You-Will/dp/0385376715?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Emily Winfield Martin',
              book_image: 'https://s1.nyt.com/du/books/images/9780385376716.jpg',
              book_image_width: 330,
              book_image_height: 347,
              book_review_link: '',
              contributor: 'by Emily Winfield Martin',
              contributor_note: '',
              created_date: '2019-07-31 22:02:10',
              description: 'A celebration of future possibilities.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0385376715',
              primary_isbn13: '9780385376716',
              book_uri: 'nyt://book/36cac861-60d3-511f-ba6d-edc88c6e938e',
              publisher: 'Random House',
              rank: 3,
              rank_last_week: 5,
              sunday_review_link: '',
              title: 'THE WONDERFUL THINGS YOU WILL BE',
              updated_date: '2019-07-31 22:02:10',
              weeks_on_list: 195,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'http://www.amazon.com/The-Wonderful-Things-You-Will/dp/0385376715?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780385376716?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780385376716'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'http://www.amazon.com/Dragons-Love-Tacos-Adam-Rubin/dp/0803736800?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Adam Rubin',
              book_image: 'https://s1.nyt.com/du/books/images/9780803736801.jpg',
              book_image_width: 330,
              book_image_height: 330,
              book_review_link: '',
              contributor: 'by Adam Rubin. Illustrated by Daniel Salmieri',
              contributor_note: 'Illustrated by Daniel Salmieri',
              created_date: '2019-07-31 22:02:10',
              description: 'What to serve your dragon-guests.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0803736800',
              primary_isbn13: '9780803736801',
              book_uri: 'nyt://book/25d4f970-1f30-515b-a88c-691b4854bc63',
              publisher: 'Dial',
              rank: 4,
              rank_last_week: 8,
              sunday_review_link: '',
              title: 'DRAGONS LOVE TACOS',
              updated_date: '2019-07-31 22:02:10',
              weeks_on_list: 282,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'http://www.amazon.com/Dragons-Love-Tacos-Adam-Rubin/dp/0803736800?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780803736801?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780803736801'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'http://www.amazon.com/Waiting-Easy-Elephant-Piggie-Book/dp/142319957X?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Mo Willems',
              book_image: 'https://s1.nyt.com/du/books/images/9781423199571.jpg',
              book_image_width: 128,
              book_image_height: 175,
              book_review_link: '',
              contributor: 'by Mo Willems',
              contributor_note: '',
              created_date: '2019-07-31 22:02:10',
              description: 'Impatient Gerald has to wait for Piggie’s promised surprise.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '142319957X',
              primary_isbn13: '9781423199571',
              book_uri: 'nyt://book/870f97fc-efee-5767-a329-6ee56f0492e6',
              publisher: 'Hyperion',
              rank: 5,
              rank_last_week: 6,
              sunday_review_link: '',
              title: 'WAITING IS NOT EASY!',
              updated_date: '2019-07-31 22:02:10',
              weeks_on_list: 60,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'http://www.amazon.com/Waiting-Easy-Elephant-Piggie-Book/dp/142319957X?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9781423199571?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781423199571'
                }
              ]
            }
          ]
        },
        {
          list_id: 10,
          list_name: 'Series Books',
          list_name_encoded: 'series-books',
          display_name: 'Children’s Series',
          updated: 'WEEKLY',
          list_image: 'https://s1.nyt.com/du/books/images/9780545935210.jpg',
          list_image_width: 330,
          list_image_height: 488,
          books: [
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Dog-Man-Kitties-Creator-Underpants/dp/0545935210?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Dav Pilkey',
              book_image: 'https://s1.nyt.com/du/books/images/9780545935210.jpg',
              book_image_width: 330,
              book_image_height: 488,
              book_review_link: '',
              contributor: 'by Dav Pilkey',
              contributor_note: '',
              created_date: '2019-07-31 22:02:07',
              description: 'A dog’s head is combined with a policeman’s body to create this hybrid supercop hound.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '1338236571',
              primary_isbn13: '9781338236576',
              book_uri: 'nyt://book/68097cd7-d054-58dc-b274-647aceda81a3',
              publisher: 'Scholastic',
              rank: 1,
              rank_last_week: 1,
              sunday_review_link: '',
              title: 'DOG MAN',
              updated_date: '2019-07-31 22:02:07',
              weeks_on_list: 100,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Dog-Man-Kitties-Creator-Underpants/dp/0545935210?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9781338236576?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781338236576'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'http://www.amazon.com/Diary-Wimpy-Kid-Hard-Luck/dp/1419711326?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Jeff Kinney',
              book_image: 'https://s1.nyt.com/du/books/images/9781419711329.jpg',
              book_image_width: 330,
              book_image_height: 484,
              book_review_link: '',
              contributor: 'written and illustrated by Jeff Kinney',
              contributor_note: 'written and illustrated by Jeff Kinney',
              created_date: '2019-07-31 22:02:07',
              description: 'The travails and challenges of adolescence.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '1419727435',
              primary_isbn13: '9781419727436',
              book_uri: 'nyt://book/8f18ce4b-5f88-5e6d-be58-7494643eef11',
              publisher: 'Amulet',
              rank: 2,
              rank_last_week: 3,
              sunday_review_link: '',
              title: 'DIARY OF A WIMPY KID',
              updated_date: '2019-07-31 22:02:07',
              weeks_on_list: 541,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'http://www.amazon.com/Diary-Wimpy-Kid-Hard-Luck/dp/1419711326?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9781419727436?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781419727436'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'http://www.amazon.com/Harry-Potter-And-Order-Phoenix/dp/0439358078?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'JK Rowling',
              book_image: 'https://s1.nyt.com/du/books/images/9780590353427.jpg',
              book_image_width: 328,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by J.K. Rowling',
              contributor_note: '',
              created_date: '2019-07-31 22:02:07',
              description: 'A wizard hones his conjuring skills in the service of fighting evil.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '059035342X',
              primary_isbn13: '9780590353427',
              book_uri: 'nyt://book/17005581-f735-545e-acaf-79dcfdd25a1f',
              publisher: 'Scholastic',
              rank: 3,
              rank_last_week: 2,
              sunday_review_link: '',
              title: 'HARRY POTTER',
              updated_date: '2019-07-31 22:02:07',
              weeks_on_list: 540,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'http://www.amazon.com/Harry-Potter-And-Order-Phoenix/dp/0439358078?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780590353427?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780590353427'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'http://www.amazon.com/Captain-Underpants-Revolting-Radioactive-Robo-Boxers/dp/0545175364?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Dav Pilkey',
              book_image: 'https://s1.nyt.com/du/books/images/9780545175340.jpg',
              book_image_width: 329,
              book_image_height: 475,
              book_review_link: 'https://www.nytimes.com/2011/06/29/books/review/childrens-books-super-diaper-baby-2-by-dav-pilkey.html',
              contributor: 'written and illustrated by Dav Pilkey',
              contributor_note: 'written and illustrated by Dav Pilkey',
              created_date: '2019-07-31 22:02:07',
              description: 'Boys and their principal fight evil.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '1338271504',
              primary_isbn13: '9781338271508',
              book_uri: 'nyt://book/f2e8e29d-6f2c-505a-8437-e35915986cf5',
              publisher: 'Scholastic',
              rank: 4,
              rank_last_week: 4,
              sunday_review_link: '',
              title: 'CAPTAIN UNDERPANTS',
              updated_date: '2019-07-31 22:02:07',
              weeks_on_list: 181,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'http://www.amazon.com/Captain-Underpants-Revolting-Radioactive-Robo-Boxers/dp/0545175364?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9781338271508?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781338271508'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Bad-Guys-Intergalactic-Gas/dp/1338189573?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Aaron Blabey',
              book_image: 'https://s1.nyt.com/du/books/images/9781338189575.jpg',
              book_image_width: 330,
              book_image_height: 420,
              book_review_link: '',
              contributor: 'by Aaron Blabey',
              contributor_note: '',
              created_date: '2019-07-31 22:02:07',
              description: 'Tough animals in suits take on some real villains.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '1338305816',
              primary_isbn13: '9781338305814',
              book_uri: 'nyt://book/e4bbe40f-c8e8-5233-88f3-a45d78ae8585',
              publisher: 'Scholastic',
              rank: 5,
              rank_last_week: 5,
              sunday_review_link: '',
              title: 'THE BAD GUYS',
              updated_date: '2019-07-31 22:02:07',
              weeks_on_list: 41,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Bad-Guys-Intergalactic-Gas/dp/1338189573?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9781338305814?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781338305814'
                }
              ]
            }
          ]
        },
        {
          list_id: 14,
          list_name: 'Young Adult Hardcover',
          list_name_encoded: 'young-adult-hardcover',
          display_name: 'Young Adult Hardcover',
          updated: 'WEEKLY',
          list_image: 'https://s1.nyt.com/du/books/images/9780062498533.jpg',
          list_image_width: 328,
          list_image_height: 495,
          books: [
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Hate-U-Give-Angie-Thomas/dp/0062498533?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Angie Thomas',
              book_image: 'https://s1.nyt.com/du/books/images/9780062498533.jpg',
              book_image_width: 328,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by Angie Thomas',
              contributor_note: '',
              created_date: '2019-07-31 22:02:07',
              description: 'A 16-year-old girl sees a police officer kill her friend.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '0062498533',
              primary_isbn13: '9780062498533',
              book_uri: 'nyt://book/42eef418-b5f3-5534-ac24-5edc53a4e5a6',
              publisher: 'Balzer + Bray',
              rank: 1,
              rank_last_week: 1,
              sunday_review_link: '',
              title: 'THE HATE U GIVE',
              updated_date: '2019-07-31 22:02:07',
              weeks_on_list: 126,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Hate-U-Give-Angie-Thomas/dp/0062498533?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780062498533?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062498533'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Five-Feet-Apart-Rachael-Lippincott/dp/1534437339?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Rachael Lippincott with Mikki Daughtry and Tobias Iaconis',
              book_image: 'https://s1.nyt.com/du/books/images/9781534437333.jpg',
              book_image_width: 328,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by Rachael Lippincott with Mikki Daughtry and Tobias Iaconis',
              contributor_note: '',
              created_date: '2019-07-31 22:02:07',
              description: 'Stella and Will are in love, but they can\'t get within five feet of each other.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '1534451560',
              primary_isbn13: '9781534451568',
              book_uri: 'nyt://book/d098ac6c-71df-5286-bab4-9898938641a8',
              publisher: 'Simon & Schuster',
              rank: 2,
              rank_last_week: 2,
              sunday_review_link: '',
              title: 'FIVE FEET APART',
              updated_date: '2019-07-31 22:02:07',
              weeks_on_list: 34,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Five-Feet-Apart-Rachael-Lippincott/dp/1534437339?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9781534451568?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781534451568'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Avatar-Last-Airbender-Kyoshi-Novels/dp/1419735047?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'F C Yee with Michael Dante DiMartino',
              book_image: 'https://s1.nyt.com/du/books/images/9781419735042.jpg',
              book_image_width: 325,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by F. C. Yee with Michael Dante DiMartino',
              contributor_note: '',
              created_date: '2019-07-31 22:02:07',
              description: 'Kyoshi flees with her friend Rangi after she discovers her airbending powers.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '1419735047',
              primary_isbn13: '9781419735042',
              book_uri: 'nyt://book/8cfde0c5-b683-581a-a1a8-8c361362acb9',
              publisher: 'Amulet',
              rank: 3,
              rank_last_week: 3,
              sunday_review_link: '',
              title: 'AVATAR, THE LAST AIRBENDER: THE RISE OF KYOSHI',
              updated_date: '2019-07-31 22:02:07',
              weeks_on_list: 2,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Avatar-Last-Airbender-Kyoshi-Novels/dp/1419735047?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9781419735042?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781419735042'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Come-Up-Angie-Thomas/dp/0062498568?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Angie Thomas',
              book_image: 'https://s1.nyt.com/du/books/images/9780062498564.jpg',
              book_image_width: 329,
              book_image_height: 499,
              book_review_link: '',
              contributor: 'by Angie Thomas',
              contributor_note: '',
              created_date: '2019-07-31 22:02:07',
              description: 'Bri strives to become a hip-hop star despite numerous obstacles.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: 'None',
              primary_isbn13: '9780062498564',
              book_uri: 'nyt://book/721587f4-5b6c-5f6d-929b-cf7a60b220c3',
              publisher: 'Balzer + Bray',
              rank: 4,
              rank_last_week: 7,
              sunday_review_link: '',
              title: 'ON THE COME UP',
              updated_date: '2019-07-31 22:02:07',
              weeks_on_list: 25,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Come-Up-Angie-Thomas/dp/0062498568?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9780062498564?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062498564'
                }
              ]
            },
            {
              age_group: '',
              amazon_product_url: 'https://www.amazon.com/Ghosts-Shadow-Market-Cassandra-Clare/dp/1534433627?tag=NYTBS-20',
              article_chapter_link: '',
              author: 'Cassandra Clare, Sarah Rees Brennan, Maureen Johnson, Kelly Link and Robin Wasserman',
              book_image: 'https://s1.nyt.com/du/books/images/9781534433625.jpg',
              book_image_width: 328,
              book_image_height: 495,
              book_review_link: '',
              contributor: 'by Cassandra Clare, Sarah Rees Brennan, Maureen Johnson, Kelly Link and Robin Wasserman',
              contributor_note: '',
              created_date: '2019-07-31 22:02:07',
              description: 'A companion to the Mortal Instruments, the Infernal Devices and the Dark Artifices series.',
              first_chapter_link: '',
              price: 0,
              primary_isbn10: '1534433627',
              primary_isbn13: '9781534433625',
              book_uri: 'nyt://book/b7877908-38db-58ad-8283-b2644a3ca7ec',
              publisher: 'Margaret K. McElderry',
              rank: 5,
              rank_last_week: 5,
              sunday_review_link: '',
              title: 'GHOSTS OF THE SHADOW MARKET',
              updated_date: '2019-07-31 22:02:07',
              weeks_on_list: 8,
              buy_links: [
                {
                  name: 'Amazon',
                  url: 'https://www.amazon.com/Ghosts-Shadow-Market-Cassandra-Clare/dp/1534433627?tag=NYTBS-20'
                },
                {
                  name: 'Local Booksellers',
                  url: 'http://www.indiebound.org/book/9781534433625?aff=NYT'
                },
                {
                  name: 'Barnes and Noble',
                  url: 'http://www.anrdoezrs.net/click-7990613-11819508?url=http%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781534433625'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}

export default mockNytResponses;