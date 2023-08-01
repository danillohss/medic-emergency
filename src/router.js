import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/components/Index.vue'
import ListaItens from '@/components/ListaItens.vue'
import Cadastrar from '@/components/Cadastrar.vue'
import CadastrarProfissionais from '@/components/CadastrarProfissional.vue'
import CadastrarEquipamento from '@/components/CadastrarEquipamento.vue'

const routes = [
    {
        path: '/',
        component: Index,
        children: [
            {
                path: 'profissionais/:tipo',
                name: 'profissionais',
                props: true,
                components: {
                    profissionais: ListaItens
                }
            },
            {
                path: 'equipamentos/:tipo',
                name: 'equipamentos',
                props: true,
                components: {
                    equipamentos: ListaItens
                }
            }
        ]
    },
    {
        path: '/cadastrar',
        component: Cadastrar,
        children: [
            {
                path: 'profissional',
                component: CadastrarProfissionais,
            },
            {
                path: 'equipamento',
                component: CadastrarEquipamento,
            },
        ],
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router