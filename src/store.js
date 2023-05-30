import Vuex from 'vuex';

export default new Vuex.Store({
    state: {
        titulo: 'Emergências médicas',
        equipe: {
            enfermeiros: 'Nome enfermeiro',
            socorristas: 'Nome do socorrista',
            medico: 'Nome do médico',
            ambulancia: 'Placa da ambulância',
            telefone: '+55 (11) 9 9999-9999',
            kitMedico: 'Kit 001'
        },
        enfermeiros: [
            { id: 1, nome: 'João', escala: '12x36' },
            { id: 2, nome: 'Maria', escala: '12x36' },
            { id: 3, nome: 'Ana', escala: '24x48' },
            { id: 4, nome: 'José', escala: '24x48' },
            { id: 5, nome: 'Danillo', escala: '12x36' }
        ],
        socorristas: [
            { id: 1, nome: 'Marcos', turno: 'manhã' },
            { id: 2, nome: 'Felipe', turno: 'tarde' },
            { id: 3, nome: 'Cláudia', turno: 'tarde' },
            { id: 4, nome: 'Michele', turno: 'noite' }
        ],
        medicos: [
            { id: 1, nome: 'André', escala: '12x36' },
            { id: 2, nome: 'Roberta', escala: '12x36' },
            { id: 3, nome: 'Carlos', escala: '24x48' },
            { id: 4, nome: 'Juliana', escala: '24x48' }
        ],
        equipamentos: {
            ambulancias: [
                { id: 1, placa: 'ABC-0000' },
                { id: 2, placa: 'BRA1A11' },
                { id: 3, placa: 'CBA-1111' },
                { id: 4, placa: 'ARB2B22' }
            ],
            telefones: [
                { id: 1, telefone: '+55 11 98888-8888' },
                { id: 2, telefone: '+55 11 97777-7777' },
                { id: 3, telefone: '+55 11 96666-6666' },
                { id: 4, telefone: '+55 11 95555-5555' }
            ],
            kitsMedicos: [
                { id: 1, kit: 'K0001' },
                { id: 2, kit: 'K0002' },
                { id: 3, kit: 'K0003' },
                { id: 4, kit: 'K0004' }
            ]
        }
    },
    getters: {
        totalEnfermeiros(state) {
            return state.enfermeiros.length;
        },
        filtroSocorristaTurno(state) {
            return state.socorristas.filter(turnoSocorrista => turnoSocorrista.turno === 'tarde')
        },
        totalMedicos(state) {
            return state.medicos.length;
        },
    }
})