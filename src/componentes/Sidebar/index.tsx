import {PencilLine} from "@phosphor-icons/react";
import styles from "./index.module.css";
import { Avatar } from "../Avatar";

export function Siderbar() {
    return (
<aside className={styles.siderbar}>
<img 
className={styles.cover} 
src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=5"
 />
<div className={styles.profile}>
<Avatar src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=331&q=40" />
    <strong>Rubi Nobre</strong>
    <span>Vendedora</span>
</div>

<footer>
    <a href="#">
    <PencilLine size={20}/>
        Editar seu perfil
    </a>
</footer>
</aside>
    );
}