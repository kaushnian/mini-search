import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Head from 'next/head';
import { SEARCH_API } from '../constants';
import SearchApiSelector from '../Components/SearchApiSelector';
import SearchQuery from '../Components/SearchQuery';
import SearchResults from '../Components/SearchResults';
import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');
  const [searchApi, setSearchApi] = useState(SEARCH_API.STACKOVERFLOW);

  return (
    <>
      <Head>
        <title>Mini Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="false" disableGutters>
        <header>
          <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <SearchQuery onChange={setQuery}></SearchQuery>

            <SearchApiSelector
              selectedValue={searchApi}
              onChange={setSearchApi}
            ></SearchApiSelector>
          </Box>
        </header>

        <Divider />

        <main>
          <SearchResults query={query} searchApi={searchApi}></SearchResults>
        </main>
      </Container>
    </>
  );
}
