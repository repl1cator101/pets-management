# pets-management

## Run Application
- Run `./gradlew bootrun` from /petsmanagement folder. 
- Run `ng serve` from /pets-management-frontend folder. Navigate to http://localhost:4200/

## Desciprion of application
- All tasks done from requred 
    - Create a Spring Boot application.
    - User is displayed a list of pets that the user has entered (see the provided html).
    - User can add pets (see the provided html).
    - A pet has a name, an identification code, a type (CAT, DOG, etc) and a fur color.
    - When a new pet is saved, validate all mandatory fields.
    - Store all input data to database.
    - Values of select lists have to be populated with data from database.
    
- From optional: 
    - User can edit pets.
    - Log in with one of the created user accounts (registration does not have to be implemented).
    - Create 3 user accounts into the database (username and password).
    - User is not allowed to see other user’s pets.
    - Validate form fields both inline and in the back-end* (only validated in frontend).

# Technologies
- Spring boot
- Spring Data JPA
- Liquibase
- H2
- Spring Security

## Thoughts 
The task was completed in about 3 days. I had exams and got free only a few days before the deadline.
This is not an excuse, but I certainly did my best to deliver an application on time and in good quality.

The things I struggled with the most were the H2 database and Spring security.
- H2 database refused to properly work with Liquibase. Migrations were successfully delivered, but data creation on startup failed.
This was strange because logs showed that Liquibase was inserting all rows on every load.
The Liquabase configuration was right because I recently used the similar one with Postgres. 
Tried multiple different rearrangements with configuration, like changing in memory to file-based, didn't help
Finaly changed standart H2 credentials login=sa and password= to login=sa and password=password, got fixed

- Another trouble with H2 was that JPA couldn't find the sequence generations for the id field. Changed generation strategy to GenerationType.IDENTITY, got fixed

- I didn't touch Spring Security since they moved from WebSecurityConfigurerAdapter. Controllers kept refusing my API calls, with code 403.
I was sure the problem was with a configuration file. Read a lot of documentation and tutorials, and fixed some methods in the configurations pipeline.
Then realized I forgot to allow cors and disable csrf 

- I had no prior experience in angular but had no problems with it. 

## Things to do better
- In the database, I use only 1 table for pet management. This is certainly not very practical.
Can be fixed by bringing it to 3nf. Creating tables: County, PetType, and Colors


