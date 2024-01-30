export default async function handler(req, res) {
  const { body } = req;
  return res.send(`Hello ${body.name}, you just parsed the request body!`);
}

// Construct the HTML response with embedded OG metadata
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta property="og:title" content="Your OG Title">
        <meta property="og:description" content="Your OG Description">
        <meta property="og:image" content="http://example.com/image.jpg"> <!-- Replace with the URL of your image -->
        <!-- Add other OG tags as needed -->
        <title>HTML Response with OG Metadata</title>
    </head>
    <body>
        <!-- Your page content goes here -->
    </body>
    </html>
  `;
