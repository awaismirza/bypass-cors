# Bypass CORS

Bypass CORS is a Node.js application that creates a proxy server to bypass Cross-Origin Resource Sharing (CORS) issues.
It allows you to make cross-origin requests to APIs that would otherwise be blocked by the browser's same-origin policy.

## Installation

To install Bypass CORS, you'll need to have [Node.js](https://nodejs.org/) installed on your system. Once you have
Node.js installed, you can install Bypass CORS using [npm](https://www.npmjs.com/), the Node.js package manager:

### Install on your machine

```npm
npm install -g @awaismirza/bypass-cors
```

### Run without installing

```npm
npx @awaismirza/bypass-cors <base_url> <port>
```

## Usage

```sh
bypass-cors <base-url> <port>
```

To use Bypass CORS, you can run the following command:

The `base-url` argument is the URL of the API you want to access. 
The `port` argument is the port for your localhost proxy server ( Defaults: 3000 )

For example, if you wanted to access the following API:

https://jsonplaceholder.typicode.com

You would run the following command: `bypass-cors https://jsonplaceholder.typicode.com 3000` override port defaults to : 3000

This will start the Bypass CORS proxy server and proxy requests to the specified URL. You can then access the API from
your browser or other applications without running into CORS issues.

### Options

Bypass CORS supports the following options:

- Base URL of the target API
- Specifies the port on which to run the proxy server. The default port is `3000`.

## Development

To contribute to Bypass CORS, you'll need to have [Node.js](https://nodejs.org/) installed on your system. Once you have
Node.js installed, you can install the dependencies and run the tests using the following commands:

### Bye me a Coffee: https://paypal.me/tipawais ###

