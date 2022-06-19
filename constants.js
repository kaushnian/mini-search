export const SEARCH_API = {
  SPOTIFY: 'SPOTIFY',
  STACKOVERFLOW: 'STACKOVERFLOW',
};

const stackoverflowKey = 'key=U4DMV*8nvpm3EOpvf69Rxw((';
const stackoverflowParams = '&site=stackoverflow&pagesize=10';
const stackoverflowUrl = `https://api.stackexchange.com/2.3/search?`;

export const API_URL = {
  [SEARCH_API.SPOTIFY]: '',
  [SEARCH_API.STACKOVERFLOW]: `${stackoverflowUrl}${stackoverflowKey}${stackoverflowParams}&intitle=`,
};
