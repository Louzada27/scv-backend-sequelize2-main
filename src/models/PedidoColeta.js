import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
    class PedidoColeta extends Model {
        static associate(models) {
            this.belongsTo(models.Material, {
                foreignKey: 'idMaterial',
                as: 'material'
            });
        }
    }

    PedidoColeta.init({
        idPedido: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false
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
        modelName: 'PedidoColeta',
        tableName: 'pedidos_coleta'
    });

    return PedidoColeta;
};