const kue = require('kue');
const queue = kue.createQueue();

function sendNotification(phoneNumber, message) {
   console.log(`Send notification to ${phoneNumber}, with message: ${message}`);
} 

queue.process('push_notification_code', (job, done) => {
   const { phoneNumber, message } = job.data;

  // Call the sendNotification function
  sendNotification(phoneNumber, message);

  // Signal that the job is complete
  done();
});

