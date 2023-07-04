import  ReactDOM  from 'react-dom';
import classes from './Modal.module.css';
const Backdrop=(props)=>{
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}
const ModalOverlay=(props)=>{
    return <div className={classes.modaloverlay}>{props.children}</div>
}
const portalelement=document.getElementById('overlay');

export default function Modal(props){
    return <>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}></Backdrop>,portalelement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalelement)}
    </>
}