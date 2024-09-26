import React from 'react';

export const Hero = ({ name, img }) => (
    <div>
        <h2>Hero: {name}</h2>
        <img src={img} alt={name} />
    </div>
);

export const Enemy = ({ name, img }) => (
    <div>
        <h2>Enemy: {name}</h2>
        <img src={img} alt={name} />
    </div>
);

export const Arena = ({ children, arena }) => {
    return (
        <div>
            <h2>Arena: {arena}</h2>
            {React.Children.map(children, child => {
                return React.cloneElement(child);
            })}
        </div>
    );
};

export const World = ({ children }) => (
    <div>
        {children}
    </div>
);