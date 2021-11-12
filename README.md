To run testcases:

cd to Automation directory

npm install

npx testcafe chrome .\tests\

Can also run in headless mode:

npx testcafe chrome:headless .\tests\

Or run all tests in parallel:

npx testcafe edge .\tests\ -c 7
