const kue = require('kue');
const queue = kue.createQueue();
const queueName = 'push_notification_code_2';

const blackList = [
     '4153518780',
     '4153518781'
];

function sendNotification(phoneNumber, message, job, done) {
   job.progress(0, 100);

  if(blackList.includes(phoneNumber)) {
     done(Error(`Phone number ${phoneNumber} is blacklisted`));
     return;
  }
  job.progress(50, 100);
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
  done();
}

queue.process(queueName, 2, (job, done) => {
  const {phoneNumber, message} = job.data;
  sendNotification(phoneNumber, message, job, done);
});
