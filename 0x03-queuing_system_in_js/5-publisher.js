#!/usr/bin/node

import { createClient } from 'redis';

const client = createClient();

client.on('connect', () => {
   console.log('Redis client connected to the server');
});
client.on('error', (err) => {
   console.log(`Redis client not connected to the server: ${err}`);
});

const publishMessage = (message, time) => {
    if (typeof message !== 'string') {
        throw new Error('The first argument must be a string.');
    }
    if (typeof time !== 'number' || time < 0) {
        throw new Error('The second argument must be a non-negative integer.');
    }

    setTimeout(async () => {
        console.log(`About to send MESSAGE: ${message}`);
        await client.publish('ALX', message);
        console.log('Message published to ALX channel!');
        await client.quit(); 
    }, time);
};


publishMessage("ALX Student #1 starts course", 100);
publishMessage("ALX Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("ALX Student #3 starts course", 400);
