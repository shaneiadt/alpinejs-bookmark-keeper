function getData() {
    return {
        showModal: false,
        bookmarks: localStorage.getItem('bookmarks') ? JSON.parse(localStorage.getItem('bookmarks')) : [],
        addBookmark(bookmark) {
            this.bookmarks.push(bookmark);
            this.updateBookmarks();
            this.showModal = false;
        },
        removeBookmark(bookmark) {
            this.bookmarks = this.bookmarks.filter(bm => bm.name !== bookmark.name);
            this.updateBookmarks();
        },
        updateBookmarks() {
            localStorage.setItem('bookmarks', [JSON.stringify(this.bookmarks)]);
            
            this.$refs.name.value = '';
            this.$refs.url.value = '';
        }
    }
}