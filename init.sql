DROP SCHEMA IF EXISTS public CASCADE;

CREATE SCHEMA public;

CREATE TYPE user_role_enum AS ENUM ('admin', 'adopter', 'shelter');

CREATE TYPE adoption_status_enum AS ENUM (
    'available',
    'in_process',
    'pending',
    'approved',
    'rejected',
    'adopted'
);

CREATE TYPE application_status_enum as ENUM(
    'pending',
    'reviewed',
    'approved',
    'rejected',
    'canceled'

);

CREATE TYPE species_enum AS ENUM ('dog', 'cat', 'other');

-- USERS TABLE
CREATE TABLE
    users (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        additional_last_name VARCHAR(50),
        email VARCHAR(80) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        phone VARCHAR(20),
        role user_role_enum DEFAULT 'adopter',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

-- LOCATIONS TABLE (Addresses)
CREATE TABLE
    locations (
        id SERIAL PRIMARY KEY,
        street VARCHAR(100) NOT NULL,
        district VARCHAR(100) NOT NULL,
        zip_code VARCHAR(10) NOT NULL,
        exterior_number VARCHAR(20) NOT NULL,
        interior_number VARCHAR(20),
        city VARCHAR(100),
        state VARCHAR(100)
    );

-- SHELTERS TABLE
CREATE TABLE
    shelters (
        id SERIAL PRIMARY KEY,
        shelter_name VARCHAR(100) NOT NULL,
        contact_info VARCHAR(255) NOT NULL,
        location_id INTEGER REFERENCES locations(id) ON DELETE SET NULL,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE, -- The shelter admin
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP

    );

-- BREEDS TABLE
CREATE TABLE 
    breeds (
        id SERIAL PRIMARY KEY,
        name VARCHAR(80) NOT NULL,
        species species_enum NOT NULL
    );

-- PETS TABLE
CREATE TABLE 
    pets(
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        birth_date DATE,
        description TEXT,

        --Relationships
        shelter_id INTEGER NOT NULL REFERENCES shelters(id) ON DELETE CASCADE,
        breed_id INTEGER REFERENCES breeds(id),

        --Status & Info
        adoption_status adoption_status_enum DEFAULT 'available',

        --JSONB for flexible data
        --Ex: {"sterilized":true, "vaccines":["rabies"], "special_needs":false}
        health_info JSONB DEFAULT '{}',
        
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

--PET IMAGES TABLE
CREATE TABLE 
    pet_images(
        id SERIAL PRIMARY KEY,
        url TEXT NOT NULL,
        pet_id INTEGER NOT NULL REFERENCES pets(id) ON DELETE CASCADE
    );

--ADOPTION APPLICATIONS TABLE
CREATE TABLE 
    adoption_applications (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        pet_id INTEGER NOT NULL REFERENCES pets(id) ON DELETE CASCADE,
        application_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        status  application_status_enum DEFAULT 'pending',
        message TEXT
    );

--SEED DATA
INSERT INTO breeds (name, species) VALUES
('Mixed Breed', 'dog'),('Labrador', 'dog'),
('Siamese','cat'),('Persian','cat');