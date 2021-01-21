
import Sequelize from 'sequelize';

const connection = new Sequelize('fas', 'postgres', '12345', {
  host: 'localhost',
  dialect: 'postgres',
  timezone: '-03:00'
});


export const sqlManagements = `select ges.id as management_id, 
ges.nome as management, 
ges.sigla as init_management,
col.nome as manager 
from gestao ges 
join colaborador col 
on ges.colaborador_id = col.id`;


export const sqlDestinations = `select l.id as locale_id, 
l.mascara as locale_descrition, 
l.unidadeconservacao_id,
l.tipo
from localidade l`;

export const sqlBudgets = ``;

export const sqlExpenses = `select l.id as expense_id,
l.data_emissao as expense_emit_data,
l.compra_id as expense_solic_id,
l.tipo as expense_type,
l.gestao_id as management_id,
l.localidade_id as locale_id,
loc.mascara as expense_locale_description,
la.id as expense_cc_id,
la.projetorubrica_id as project_line_id,
pl.datapagamento as payment_day,
pl.valor as price_value,
to_char(pl.valor, '9G999G990D99') as price_value,
l.statuscompra as status,
l.descricao as descricao
from lancamento l left outer join localidade loc on loc.id = l.localidade_id
left outer join lancamento_acao la on l.id = la.lancamento_id
join pagamento_lancamento pl on la.id = pl.lancamentoacao_id
where l.data_emissao >= '2020-01-01 00:00:00' 
and l.statuscompra in ('CONCLUIDO', 'N_INCIADO') order by l.data_emissao`;

export const sqlItems = `select ip.categoria as categoria, 
ip.descricaoproduto as produto, 
ip.unidade, ip.quantidade as quantidade, 
ip.valor_unitario_com_desconto as valor,
p.id as pedido_id,
p.data_emissao as data_emissao_pedido
from item_pedido ip join lancamento p on ip.pedido_id = p.id 
where p.data_emissao > '2020-01-01 00:00' `;

export default connection;