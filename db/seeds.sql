INSERT INTO department (name)
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

INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES
    ('Dwight K.', 'Schrute', 11, 11),
    ('James', 'Halpert', 12, NULL),
    ('Andrew', 'Bernard', 14, NULL),
    ('Angela', 'Martin', 21, 21),
    ('Kevin', 'Malone', 22, NULL),
    ('Darryl', 'Philbin', 31, 31),
    ('Roy', 'Smith', 32, NULL),
    ('Toby', 'Flenderson', 41, 41),
    ('Holly', 'Flax', 42, NULL);
