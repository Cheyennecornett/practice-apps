

USE checkout;

-- CREATE TABLE users (
--   user_id int NOT NULL AUTO_INCREMENT,
--   username VARCHAR(255) NOT NULL,
--   PRIMARY KEY (user_id)
-- );

-- CREATE TABLE rooms (
--   room_id int NOT NULL AUTO_INCREMENT,
--   roomname VARCHAR(255) NOT NULL,
--   PRIMARY KEY (room_id)
-- );


-- CREATE TABLE messages (
--   /* Describe your table here.*/
--   messages_id int NOT NULL AUTO_INCREMENT,
--   text VARCHAR(255) NOT NULL,
--   created_at TIMESTAMP,
--   user_id int NOT NULL,
--   room_id int,
--   PRIMARY KEY (messages_id),
--   FOREIGN KEY (user_id) REFERENCES users(user_id),
--   FOREIGN KEY (room_id) REFERENCES rooms(room_id)
-- );

CREATE TABLE users (
 id int NOT NULL AUTO_INCREMENT,
 shopper_id int NOT NULL,
 name VARCHAR(255) NOT  NULL,
 email VARCHAR(255) NOT NULL,
 password VARCHAR(255) NOT NULL,
 address VARCHAR (255) NOT NULL
);


