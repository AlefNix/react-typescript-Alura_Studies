import Form from '../Form';
import List from '../List';
import style from './App.module.scss';
import Cronometro from '../Cronometro';
import { useState } from 'react';
import { ITarefa } from '../../types/tarefas';

function App() {

  const [tarefas, setNovaTarefa] = useState<ITarefa[]>([]);

  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setNovaTarefa(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({...tarefa, selecionado: tarefa.id === tarefaSelecionada.id ? true : false})));
  }

  function finalizarTarefa() {
    if(selecionado) {
      setSelecionado(undefined);
      setNovaTarefa(tarefasAnteriores => tarefasAnteriores.map(tarefa => 
        {
          if(tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true
            }
          }
          return tarefa
        }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setNovaTarefa={setNovaTarefa}/>
      <List 
        tarefas={tarefas} 
        selecionaTarefa={selecionaTarefa}
      />
        <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa}/>
    </div>
  );
}

export default App;
