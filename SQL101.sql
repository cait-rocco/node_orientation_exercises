SELECT s.title, ar.artistname, al.title
FROM song s, artist ar, album al

ON s.artistID = art.artistid
AND s.albumid = al.albumid
AND ar.artistid = 29

WHERE ar.artistname = "The Model Citizens"
AND s.artistid = ar.artistid
AND s.albumid = al.albumid

SELECT s.title as "Song", ar.artistname, al.title as "Album"
FROM artist ar
JOIN Album al ON al.Artistid = ar.artistid
LEFT JOIN 

SELECT a.title, COUNT(songid)
FROM song s
LEFT JOIN Album a ON s.albumid = a.albumid
GROUP BY s.albumid
ORDER BY a.title DESC
ORDER BY COUNT(songid) DESC

SELECT albumlength, title
FROM Album
WHERE albumlength = (SELECT MAX(albumlength) from album)

SELECT MAX(albumlength)as "length", title
from album

SELECT * FROM orders
SELECT lastName FROM customers
ON orders.customerId= customers.customerId
WHERE customers.id = 2
EXCEPT SELECT lastName from customers

SELECT * FROM orders
JOIN customers
ON orders.customerId = customers.id
WHERE customers.id = 2

SELECT * INTO #TempTable
FROM YourTable
ALTER TABLE #TempTable

setTimeout( () => {
    db.all(SELECT orderDate, amount
    FROM orders
    JOIN customers
    ON orders.customerId = customers.id
    WHERE customers.id = 2,
    (err, data) => {
        if(err) {
            return console.log('Dang', err.toString());
        }
        console.log('all orders placed by a cust with id of 2', data);
    });

    db.all(SELECT firstName, lastName, orderDate, amount
    FROM customers c 
    JOIN orders 
    ON c.id = customerId
    ORDER BY amount,
    (err, data) => {
        console.log('customers who placed orders', data);
    }

    SELECT firstName, lastName, orderDate, amount
    FROM customers c
    LEFT JOIN orders
    ON c.id = customerId
}, 1000);