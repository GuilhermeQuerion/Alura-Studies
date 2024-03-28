import React from "react";
import style from'./Botao.module.scss'

class Botao extends React.Component<any,{
    type? : "button" | "submit" | undefined;
    onClick? : () => void;
}> {
    render() {
        const {type = 'button', onClick} = this.props;
        return(
            <button onClick={onClick} type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;