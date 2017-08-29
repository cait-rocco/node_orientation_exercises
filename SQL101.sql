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