CREATE DATABASE todoList;

CREATE TABLE listTask(
	id int primary key auto_increment,
    task varchar(100),
    isComplete boolean
);

INSERT INTO listTask(task, isComplete)
VALUES 
	('Walk with dog', true),
    ('Eat egg', false),
    ('Meet friend', true)