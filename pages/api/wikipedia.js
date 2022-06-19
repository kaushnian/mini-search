import cors from 'cors';
import nc from 'next-connect';

const url = 'https://en.wikipedia.org/w/api.php?';
const params = 'action=opensearch&format=json&limit=30&search=';

export default nc()
  .use(cors())
  .get(async (req, res) => {
    const response = await fetch(`${url}${params}${req.query.query}`);

    res.json(await response.json());
  });
