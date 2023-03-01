# Bypass CORS

Bypass CORS is a Node.js application that creates a proxy server to bypass Cross-Origin Resource Sharing (CORS) issues. It allows you to make cross-origin requests to APIs that would otherwise be blocked by the browser's same-origin policy.

## Installation

To install Bypass CORS, you'll need to have [Node.js](https://nodejs.org/) installed on your system. Once you have Node.js installed, you can install Bypass CORS using [npm](https://www.npmjs.com/), the Node.js package manager:

### Install on your machine
```npm
npm install -g bypass-cors
```

### Run without installing
```npm
npx bypass-cors
```

## Usage

To use Bypass CORS, you can run the following command:


The `base-url` argument is the URL of the API you want to access. For example, if you wanted to access the following API:


You would run the following command: `bypass-cors`


This will start the Bypass CORS proxy server and proxy requests to the specified URL. You can then access the API from your browser or other applications without running into CORS issues.

### Options

Bypass CORS supports the following options:

- Base URL of the target API
- Specifies the port on which to run the proxy server. The default port is `3000`.

## Development

To contribute to Bypass CORS, you'll need to have [Node.js](https://nodejs.org/) installed on your system. Once you have Node.js installed, you can install the dependencies and run the tests using the following commands:

