import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
    class Bairro extends Model {
        static associate(models) {
            this.hasMany(models.Endereco, {
                foreignKey: 'id_bairro',
                as: 'enderecos'
            });
        }
    }

    Bairro.init({
        id_bairro: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id_bairro'
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            field: 'nome'
        },
        distancia_sede: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'distancia_sede'
        },
        qnt_pessoas_cadastradas: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            field: 'qnt_pessoas_cadastradas'
        },
        estado_de_acesso: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'estado_de_acesso'
        }
    }, {
        sequelize,
        modelName: 'Bairro',
        tableName: 'bairros',
        underscored: true
    });

    return Bairro;
};