import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Head from 'next/head';
import SearchQuery from '../Components/SearchQuery';
import SearchResults from '../Components/SearchResults';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mini Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="md">
        <header>
          <SearchQuery></SearchQuery>
        </header>

        <Divider />

        <main>
          <SearchResults></SearchResults>
        </main>
      </Container>
    </>
  );
}
