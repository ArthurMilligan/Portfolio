import React from "react";
import { FC } from "react";
import s from './panelButton.module.scss'

interface IPanelButtonProps {
    type:'close'|'collapse'
    onClick?:()=>void
}

const PanelButton:FC<IPanelButtonProps> = ({type}) => <div>
    <div className={`${s.panelButton} ${s[type]}`}></div>
</div>

export default PanelButton;