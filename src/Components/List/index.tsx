import { ITarefa } from '../../types/tarefas';
import Item from './Item';
import style from './List.module.scss';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function List({tarefas, selecionaTarefa}: Props) {

    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map(item => (
                 <Item
                    key={item.id}
                    {...item}
                    selecionaTarefa={selecionaTarefa}
                 />
                ))}
            </ul>
        </aside>
    )
}