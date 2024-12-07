#!/usr/bin/node
import { createClient } from 'redis';


const client = createClient();

client.on('connect', () => {
    console.log('Redis client connected to the server');
});
client.on('error', (err) => {
    console.log(`Redis client not connected to the server: ${err}`);
});

(async () => {
    try {
      await client.subscribe('ALXchannel', async (message) => {
         console.log(`${message}`);
         if (message === 'KILL_SERVER') {
            await client.unsubscribe('ALXchannel');
            await client.quit();
         }
      });
    } catch (err) {
        console.error(`${err.message}`);
    }
});

