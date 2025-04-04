import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
    class Cargo extends Model {
        static associate(models) {
            this.hasMany(models.Colaborador, {
                foreignKey: 'idCargo',
                as: 'colaboradores'
            });
        }
    }

    Cargo.init({
        idCargo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomeCargo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        hierarquia: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        salario: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Cargo',
        tableName: 'cargos'
    });

    return Cargo;
};