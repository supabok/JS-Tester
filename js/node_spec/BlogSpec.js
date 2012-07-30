var Blog = require('../src/Blog').Blog;

describe('blog creation', function() {
    var testBlog;

    beforeEach(function() {
        testBlog = new Blog();
    });

    it('should have a title attribute', function(){
        expect(testBlog.title).toBeDefined();
    });

    it('should have a null title', function() {
        expect(testBlog.title).toBeNull();
    });

    it('should have a title', function() {
        testBlog.title = 'dummy ' ;
        expect(testBlog.title).toBe('dummy');
    });

});
