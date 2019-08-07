import React from "react";
import PropTypes from "prop-types";
import compStyles from './List.scss';

const List = ({ list }) => {
  return (
    <div className={compStyles.list}>
      <h2>
        <a className={compStyles.listTitle} href="#">{list.display_name}</a>
      </h2>
      <div className={compStyles.books}>
        {Array.isArray(list.books) &&
          list.books.map(book => (
            <div className={compStyles.book}>
              <img className={compStyles.bookImage} src={book.book_image} />
              <div className={compStyles.bookInfoContainer}>
                <p className={compStyles.weeksOnList}>
                  {book.weeks_on_list < 2 ? 'NEW THIS WEEK' : `${book.weeks_on_list} WEEKS ON THE LIST`}
                </p>
                <h3 className={compStyles.bookTitle}>{book.title}</h3>
                <p className={compStyles.bookAuthor}>by {book.author}</p>
                <p className={compStyles.bookDescription}>
                  {book.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

List.propTypes = {
  list: PropTypes.object.isRequired
};

export default List;
