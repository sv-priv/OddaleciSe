CREATE TABLE lakes ( id INTEGER NOT NULL, title TEXT NOT NULL, subtitle TEXT, rating TEXT, reviewCount TEXT, category TEXT, attributes TEXT, timeStamp TEXT, latitude TEXT, longitude TEXT );

CREATE TABLE mountains ( id INTEGER NOT NULL, title TEXT NOT NULL, subtitle TEXT, rating TEXT, reviewCount TEXT, category TEXT, attributes TEXT, timeStamp TEXT, latitude TEXT, longitude TEXT );


COPY lakes FROM '/home/stefan/OddaleciSe/ezeraFilter.csv' DELIMITER ',' CSV HEADER ENCODING 'utf-8';

COPY mountains FROM '/home/stefan/OddaleciSe/planiniFilter.csv' DELIMITER ',' CSV HEADER ENCODING 'utf-8';

