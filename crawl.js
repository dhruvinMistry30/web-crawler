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

function normalizeURL(urlString)
{
    // normalizing
    // using URL function and using its hostName and pathName object to get the values
    // also removing ending '/' 
    // CAPITALS  are automatically dealt with URL function ,ie it knows urls are case sensitive
    // stripping http as well using URL FN
    const urlOBJ = new URL(urlString)
    const hostPath = `${urlOBJ.hostname}${urlOBJ.pathname}`
    if (hostPath.length > 0 && hostPath.slice(-1) === '/')
    {
        return hostPath.slice(0,-1);
    }
    return hostPath;
}

// this will allow other js files to access this object
module.exports = {
    normalizeURL
}