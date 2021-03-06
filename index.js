import bookmarks from './bookmarks.js'
import store from './store.js'
import api from './api.js'

function main(){
 // getting bookmarks from the server
 api.getBookmarks()
 .then((bookmarks) => {
   //then, add each bookmark to an array defined in the store module!
   bookmarks.forEach((bookmark) => store.addBookmark(bookmark));
   //why does console say this isn't a function?
   bookmarks.render();
 });
 bookmarks.render();
 bookmarks.bindEventListenders();
};

$(main);