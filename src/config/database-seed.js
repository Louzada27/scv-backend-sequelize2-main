import { sequelize, models } from '../models/index.js';

const seedDatabase = async() => {
    try {
        // Desabilitar foreign keys
        await sequelize.query('PRAGMA foreign_keys = OFF;');

        // Criar 4 bairros
        const bairros = await Promise.all([
            models.Bairro.create({
                nome: 'Texeira leite',
                distancia_sede: 5,
                qnt_pessoas_cadastradas: 0,
                estado_de_acesso: 'Bom'
            }),
            models.Bairro.create({
                nome: 'Zumbi',
                distancia_sede: 8,
                qnt_pessoas_cadastradas: 0,
                estado_de_acesso: 'Dificil'
            }),
            models.Bairro.create({
                nome: 'Valão',
                distancia_sede: 12,
                qnt_pessoas_cadastradas: 0,
                estado_de_acesso: 'Ruim'
            }),
            models.Bairro.create({
                nome: 'Aeroporto',
                distancia_sede: 15,
                qnt_pessoas_cadastradas: 0,
                estado_de_acesso: 'Bom'
            })
        ]);

        // Criar 4 endereços
        const enderecos = await Promise.all([
            models.Endereco.create({
                numero: 123,
                rua: 'Dos bobos',
                referencia: 'Próximo ao Mercado',
                cep: '12345-678',
                id_bairro: bairros[0].id_bairro
            }),
            models.Endereco.create({
                numero: 456,
                rua: 'Rua dos pelicanos',
                referencia: 'Em frente à Escola',
                cep: '87654-321',
                id_bairro: bairros[1].id_bairro
            }),
            models.Endereco.create({
                numero: 789,
                rua: 'Rua dos padeiros',
                referencia: 'Próximo ao Parque',
                cep: '98765-432',
                id_bairro: bairros[2].id_bairro
            }),
            models.Endereco.create({
                numero: 101,
                rua: 'Rua dos pelicanos',
                referencia: 'Próximo ao Shopping',
                cep: '45678-901',
                id_bairro: bairros[3].id_bairro
            })
        ]);

        // Criar 4 cargos
        const cargos = await Promise.all([
            models.Cargo.create({
                nomeCargo: 'Gerente',
                descricao: 'Gereciar',
                hierarquia: 1,
                salario: 5000.00
            }),
            models.Cargo.create({
                nomeCargo: 'Pedreiro',
                descricao: 'reparos',
                hierarquia: 2,
                salario: 6000.00
            }),
            models.Cargo.create({
                nomeCargo: 'Motorista',
                descricao: 'entrega',
                hierarquia: 3,
                salario: 7000.00
            }),
            models.Cargo.create({
                nomeCargo: 'Auxiliar',
                descricao: 'auxiliar',
                hierarquia: 4,
                salario: 8000.00
            })
        ]);

        // Criar 4 pessoas
        const pessoas = await Promise.all([
            models.Pessoa.create({
                cpf: '111.111.111-11',
                nome: 'Jose Mourinho',
                email: 'josemourinho@email.com',
                telefone: '(11) 11111-1111',
                sexo: 'M'
            }),
            models.Pessoa.create({
                cpf: '222.222.222-22',
                nome: 'Pepe guardiola',
                email: 'pepeg@email.com',
                telefone: '(22) 22222-2222',
                sexo: 'M'
            }),
            models.Pessoa.create({
                cpf: '333.333.333-33',
                nome: 'Ancelotti',
                email: 'ancelotti@email.com',
                telefone: '(33) 33333-3333',
                sexo: 'M'
            }),
            models.Pessoa.create({
                cpf: '444.444.444-44',
                nome: 'Zidane',
                email: 'zidane@email.com',
                telefone: '(44) 44444-4444',
                sexo: 'M'
            })
        ]);

        // Criar 4 clientes
        const clientes = await Promise.all([
            models.Cliente.create({
                cpf: pessoas[0].cpf,
                turno_preferido_de_coleta: 'Manhã',
                status_cliente: 'Ativo',
                frequencia_de_pedidos: 'Semanal',
                id_endereco: enderecos[0].id_automatico
            }),
            models.Cliente.create({
                cpf: pessoas[1].cpf,
                turno_preferido_de_coleta: 'Tarde',
                status_cliente: 'Ativo',
                frequencia_de_pedidos: 'Quinzenal',
                id_endereco: enderecos[1].id_automatico
            }),
            models.Cliente.create({
                cpf: pessoas[2].cpf,
                turno_preferido_de_coleta: 'Noite',
                status_cliente: 'Ativo',
                frequencia_de_pedidos: 'Mensal',
                id_endereco: enderecos[2].id_automatico
            }),
            models.Cliente.create({
                cpf: pessoas[3].cpf,
                turno_preferido_de_coleta: 'Manhã',
                status_cliente: 'Ativo',
                frequencia_de_pedidos: 'Semanal',
                id_endereco: enderecos[3].id_automatico
            })
        ]);

        // Criar 4 materiais
        const materiais = await Promise.all([
            models.Material.create({
                nome: 'Plástico PET',
                descricao: 'Garrafas de plástico PET',
                preco_por_kg: 2.50,
                quantidade_estoque: 1000,
                unidade_medida: 'kg',
                peso: 1.0,
                volume: 0.5,
                nivelDeRisco: 'Baixo'
            }),
            models.Material.create({
                nome: 'Vidro',
                descricao: 'Garrafas de vidro',
                preco_por_kg: 3.50,
                quantidade_estoque: 2000,
                unidade_medida: 'kg',
                peso: 2.0,
                volume: 1.0,
                nivelDeRisco: 'Médio'
            }),
            models.Material.create({
                nome: 'Papel',
                descricao: 'Papel',
                preco_por_kg: 4.50,
                quantidade_estoque: 3000,
                unidade_medida: 'kg',
                peso: 0.5,
                volume: 0.2,
                nivelDeRisco: 'Baixo'
            }),
            models.Material.create({
                nome: 'Alumínio',
                descricao: 'Alumínio',
                preco_por_kg: 5.50,
                quantidade_estoque: 4000,
                unidade_medida: 'kg',
                peso: 1.5,
                volume: 0.3,
                nivelDeRisco: 'Baixo'
            })
        ]);

        // Criar 4 pedidos de coleta
        const pedidosColeta = await Promise.all([
            models.PedidoColeta.create({
                data_pedido: new Date(),
                status: 'Pendente',
                observacoes: 'Pedido 1',
                id_cliente: clientes[0].id_cliente,
                tipo: 'Reciclável',
                peso: 10.5,
                volume: 2.0,
                idMaterial: materiais[0].idMaterial
            }),
            models.PedidoColeta.create({
                data_pedido: new Date(),
                status: 'Pendente',
                observacoes: 'Pedido 2',
                id_cliente: clientes[1].id_cliente,
                tipo: 'Reciclável',
                peso: 15.0,
                volume: 3.0,
                idMaterial: materiais[1].idMaterial
            }),
            models.PedidoColeta.create({
                data_pedido: new Date(),
                status: 'Pendente',
                observacoes: 'Pedido 3',
                id_cliente: clientes[2].id_cliente,
                tipo: 'Reciclável',
                peso: 20.0,
                volume: 4.0,
                idMaterial: materiais[2].idMaterial
            }),
            models.PedidoColeta.create({
                data_pedido: new Date(),
                status: 'Pendente',
                observacoes: 'Pedido 4',
                id_cliente: clientes[3].id_cliente,
                tipo: 'Reciclável',
                peso: 25.0,
                volume: 5.0,
                idMaterial: materiais[3].idMaterial
            })
        ]);

        // Criar 4 terceirizadas
        const terceirizadas = await Promise.all([
            models.Terceirizada.create({
                cnpj: '11.111.111/0001-11',
                nome: 'Recicla Mais',
                telefone: '(11) 1111-1111',
                email: 'reciclamais@email.com',
                horarioDeFuncionamento: 8
            }),
            models.Terceirizada.create({
                cnpj: '22.222.222/0001-22',
                nome: 'Eco Reciclagem',
                telefone: '(22) 2222-2222',
                email: 'ecoreciclagem@email.com',
                horarioDeFuncionamento: 8
            }),
            models.Terceirizada.create({
                cnpj: '33.333.333/0001-33',
                nome: 'Verde Vida',
                telefone: '(33) 3333-3333',
                email: 'verdevida@email.com',
                horarioDeFuncionamento: 8
            }),
            models.Terceirizada.create({
                cnpj: '44.444.444/0001-44',
                nome: 'Sustentável',
                telefone: '(44) 4444-4444',
                email: 'sustentavel@email.com',
                horarioDeFuncionamento: 8
            })
        ]);

        // Criar 4 recebimentos de material
        const recebimentos = await Promise.all([
            models.RecebimentoMaterial.create({
                idRecebimento: 'REC001',
                peso: 50.0,
                volume: 10.0,
                idMaterial: materiais[0].idMaterial
            }),
            models.RecebimentoMaterial.create({
                idRecebimento: 'REC002',
                peso: 75.0,
                volume: 15.0,
                idMaterial: materiais[1].idMaterial
            }),
            models.RecebimentoMaterial.create({
                idRecebimento: 'REC003',
                peso: 100.0,
                volume: 20.0,
                idMaterial: materiais[2].idMaterial
            }),
            models.RecebimentoMaterial.create({
                idRecebimento: 'REC004',
                peso: 125.0,
                volume: 25.0,
                idMaterial: materiais[3].idMaterial
            })
        ]);

        // Criar 4 envios de material
        const enviosMaterial = await Promise.all([
            models.EnvioMaterial.create({
                data_envio: new Date(),
                status: 'Pendente',
                observacoes: 'Envio 1',
                id_pedido_coleta: pedidosColeta[0].idPedido,
                cnpj: terceirizadas[0].cnpj,
                idMaterial: materiais[0].idMaterial
            }),
            models.EnvioMaterial.create({
                data_envio: new Date(),
                status: 'Pendente',
                observacoes: 'Envio 2',
                id_pedido_coleta: pedidosColeta[1].idPedido,
                cnpj: terceirizadas[1].cnpj,
                idMaterial: materiais[1].idMaterial
            }),
            models.EnvioMaterial.create({
                data_envio: new Date(),
                status: 'Pendente',
                observacoes: 'Envio 3',
                id_pedido_coleta: pedidosColeta[2].idPedido,
                cnpj: terceirizadas[2].cnpj,
                idMaterial: materiais[2].idMaterial
            }),
            models.EnvioMaterial.create({
                data_envio: new Date(),
                status: 'Pendente',
                observacoes: 'Envio 4',
                id_pedido_coleta: pedidosColeta[3].idPedido,
                cnpj: terceirizadas[3].cnpj,
                idMaterial: materiais[3].idMaterial
            })
        ]);

        // Criar 4 colaboradores
        const colaboradores = await Promise.all([
            models.Colaborador.create({
                cpf: pessoas[0].cpf,
                dataAdmissao: new Date(),
                carga_horaria: 40,
                nacionalidade: 'Brasileiro',
                cargo: 'Gerente',
                idCargo: cargos[0].idCargo
            }),
            models.Colaborador.create({
                cpf: pessoas[1].cpf,
                dataAdmissao: new Date(),
                carga_horaria: 40,
                nacionalidade: 'Brasileiro',
                cargo: 'Motorista',
                idCargo: cargos[1].idCargo
            }),
            models.Colaborador.create({
                cpf: pessoas[2].cpf,
                dataAdmissao: new Date(),
                carga_horaria: 40,
                nacionalidade: 'Brasileiro',
                cargo: 'Coletor',
                idCargo: cargos[2].idCargo
            }),
            models.Colaborador.create({
                cpf: pessoas[3].cpf,
                dataAdmissao: new Date(),
                carga_horaria: 40,
                nacionalidade: 'Brasileiro',
                cargo: 'Auxiliar',
                idCargo: cargos[3].idCargo
            })
        ]);

    } catch (error) {
        console.error('Erro ao inserir dados:', error);
    } finally {
        // Reabilitar foreign keys
        await sequelize.query('PRAGMA foreign_keys = ON;');
    }
};

export default seedDatabase;