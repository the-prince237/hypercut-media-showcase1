// Import Script component from react-script-tag

import Script from 'next/script';

const HotjarSnippet = () => {
  if (!process.env.NEXT_PUBLIC_HOTJAR_ID) return null;

  return (
    <Script
      id='hotjar-snippet'
      src={`https://static.hotjar.com/c/hotjar-${2389591}.js?sv=6`}
      async
    />
  );
};

export default HotjarSnippet;
