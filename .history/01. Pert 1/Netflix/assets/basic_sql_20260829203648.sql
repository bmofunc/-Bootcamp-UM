-- CRUD MYSQL BASIC 

-- READ
SELECT * FROM users; -- menampilkan semua data
SELECT * FROM users; -- menampilkan semua data
SELECT * FROM users WHERE id_users = 2; -- menampilkan data spesifik 

-- CREATE 
INSERT INTO users (username, password) VALUES ('contoh123', 'admin1234'); 

-- UPDATE 
UPDATE users SET username = 'Patrick1909' 
WHERE id_users = 2; 

-- DELETE 
DELETE FROM users WHERE username = 'Patrick1909' AND id_users = 2; 

SELECT * FROM users;