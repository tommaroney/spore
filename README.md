# spore

MUSHROOM IDENTIFICATION DONE RIGHT


spōr is a clean and simple foraging tool designed to assist in mushroom identification as well as keeping track of the species you've found and the time and place you found them. 

See Spore at http://ec2-3-216-49-158.compute-1.amazonaws.com:3000

Visit http://ec2-3-216-49-158.compute-1.amazonaws.com:3000/api/admin to add your own mushrooms

Find those mushrooms by attribute at http://ec2-3-216-49-158.compute-1.amazonaws.com:3000/guide

The application is running on an EC2 instance backed by and RDS database with an S3 bucket collecting and serving images.

Locally the application can be run with a MySQL server, but will need to be connected an S3 bucket for a functioning Admin page.  This is as easy as creating an S3 Bucket in the AWS Console and creating an IAM user with permissions to administrate the bucket.  Save a copy of the Key ID and the Secret Access Key.  After this is completed be sure the aws-cli tool has been installed and run aws configure.  Provide the requested information.

Create environment variables either in a .env file in the root folder: 

~~~~
dev_USERNAME = *yourUsername*
dev_PASSWORD = *yourPassword*
dev_HOST = *hostAddress*
dev_DATABASE = *yourDatabase*
~~~~


npm install
npm install --dev

run the node server to create tables in the database
end the server instance

make sure `sequelize-cli` is installed

run `npx sequelize-cli db:seed:all` from the terminal to seed the attributes and icons table

restart node server
