import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
    class EnvioMaterial extends Model {
        static associate(models) {
            this.belongsTo(models.Material, {
                foreignKey: 'idMaterial',
                as: 'material'
            });
            this.belongsTo(models.Terceirizada, {
                foreignKey: 'cnpj',
                as: 'terceirizada'
            });
        }
    }

    EnvioMaterial.init({
        idEnvio: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idMaterial: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'materiais',
                key: 'idMaterial'
            }
        },
        cnpj: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'terceirizadas',
                key: 'cnpj'
            }
        }
    }, {
        sequelize,
        modelName: 'EnvioMaterial',
        tableName: 'envios_material'
    });

    return EnvioMaterial;
};