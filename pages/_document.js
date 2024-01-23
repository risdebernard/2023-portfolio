import { Html, Head, Main, NextScript } from 'next/document'

export const metadata = {
    title: 'Marissa DeBernard',
    description: 'Software Engineer',
}
 
export default function Document() {
  return (
    <Html lang="en">
        <Head />
        <title>{metadata.title+' - '+metadata.description}</title>
        <meta name="description" content={metadata.description} />
        {/*<!--Let browser know website is optimized for mobile-->*/}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400;1,700&display=swap" rel="stylesheet" />
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}