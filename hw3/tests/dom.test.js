const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const $ = require('jquery');

test('test selectEvent', () => {
    // Read the index.html file into a string
    const html = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf8');
    expect(html).toEqual(expect.anything()); // Any non-null value is okay

    // Load the HTML into JSDOM
    const dom = new JSDOM(html);
    global.window = dom.window;
    global.document = dom.window.document;

    // Initialize jQuery with JSDOM
    const $ = require('jquery')(dom.window);

    // Perform the test: Check if <h1> contains "Cheesecake Order Form"
    expect($('h1').text()).toBe("Cheesecake Order Form");
});