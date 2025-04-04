import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
    class Colaborador extends Model {
        static associate(models) {
            this.belongsTo(models.Pessoa, {
                foreignKey: 'cpf',
                as: 'pessoa'
            });
            this.belongsTo(models.Cargo, {
                foreignKey: 'idCargo',
                as: 'cargoInfo'
            });
        }
    }

    Colaborador.init({
        cpf: {
            type: DataTypes.STRING,
            primaryKey: true,
            references: {
                model: 'pessoas',
                key: 'cpf'
            }
        },
        dataAdmissao: {
            type: DataTypes.DATE,
            allowNull: false
        },
        carga_horaria: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nacionalidade: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cargo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        idCargo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'cargos',
                key: 'idCargo'
            }
        }
    }, {
        sequelize,
        modelName: 'Colaborador',
        tableName: 'colaboradores'
    });

    return Colaborador;
};