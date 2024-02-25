const {sortPages} = require('./report.js')
const {test,expect} = require('@jest/globals')


// 'expect' basically does check if the input val is equal to expected val 
// test(name,fn)
// stripping http protocols and focusing on domain and path name

// testing on 2 pages 
test('sortPages 2 pages',() => {
    const input = {
        'https://wagslane.dev/path': 1,
        'https://wagslane.dev': 3,
    }
    const actual = sortPages(input)
    const expected = [
        ['https://wagslane.dev',3],
        ['https://wagslane.dev/path', 1],
    ]
    expect(actual).toEqual(expected)
})

// testing on 5 pages 
test('sortPages  pages',() => {
    const input = {
        'https://wagslane.dev/path1': 1,
        'https://wagslane.dev/path2': 7,
        'https://wagslane.dev/path3': 8,
        'https://wagslane.dev/path4': 5,
        'https://wagslane.dev': 3,
    }
    const actual = sortPages(input)
    const expected = [

        ['https://wagslane.dev/path3', 8],
        ['https://wagslane.dev/path2', 7],
        ['https://wagslane.dev/path4', 5],
        ['https://wagslane.dev',3],
        ['https://wagslane.dev/path1', 1],
    ]
    expect(actual).toEqual(expected)
})