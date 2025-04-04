import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
    class RecebimentoMaterial extends Model {
        static associate(models) {
            this.belongsTo(models.Material, {
                foreignKey: 'idMaterial',
                as: 'material'
            });
        }
    }

    RecebimentoMaterial.init({
        idRecebimento: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        peso: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        volume: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        idMaterial: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'materiais',
                key: 'idMaterial'
            }
        }
    }, {
        sequelize,
        modelName: 'RecebimentoMaterial',
        tableName: 'recebimentos_material'
    });

    return RecebimentoMaterial;
};