const { JSDOM } = require ("jsdom");

// normalizeURL
/*
if multiple url points to the same website 
then it normalize it to a single request
ex: 
    https://google.com
    http://google.com
    http://Google.com 
here all three points to same site  -> google.com
*/
// using URL function and using its hostName and pathName object to get the values
// also removing ending '/' 
// CAPITALS  are automatically dealt with URL function ,ie it knows urls are case sensitive
// stripping http as well using URL FN
function normalizeURL(urlString)
{
    const urlOBJ = new URL(urlString)
    const hostPath = `${urlOBJ.hostname}${urlOBJ.pathname}`
    if (hostPath.length > 0 && hostPath.slice(-1) === '/')
    {
        return hostPath.slice(0,-1);
    }
    return hostPath;
}

// this function is used to get the links ie URL from html body
// getURLFromHTML(body of the html page, current url we are crawling)
function getURLFromHTML(htmlBody,baseURL)
{
    // creating empty list
    const urls  = [];
    // this JSDOM fnc requires a html body
    const dom = new JSDOM(htmlBody);
    const linkedElements = dom.window.document.querySelectorAll('a');
    for (const linkedElement of linkedElements) {
        if(linkedElement.href.slice(0,1) === '/') {
            // relative
            try {
                // if there is no real url present then
                // using URL function we get  the original content of the link and handle it 
                // same for absolute url...
                // if no url then throw err as console log
                const urlObj = new URL(`${baseURL}${linkedElement.href}`);
                urls.push(urlObj.href)
            } catch (err) {
                console.log(`error with relative url :  ${err.message}`);
            }
        } else {
            // absolute
            try {
                const urlObj = new URL(linkedElement.href);
                urls.push(urlObj.href)
            } catch (err) {
                console.log(`error with absolute url :  ${err.message}`);
            }
        }
    }
    return urls;
}

// this will allow other js files to access this object
module.exports = {
    normalizeURL,
    getURLFromHTML,

}