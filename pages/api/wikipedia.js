import cors from 'cors';
import nc from 'next-connect';

const url = 'https://en.wikipedia.org/w/api.php?';
const params = 'action=opensearch&format=json&limit=20&search=';

export default nc()
  .use(cors())
  .get(async (req, res) => {
    const response = await fetch(`${url}${params}${req.query.query}`);

    const [, titles, , links] = await response.json();

    const result = titles.map((title, index) => ({
      id: index,
      title,
      link: links[index],
    }));

    res.json(result);
  });
