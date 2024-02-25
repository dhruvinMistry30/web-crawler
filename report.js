
// sorting the recieved report in descending format
function sortPages(pages) {
    const pagesArr = Object.entries(pages);
    pagesArr.sort((a,b) => {
        // ahit and bhit  = x[1] because the count of the site is on index 1
        aHits = a[1];
        bHits = b[1];
        // if want in asc go with a by b
        return b[1] - a[1]
    })
    return pagesArr;
}

function printReport(pages)
{
    console.log("========")
    console.log("REPORT")
    console.log("========")
    const sortedPages = sortPages(pages)
    for (const sortedPage of sortedPages) {
        // urls in is index 0 
        const url = sortedPage[0];
        // count in is index 1 
        const hits = sortedPage[1];
        console.log(`Found ${hits} links to page: ${url}`);
    }
    console.log("========")
    console.log("END REPORT")
    console.log("========")
}
module.exports = {
    sortPages,
    printReport,
}