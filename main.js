
const { crawlPage } = require('./crawl.js');
// using process method for performing operations.
// argv is used to get the input from the command line.. . .
async function main() {
    // edge case : if no website is provided as an input
    if(process.argv.length < 3) {
        console.log("no website provided");
        process.exit(1);
    }
    // edge case : if more than a site is passed as an argument : means if there is something extra with the link
    if(process.argv.length > 3) {
        console.log("too many command line arguments");
        process.exit(1);
    }
    // getting the base url line provided as the input
    const baseURL = process.argv[2];
    console.log(`starting crawler of  ${baseURL}`);
    const pages  = await crawlPage(baseURL,baseURL,{});
    for (const page of Object.entries(pages)) {
       console.log(page) 
    }
}

main();