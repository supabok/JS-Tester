Blog = function(title) {
    this.title = typeof title !== 'undefined' ? title : null;
}

Blog.prototype.getTitle = function() {
    return this.title;
};

Blog.prototype.setTitle = function(_val){
    this.title = _val;
}

exports.Blog = Blog;