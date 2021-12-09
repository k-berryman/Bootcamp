-- Find the app with an ID of 1880
SELECT * FROM analytics WHERE id = 1880;

-- Find the ID and app name for all apps that were last updated on August 01, 2018
SELECT id, app_name FROM analytics WHERE last_updated = '2018-08-01';

-- Count the number of apps in each category, e.g. “Family | 1972”
SELECT category, COUNT(category) FROM analytics GROUP BY category;

-- Find the top 5 most-reviewed apps and the number of reviews for each
SELECT app_name, reviews FROM analytics ORDER BY reviews desc LIMIT 5;

-- Find the app that has the most reviews with a rating greater than equal to 4.8
SELECT * FROM analytics WHERE rating >= 4.8 ORDER BY reviews desc LIMIT 1;

-- Find the average rating for each category ordered by the highest rated to lowest rated
SELECT AVG(rating) AS avg_rating, category FROM analytics GROUP BY category ORDER BY avg_rating desc LIMIT 5;

-- Find the name, price, and rating of the most expensive app with a rating that’s less than 3
SELECT app_name, price, rating FROM analytics WHERE rating < 3 ORDER BY price desc LIMIT 1;

-- Find all apps with a min install not exceeding 50, that have a rating. Order your results by highest rated first
