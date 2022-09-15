import React from 'react'
import './bouton.css';

// Création du typage pour les props du bouton
type BoutonProps = {
    titre: string;
    classe: string,
};

export const Bouton = ({ titre, classe }: BoutonProps) => {
    return (
        <>
            <button className={classe}>{titre}</button>
        </>
    )
}

export default Bouton;