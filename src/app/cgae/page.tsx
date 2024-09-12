export default function Cgae() {
  return (
    <div className="flex flex-col flex-1 w-5/6 py-6 space-y-10">
      <div className="flex flex-col space-y-2">

        <h1 className="text-lg font-bold">Cap 1 - Introdução</h1>
        <ul className="list-disc">
          <li className="ml-4">O objeto da contabilidade é o Patrimônio.</li>
          <li className="ml-4">Campo de atuação da contabilidade é a azienda.</li>
          <li className="ml-4">Entendemos por azienda o patrimônio juntamente com a pessoa que tem sobre ele poderes de administração e disponibilidade.</li>
          <li className="ml-4">Lei 6.404/76, art. 176 regulamenta as demonstrações exigidas pela <b>LEGISLAÇÃO COMERCIAL</b>.</li>
          <li className="ml-4">São essas demonstrações:
            <ul>
              <li>1. Balanço Patrimonial</li>
              <li>2. DLPA</li>
              <li>3. DRE</li>
              <li>4. DFC <cite>(Lei 11.638 de 2007)</cite></li>
              <li>5. DVA <cite>(Se for companhia aberta; Lei 11.638 de 2007)</cite></li>
            </ul>
          </li>
          <li className="ml-4">Demonstrações contábeis de acordo com o item 10 da NBC TG 26
            <ul>
              <li>1. Balanço Patrimonial</li>
              <li>2. DRE</li>
              <li>3. DRA</li>
              <li>4. DMPL</li>
              <li>5. DFC</li>
              <li>6. DVA</li>
              <li>7. Notas explicativas</li>
              <li>8. DPFI</li>
            </ul>
          </li>
          <li className="ml-4">A contabilidade tem como <b>função econômica</b> apurar lucro ou prejuízo.</li>
          <li className="ml-4"><b>Técnicas Contábeis</b>: Auditoria, Escrituração, Análise de Balanços e Demonstrações.</li>
          <li className="ml-4">A contabilidade tem por <b>finalidade</b> fornecer informações econômicas e financeiras acerca da entidade correspondente.</li>
          <li className="ml-4">A contabilidade <b>registra, classifica, sintetiza, controla e orienta</b>.</li>
        </ul>
      </div>

      <div className="flex flex-col space-y-2">
        <h1 className="text-lg font-bold">Cap 2 - Patrimônio e Resultado</h1>
        <ul className="list-disc">
          <li className="ml-4">ATIVO = BENS + DIREITOS</li>
          <li className="ml-4">PATRIMÔNIO LÍQUIDO = BENS + DIREITOS - OBRIGAÇÕES | PL = ATIVO - PASSIVO (Exigível)</li>
          <li className="ml-4"><b>Equação Fundamental do Patrimônio</b>: BENS + DIREITOS = OBRIGAÇÕES + PL | ATIVO = PASSIVO (exigível) + PL</li>
          <li className="ml-4"><b>Bens</b>: Sob a ótica da contabilidade são itens tangíveis e intangíveis quantificáveis em dinheiro e que integrarão o patrimônio da entidade para utilização imediata. São a parte da riqueza de uma entidade que a ela pertence e que está em seu poder.</li>
          <li className="ml-4"><b>Direitos</b>: a parte da riqueza da entidade que a ela pertence, mas que está em poder de terceiros. Não está disponível para utilização imediata.</li>
          <li className="ml-4"><b>Créditos de funcionamento</b>: obtidos em função da atividade operacional da empresa. <cite>Ex: vendas a prazo para clientes</cite></li>
          <li className="ml-4"><b>Créditos de financiamento</b>: obtidos em função das operações financeiras da empresa. <cite>Ex: Empréstimos a terceiros.</cite></li>
          <li className="ml-4"><b>Obrigações</b>: Débitos ou Dívidas da Entidade. direitos de terceiros em poder da entidade.</li>
          <li className="ml-4"><b>Débitos de funcionamento</b>: obrigações decorrentes da atividade operacional da entidade. <cite>Ex: débito com fornecedores.</cite></li>
          <li className="ml-4"><b>Débitos de financiamento</b>: obigações decorrentes das operações de financiamento da entidade. <cite>Ex: débitos com empréstimos contraídos.</cite></li>
          <li className="ml-4 text-purple-800"><b>Débito</b> é um termo mais genérico para todas as obrigações da empresa. <b>Dívidas</b> são um tipo de débito mais formal, geralmente relacionados a empréstimos ou financiamentos, mais estruturados, com prazos e outras condições contratuais.</li>
          <li className="ml-4"><p>Ingresso de recursos patrimoniais</p> independem da atividade principal da empresa. <cite>Ex: Capital dos Sócios, empréstimos e adiantamento de clientes, desinvestimentos.</cite></li>
          <li className="ml-4"><b>Saída de recurso patrimonial</b> são saídas que <b>independem</b> da atividade principal da empresa.</li>
          <li className="ml-4"><b>Saída de recursos do resultado</b> são saídas que <b>dependem</b> da atividade principal da empresa.</li>
          <li className="ml-4"><b>Gasto</b>: geração da obrigação. Entrega ou promessa de entrega de um ativo. <cite>Ex: adquirir um serviço mesmo não pagando na hora.</cite></li>
          <li className="ml-4"><b>Desembolso</b>: efetivo pagamento por um bem ou serviço. Pode ocorrer durante ou após o gasto.</li>
          <li className="ml-4"></li>
          <li className="ml-4"></li>
        </ul>
      </div>
    </div>
  )
}