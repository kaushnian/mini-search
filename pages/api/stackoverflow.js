const url = `https://api.stackexchange.com/2.3/search?`;
const key = 'key=U4DMV*8nvpm3EOpvf69Rxw((';
const params = '&site=stackoverflow&pagesize=10&intitle=';

export default async function handler(req, res) {
  const response = await fetch(`${url}${key}${params}${req.query.query}`);

  res.json(await response.json());
}
