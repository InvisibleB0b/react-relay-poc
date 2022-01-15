import { Environment, Network, RecordSource, Store } from "relay-runtime";

const fetchGraphQL = async (text, variables) => {
    // Fetch data from GitHub's GraphQL API:
    const response = await fetch('https://localhost:5001/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: text,
            variables,
        }),
    });

    // Get the response as JSON
    return await response.json();
}

async function fetchRelay(params, variables) {
    console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
    return fetchGraphQL(params.text, variables);
}

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
    network: Network.create(fetchRelay),
    store: new Store(new RecordSource()),
});