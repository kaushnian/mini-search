import { decode } from 'he';

const url = `https://api.stackexchange.com/2.3/search?`;
const key = 'key=U4DMV*8nvpm3EOpvf69Rxw((';
const params = '&site=stackoverflow&pagesize=10&intitle=';

export default async function handler(req, res) {
  const response = await fetch(`${url}${key}${params}${req.query.query}`);

  const json = await response.json();

  const result = json.items.map(({ question_id, title, owner, link }) => ({
    id: question_id,
    title: decode(title),
    link,
    imageSrc: owner.profile_image,
    secondaryText: `Author: ${owner.display_name}`,
  }));

  res.json(result);
}
