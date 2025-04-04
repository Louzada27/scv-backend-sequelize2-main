import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
    class Terceirizada extends Model {
        static associate(models) {
            this.hasMany(models.EnvioMaterial, {
                foreignKey: 'cnpj',
                as: 'envios'
            });
        }
    }

    Terceirizada.init({
        cnpj: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        horarioDeFuncionamento: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Terceirizada',
        tableName: 'terceirizadas'
    });

    return Terceirizada;
};