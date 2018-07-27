USE DATABASE DB;
INSERT INTO Movements (user_name, button_name, button_direction, button_degree, current_direction, current_degree)
VALUES ('koltp', 'down-button',  'backward', '-180', 'backward', '-180'),
       ('koltp', 'up-button',    'forward',   '180', 'forward',  '0'),
       ('koltp', 'down-button',  'backward', '-180', 'forward',  '-180'),
       ('koltp', 'right-button', 'right', '90', 'left',  '-90'),
       ('koltp', 'right-button', 'right',   '90', 'forward',  '0'),
       ('koltp', 'left-button',  'left', '-90', 'left',  '-90'),
       ('koltp', 'left-button',  'left', '-90', 'backward',  '-180');

--  mysql --host=127.0.0.1 --port=3306 --user=root --password=root