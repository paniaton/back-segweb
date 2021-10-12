const db = require("./mySQLconnection")

const asd = `
        SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
        SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
        SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
        
        ALTER SCHEMA saw_db  DEFAULT CHARACTER SET utf8  DEFAULT COLLATE utf8_general_ci ;
        
        CREATE TABLE IF NOT EXISTS saw_db.usuario (
        id INT(11) NOT NULL AUTO_INCREMENT,
        nombre VARCHAR(16) NOT NULL,
        direccion VARCHAR(255) NULL DEFAULT NULL,
        password VARCHAR(255) NOT NULL,
        estado VARCHAR(255) NOT NULL DEFAULT "activo",
        fecha_creacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
        fecha_modificacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
        motivo VARCHAR(255) NULL DEFAULT NULL,
        admin tinyint(1) NOT NULL DEFAULT 0,
        mail VARCHAR(255) NULL DEFAULT NULL,
        cbu VARCHAR(255) NULL DEFAULT NULL,
        PRIMARY KEY (id))
        ENGINE = InnoDB
        DEFAULT CHARACTER SET = utf8;
        
        CREATE TABLE IF NOT EXISTS saw_db.publicacion (
        id INT(11) NOT NULL AUTO_INCREMENT,    
        nombre VARCHAR(16) NOT NULL,
        descripcion VARCHAR(255) NULL DEFAULT NULL,
        estado VARCHAR(32) NOT NULL DEFAULT "pendiente",
        fecha_creacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
        usuario_id INT(11) NOT NULL,
            PRIMARY KEY (id),
            KEY par_ind (usuario_id),
            CONSTRAINT child_ibfk_1 FOREIGN KEY (usuario_id)
            REFERENCES usuario (id) ON DELETE CASCADE
        ) 
        ENGINE = InnoDB
        DEFAULT CHARACTER SET = utf8;

        CREATE TABLE IF NOT EXISTS saw_db.sesion (
        id INT(11) NOT NULL AUTO_INCREMENT,    
        token VARCHAR(255) NOT NULL,
        PRIMARY KEY (id))
        ENGINE = InnoDB
        DEFAULT CHARACTER SET = utf8;
        
        SET SQL_MODE=@OLD_SQL_MODE;
        SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
        SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

        INSERT INTO saw_db.usuario (nombre, direccion, admin, password, mail, cbu) VALUES ('Nacho Scocco','AV evergreen 123', 1, '123456', 'admin@gmail.com', '243423434');
        INSERT INTO saw_db.usuario (nombre, direccion, password, mail, cbu) VALUES ('Enzo Perez','AV evergreen 123','123456', 'user@gmail.com', '243423434');
        INSERT INTO saw_db.publicacion (nombre, descripcion, estado, usuario_id) VALUES ('Pub 1','Pub 1','aprobada', 1);
        INSERT INTO saw_db.publicacion (nombre, descripcion, estado, usuario_id) VALUES ('Pub 2','Pub 2','aprobada', 1);
        INSERT INTO saw_db.publicacion (nombre, descripcion, estado, usuario_id) VALUES ('Pub 3','Pub 3','aprobada', 2);
        INSERT INTO saw_db.publicacion (nombre, descripcion, estado, usuario_id) VALUES ('asdasd','asdasd','pendiente', 2);
        `  

const createPubs = `
CREATE TABLE IF NOT EXISTS saw_db.publicacion (
    id INT(11) NOT NULL AUTO_INCREMENT,    
    nombre VARCHAR(16) NOT NULL,
    descripcion VARCHAR(255) NULL DEFAULT NULL,
    estado VARCHAR(32) NOT NULL DEFAULT "pendiente",
    fecha_creacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    usuario_id INT(11) NOT NULL,
        PRIMARY KEY (id),
        KEY par_ind (usuario_id),
        CONSTRAINT child_ibfk_1 FOREIGN KEY (usuario_id)
        REFERENCES usuario (id) ON DELETE CASCADE
    ) 
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8;
`

const createUser = `
CREATE TABLE IF NOT EXISTS saw_db.usuario (
id INT(11) NOT NULL AUTO_INCREMENT,
nombre VARCHAR(16) NOT NULL,
direccion VARCHAR(255) NULL DEFAULT NULL,
password VARCHAR(255) NOT NULL,
estado VARCHAR(255) NOT NULL DEFAULT "activo",
fecha_creacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
fecha_modificacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
motivo VARCHAR(255) NULL DEFAULT NULL,
admin tinyint(1) NOT NULL DEFAULT 0,
mail VARCHAR(255) NULL DEFAULT NULL,
cbu VARCHAR(255) NULL DEFAULT NULL,
PRIMARY KEY (id))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;
`
const createSesion = `
CREATE TABLE IF NOT EXISTS saw_db.sesion (
    id INT(11) NOT NULL AUTO_INCREMENT,    
    token VARCHAR(255) NOT NULL,
    admin tinyint(1) NOT NULL DEFAULT 0,
    PRIMARY KEY (id))
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8;
`

const admin = `INSERT INTO saw_db.usuario (nombre, direccion, admin, password, mail, cbu) VALUES ("Nacho Scocco",'AV evergreen 123', 1, '123456', 'admin@gmail.com', '243423434');`
const user = `INSERT INTO saw_db.usuario (nombre, direccion, password, mail, cbu) VALUES ('Enzo Perez','AV evergreen 123','123456', 'user@gmail.com', '243423434');`
const pub1 = `INSERT INTO saw_db.publicacion (nombre, descripcion, estado, usuario_id) VALUES ('Pub 1','Pub 1','aprobada', 1);`
const pub2 = `INSERT INTO saw_db.publicacion (nombre, descripcion, estado, usuario_id) VALUES ('Pub 2','Pub 2','aprobada', 1);`


exports.init = () => {
    setTimeout( () => {
        db.query(createUser);  
        db.query(createPubs);  
        db.query(createSesion);
    }, 20000);
    setTimeout( () => {
        db.query(admin);  
        db.query(user);  
        db.query(pub1);
        db.query(pub2);
    }, 25000);
};
