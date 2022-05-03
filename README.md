<img src="https://swetrix.com/assets/logo_blue.svg" alt="" height="100" />

# Swetrix Next.js integration
Official [Swetrix Analytics](https://swetrix.com/?ref=github-swetrix-nextjs) integration for Next.js.

# Integration

### Install

Run the following command to install in your project:

```
npm install @swetrix/nextjs
```

Or with yarn:

```
yarn add @swetrix/nextjs
```

### Basic usage

You can now import, and use the Swetrix hook on your project:

```javascript
// ./pages/_app.js

import { useSwetrix } from '@swetrix/nextjs'

function YourApp({ Component, pageProps }) {
  useSwetrix('YOUR_PROJECT_ID')

  return <Component {...pageProps} />
}

export default YourApp
```

### Debug-mode

When developing in localhost, Swetrix does not send events to avoid using your quota. \
You can enable debug mode to send events when testing things locally. It will also log messages to console.

```javascript
// ./pages/_app.js

import { useSwetrix } from '@swetrix/nextjs'

function YourApp({ Component, pageProps }) {
  useSwetrix('YOUR_SITE_ID', {
    debug: true
  })

  return <Component {...pageProps} />
}

export default YourApp
```

### Advanced options
`useSwetrix` hook accepts 3 parameters: `PID`, `initOptions`, `pageViewsOptions`. \
See our [documentation](https://swetrix.com/docs) page for more details. \
You can always [contact](https://swetrix.com/contact) us in case of any questions! :)

# Contribution

Feel free to contribute to the source code by opening a pull requests. \
For any questions, you can open an issue ticket, refer to our [FAQs](https://swetrix.com/#faq) page or reach us at contact@swetrix.com \

# Selfhosted API
If you are selfhosting the [Swetrix-API](https://github.com/Swetrix/swetrix-api), be sure to point the `apiUrl` parameter to: `https://yourapiinstance.com/log`

# Donate
You can support the project by donating us at https://ko-fi.com/andriir \
We can only run our services by once again asking for your financial support!
