import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
    class Material extends Model {
        static associate(models) {
            this.hasMany(models.PedidoColeta, {
                foreignKey: 'idMaterial',
                as: 'pedidosColeta'
            });
            this.hasMany(models.RecebimentoMaterial, {
                foreignKey: 'idMaterial',
                as: 'recebimentos'
            });
            this.hasMany(models.EnvioMaterial, {
                foreignKey: 'idMaterial',
                as: 'envios'
            });
        }
    }

    Material.init({
        idMaterial: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        peso: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        volume: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nivelDeRisco: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Material',
        tableName: 'materiais'
    });

    return Material;
};