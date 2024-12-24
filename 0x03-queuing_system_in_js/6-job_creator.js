#!/usr/bin/node

let kue = require('kue')
    , queue = kue.createQueue();

let job = queue.create('push_notification_code',
   {
     phoneNumber: '4153518780',
     message: 'This is the code to verify your account',
   }).save((err) => {
     if(err) {
       console.log('Notification job failed');
     } else {
       console.log(`Notification job created: ${job.id}`);
     }
});

job.on('complete', (result) => {
   console.log('Notification job completed')
}).on('failed', () => {
   console.log('Notification job failed');
});


