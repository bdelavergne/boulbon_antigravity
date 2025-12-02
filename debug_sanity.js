import { createClient } from '@sanity/client'

const client = createClient({
    projectId: '6slug6ow',
    dataset: 'production',
    useCdn: false, // Use API directly to avoid cache delay
    apiVersion: '2023-05-03',
})

async function testFetch() {
    console.log('Fetching events...');
    try {
        const events = await client.fetch('*[_type == "event"]');
        console.log('Success! Found events:', events.length);
        console.log(JSON.stringify(events, null, 2));
    } catch (error) {
        console.error('Error fetching events:', error.message);
    }
}

testFetch();
