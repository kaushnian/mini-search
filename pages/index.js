import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Head from 'next/head';
import SearchQuery from '../Components/SearchQuery';
import SearchResults from '../Components/SearchResults';
import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');

  return (
    <>
      <Head>
        <title>Mini Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="false" disableGutters>
        <header>
          <SearchQuery onChange={setQuery}></SearchQuery>
        </header>

        <Divider />

        <main>
          <SearchResults query={query}></SearchResults>
        </main>
      </Container>
    </>
  );
}
