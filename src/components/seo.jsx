import Head from "next/head";


const SEO = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} - CAMBLISS PRIVATE LIMITED`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="we create immersive digital experience" />
      <meta name="robots" content="noindex, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href={"/favicon.jpeg"} />
    </Head>
  </>
);

export default SEO;
