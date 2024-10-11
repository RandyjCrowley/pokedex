/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const res = await fetch(`https://api.tcgdex.net/v2/en/cards/${params.slug}`);
  const card = await res.json();
  return { card };
}
