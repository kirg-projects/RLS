CREATE TABLE test (
    id INT NOT NULL PRIMARY KEY,
    license_plate VARCHAR NOT NULL,
    color VARCHAR NOT NULL
);

ALTER TABLE owner ADD driver_license_id VARCHAR;

INSERT INTO brand (name) VALUES ('DeLorean');