To run testcases:

cd to Automation directory

npm install

npx testcafe chrome .\tests\

Can also run in headless mode:

npx testcafe chrome:headless .\tests\

Or run all tests in parallel:

npx testcafe edge .\tests\ -c 7

If there were more features being tested you could run groups of tests based on the feature:

npx testcafe chrome ./tests/ --test-meta feature=logout
