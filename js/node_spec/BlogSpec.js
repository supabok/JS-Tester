var Blog = require('../src/Blog').Blog;

describe('blog creation', function() {
    var testBlog;

    beforeEach(function() {
        testBlog = new Blog();
    });

    it('should have a title attribute a', function(){
        expect(testBlog.title).toBeDefined();
    });

    it('should have a null title ccc', function() {
        expect(testBlog.title).toBeNull();
    });

    it('should set the title', function() {
        testBlog.setTitle('dummy');
        expect(testBlog.title).toMatch('dummy');
    });

});
