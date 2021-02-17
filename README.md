
# Simple Stock Chart Viewer

This Simple Stock Chart Viewer (SSCV) was built in about an hour using existing technologies and examples.

## Technologies Used

- Highcharts
- jQuery
- json-server
- Yahoo! Finance data

## Finance Data

Stock data can be obtained from [Yahoo Historical Data download](https://help.yahoo.com/kb/download-historical-data-yahoo-finance-sln2311.html). You can download whatever symbols you want to be able to view and put the csv files into this project's `data` folder.

Note: The server code assumes uppercase symbol/filename, because that's how Yahoo downloads it. A future improvement may be to support both or maybe even to download on the fly!

## Highcharts

A great graphing tool. Free for personal use. Visit [highcharts.com](https://www.highcharts.com/blog/products/stock/). This viewer was built with the stock charting version of the product, and adapted from [this example](https://www.highcharts.com/demo/stock/stock-tools-gui).

## Server+Client

On the server side, SSCV uses [json-server](https://www.npmjs.com/package/json-server) -- my favorite little prototyping web server for nodejs. Additionally, it's using a [CSV parsing library](https://www.npmjs.com/package/csv-parser) to read and serve up the CSV data I downloaded from Yahoo.

On the client, it uses a little jQuery for some simple event handling and AJAX.

## Getting Started

For Mac and Linux users, this should be easy to get up and running. If you are a Windows user, I suggest first installing [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10) (WSL).

- Install [nodejs](https://nodejs.org/en/about/releases/) -- this demo was built with v12.
- Run: `npm install`
- Run: `npm start`
- Browse to: `http://localhost:3000`

That's it! Message me with any questions.
