import React from 'react';

class AddingBookmarks extends React.Component {
   handleClick = e => {
       e.preventDefault();
       const {title, url, description, rating} = e.target
       const bookmarks = {
           title: title.value,
           url: url.value,
           description: description.value,
           rating: Number(rating.value),
       }
       fetch('apiKey', {
           method: 'POST',
           body: JSON.stringify(bookmarks)
       })
   }
}


export default AddingBookmarks;