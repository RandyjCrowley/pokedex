/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  try {
    const res = await fetch(
      `https://api.tcgdex.net/v2/en/cards/${params.slug}`,
    );

    if (!res.ok) {
      throw new Error(
        `Failed to fetch card with slug: ${params.slug}, Status: ${res.status}`,
      );
    }

    const card = await res.json();
    return { card };
  } catch (error) {
    console.error("Error fetching card data:", error);
    return { error: "Failed to load card data." };
  }
}
