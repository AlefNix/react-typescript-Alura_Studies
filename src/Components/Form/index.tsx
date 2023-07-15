import React from "react";
import Button from "../Button";
import style from './Form.module.scss';
import { ITarefa } from "../../types/tarefas";
import {v4 as uuidv4} from 'uuid';

class Form extends React.Component<{setNovaTarefa: React.Dispatch<React.SetStateAction<ITarefa[]>>}> {

    state = {
        tarefa: "",
        tempo: "00:00:00"
    }

    adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.props.setNovaTarefa(tarefasAntigas => [
            ...tarefasAntigas,
             {
                ...this.state,
                selecionado: false,
                completado: false,
                id: uuidv4()  
             }
            ]);
        this.setState({
            tarefa: "",
            tempo: "00:00:00"
        })
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você quer estudar"
                        value={this.state.tarefa}
                        onChange={event => this.setState({...this.state, tarefa: event.target.value})}
                        required
                        autoComplete="off"
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        value={this.state.tempo}
                        onChange={event => this.setState({...this.state, tempo: event.target.value})}
                        required
                    />
                </div>
                <Button texto="Adicionar" tipo="submit"/>
            </form>
        )
    }
}

export default Form