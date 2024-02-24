const {normalizeURL,getURLFromHTML} = require('./crawl.js')
const {test,expect} = require('@jest/globals')


// 'expect' basically does check if the input val is equal to expected val 
// test(name,fn)
// stripping http protocols and focusing on domain and path name
test('normalizeURL strip protocol',() => {
    const input = 'https://blog.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normalizeURL trailing slashes',() => {
    const input = 'https://blog.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normalizeURL capitals',() => {
    const input = 'https://BLOG.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normalizeURL capitals',() => {
    const input = 'http://BLOG.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('getURLFromHTML absolute',() => {
    const inputHTMLBody = `
    <html> 
        <body>
            <a href="https://blog.boot.dev/">
                Boot.dev Blog
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://blog.boot.dev";
    const actual = getURLFromHTML(inputHTMLBody,inputBaseURL)
    const expected = ['https://blog.boot.dev/']
    expect(actual).toEqual(expected)
})

test('getURLFromHTML relative',() => {
    const inputHTMLBody = `
    <html> 
        <body>
            <a href="/path/">
                Boot.dev Blog
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://blog.boot.dev";
    const actual = getURLFromHTML(inputHTMLBody,inputBaseURL)
    const expected = ['https://blog.boot.dev/path/']
    expect(actual).toEqual(expected)
})
test('getURLFromHTML both',() => {
    const inputHTMLBody = `
    <html> 
        <body>
            <a href="https://blog.boot.dev/path1/">
                Boot.dev Blog path 1
            </a>
            <a href="/path2/">
                Boot.dev Blog path 2
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://blog.boot.dev";
    const actual = getURLFromHTML(inputHTMLBody,inputBaseURL)
    const expected = ['https://blog.boot.dev/path1/','https://blog.boot.dev/path2/']
    expect(actual).toEqual(expected)
})

test('getURLFromHTML invalid',() => {
    const inputHTMLBody = `
    <html> 
        <body>
            <a href="invalid">
                invalid url
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://blog.boot.dev";
    const actual = getURLFromHTML(inputHTMLBody,inputBaseURL)
    const expected = []
    expect(actual).toEqual(expected)
})