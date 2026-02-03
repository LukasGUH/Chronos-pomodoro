import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { Heading } from "../../components/Heading/intex";
import { MainTemplate } from "../../templates/MainTemplate";


export function AboutPomodoro() {
    return (
        <MainTemplate>
            <Container>
                <GenericHtml>
                    <Heading>A Técnica Pomodoro 🍅</Heading>
                    <p>
                        A Técnica Pomodoro é uma metodologia de produtividade criada por{' '}
                        <strong>Francesco Cirillo</strong>, que consiste em dividir o
                        trabalho em blocos de tempo (os famosos "Pomodoros") intercalados
                        com pausas. O objetivo é manter o foco total por um período curto e
                        garantir descansos para evitar o cansaço mental.
                    </p>

                    <img src='https://placehold.co/1920x1080' alt='' />

                    <h2>Como funciona o Pomodoro tradicional?</h2>
                    <ul>
                        <li>
                        <strong>1. Defina uma tarefa</strong> que você deseja realizar.
                        </li>
                        <li>
                        <strong>2. Trabalhe nela por 25 minutos</strong> sem interrupções.
                        </li>
                        <li>
                        <strong>3. Faça uma pausa curta de 5 minutos</strong>.
                        </li>
                        <li>
                        <strong>4. A cada 4 ciclos, faça uma pausa longa</strong>{' '}
                        (geralmente 15 a 30 minutos).
                        </li>
                    </ul>

                    <h2>
                        Mas no <strong>Chronos Pomodoro</strong> tem um diferencial 🚀
                    </h2>

                    <p>
                        Nosso app segue o conceito original, mas com algumas melhorias e
                        personalizações pra deixar o processo ainda mais eficiente:
                    </p>

                    <h3>⚙️ Personalização do tempo</h3>
                    <p>
                        Você pode configurar o tempo de foco, descanso curto e descanso
                        longo do jeito que quiser! Basta acessar a{' '}
                        <a href='/settings'>página de configurações</a> e ajustar os minutos
                        como preferir.
                    </p>

                    <h3>🔁 Ciclos organizados em sequência</h3>
                    <p>
                        A cada ciclo completado, uma nova task é adicionada automaticamente
                        ao seu histórico, e o app já sugere o próximo ciclo (foco ou
                        descanso).
                    </p>
                    <p>
                        <strong>Nosso padrão:</strong>
                    </p>
                    <ul>
                        <li>
                        Ciclos <strong>ímpares</strong>: Trabalho (foco).
                        </li>
                        <li>
                        Ciclos <strong>pares</strong>: Descanso curto.
                        </li>
                        <li>
                        Ciclo <strong>8</strong>: Descanso longo especial, pra resetar o
                        ciclo completo.
                        </li>
                    </ul>

                    <h3>🍅 Visualização dos ciclos</h3>
                    <p>
                        Logo abaixo do cronômetro, você verá bolinhas coloridas
                        representando os ciclos:
                    </p>
                    <ul>
                        <li>🟡 Amarelo: Ciclo de trabalho (foco).</li>
                        <li>🟢 Verde: Descanso curto.</li>
                        <li>🔵 Azul: Descanso longo (aparece a cada 8 ciclos).</li>
                    </ul>

                    <p>
                        Assim, você sempre sabe em que parte do processo está e o que vem a
                        seguir. Não precisa mais anotar no papel ou ficar calculando de
                        cabeça!
                    </p>

                    <h3>📊 Histórico automático</h3>
                    <p>
                        Todas as suas tarefas e ciclos concluídos ficam salvos no{' '}
                        <a href='/history'>histórico</a>, com status de completas ou
                        interrompidas. Assim, você consegue acompanhar sua evolução ao longo
                        do tempo.
                    </p>

                    <h2>Por que usar o Chronos Pomodoro?</h2>
                    <ul>
                        <li>✅ Organize seu foco com clareza.</li>
                        <li>✅ Trabalhe e descanse na medida certa.</li>
                        <li>✅ Personalize seus próprios ciclos e tempos.</li>
                        <li>✅ Acompanhe seu histórico automaticamente.</li>
                    </ul>

                    <p>
                        <strong>Pronto pra focar?</strong> Bora lá{' '}
                        <a href='/'>voltar para a página inicial</a> e iniciar seus
                        Pomodoros! 🍅🚀
                    </p>

                    <p>
                        <em>"Foco total, sem pressa, sem pausa, só vai!"</em> 💪🧘‍♂️
                    </p>
                </GenericHtml>
            </Container>
        </MainTemplate>

    )
}