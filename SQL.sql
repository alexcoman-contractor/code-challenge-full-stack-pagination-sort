-- Select departament number, number of employees for each departament, including the ones with 0 employees
-- ordered by count and department name (if count is equal)

-- DB Structure

create table department
(
	id serial not null,
	name varchar,
	location varchar
);

create unique index department_id_uindex
	on department (id);

create table employee
(
	id serial not null,
	name varchar,
	salary integer,
	dept_id integer
);

create unique index employee_id_uindex
	on employee (id);

alter table employee
add constraint employee_department_id_fk
foreign key (dept_id) references department (id);

-- QUERY

SELECT d.name, count(e.id) as count
from department d
    left join employee e ON e.dept_id = d.id
GROUP BY d.name
ORDER BY count desc, d.name