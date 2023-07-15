import React from 'react';
import style from './Button.module.scss';

class Button extends React.Component<{texto: string,
     tipo?: "button" | "submit" | "reset" | undefined,
     onClick?: () => void
    }> {  
    render() {
        const {tipo = "button", onClick} = this.props
        return (
            <button onClick={onClick} className={style.botao} type={tipo}>
                {this.props.texto}
            </button>
        )
    }
}

export default Button