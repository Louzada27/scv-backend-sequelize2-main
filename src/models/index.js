import { Sequelize } from 'sequelize';
import { databaseConfig } from '../config/database-config.js';

import Bairro from './Bairro.js';
import Endereco from './Endereco.js';
import Pessoa from './Pessoa.js';
import Cliente from './Cliente.js';
import Colaborador from './Colaborador.js';
import Cargo from './Cargo.js';
import Material from './Material.js';
import PedidoColeta from './PedidoColeta.js';
import RecebimentoMaterial from './RecebimentoMaterial.js';
import EnvioMaterial from './EnvioMaterial.js';
import Terceirizada from './Terceirizada.js';

const sequelize = new Sequelize(databaseConfig);

// Initialize models
Bairro(sequelize);
Endereco(sequelize);
Pessoa(sequelize);
Cliente(sequelize);
Colaborador(sequelize);
Cargo(sequelize);
Material(sequelize);
PedidoColeta(sequelize);
RecebimentoMaterial(sequelize);
EnvioMaterial(sequelize);
Terceirizada(sequelize);

// Set up associations
Object.values(sequelize.models).forEach(model => {
    if (model.associate) {
        model.associate(sequelize.models);
    }
});

export { sequelize };
export const models = sequelize.models;