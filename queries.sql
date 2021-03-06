-- Query all of the entries in the Genre table
SELECT * FROM Genre

-- Using the INSERT statement, add one of your favorite artists to the Artist table.
INSERT INTO Artist (ArtistName, YearEstablished)
VALUES ("Queen", 1970);

-- Using the INSERT statement, add one, or more, albums by your artist to the Album table.
INSERT INTO Album (Title, ReleaseDate, AlbumLength, Label, ArtistId, GenreId)
VALUES ("Under Pressure", "1970", 5, "Label", 29, 2), ("Self Titled", "1970", 6, "Label", 29, 2);

-- Using the INSERT statement, add some songs that are on that album to the Song table.
INSERT INTO Song (Title, SongLength, ReleaseDate, GenreId, ArtistId, AlbumId)
VALUES ("Under Pressure", 3.15, "1970", 2, 29, 25);

-- Write a SELECT query that provides the song titles, album title, and artist name for all of the data you just entered in. Use the LEFT JOIN keyword sequence to connect the tables, and the WHERE keyword to filter the results to the album and artist you added. Here is some more info on joins that might help.
SELECT Artist.ArtistName, Song.Title, Album.Title
FROM Artist
LEFT JOIN Song ON Artist.ArtistId = Song.ArtistId
LEFT JOIN Album ON Artist.ArtistId = Album.ArtistId
WHERE Artist.ArtistId = 29;

-- Write a SELECT statement to display how many songs exist for each album. You'll need to use the COUNT() function and the GROUP BY keyword sequence.
SELECT COUNT(SongId), AlbumId
FROM Song
GROUP BY AlbumId;

-- Write a SELECT statement to display how many songs exist for each artist. You'll need to use the COUNT() function and the GROUP BY keyword sequence.
SELECT COUNT(SongId), ArtistId
FROM Song
GROUP BY ArtistId

-- Write a SELECT statement to display how many songs exist for each genre. You'll need to use the COUNT() function and the GROUP BY keyword sequence.
SELECT COUNT(SongId), GenreId
FROM Song
GROUP BY GenreId

-- Using MAX() function, write a select statement to find the album with the longest duration. The result should display the album title and the duration.
SELECT Title, MAX(AlbumLength)
FROM Album

-- Using MAX() function, write a select statement to find the song with the longest duration. The result should display the song title and the duration.
SELECT Title, MAX(SongLength)
FROM Song

-- Modify the previous query to also display the title of the album.
SELECT Song.Title, Album.Title, MAX(Song.SongLength)
FROM Song
LEFT JOIN Album ON Song.AlbumId = Album.AlbumId