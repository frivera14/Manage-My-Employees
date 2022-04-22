INSERT INTO departments (name)
    VALUES
    ('Sales'),
    ('Accounting'),
    ('Warehouse'),
    ('HR');

INSERT INTO roles (title, salary, department_id)
    VALUES
    ('Lead Salesman', 50000, 1),
    ('Sr Salesman', 40000, 1),
    ('Jr Salesman', 30000, 1),
    ('Accountant Manager', 45000, 2),
    ('Accountant', 35000, 2),
    ('Warehouse Supervisor', 45000, 3),
    ('Warehouse Clerk', 37000, 3),
    ('HR Manager', 47000, 4),
    ('HR Representative', 40000, 4);

INSERT INTO employees (first_name, last_name, role_id)
    VALUES
    ('Dwight K.', 'Schrute', 1),
    ('James', 'Halpert', 2),
    ('Andrew', 'Bernard', 3),
    ('Angela', 'Martin', 4),
    ('Kevin', 'Malone', 5),
    ('Darryl', 'Philbin', 6),
    ('Roy', 'Smith', 7),
    ('Toby', 'Flenderson', 8),
    ('Holly', 'Flax', 9);
