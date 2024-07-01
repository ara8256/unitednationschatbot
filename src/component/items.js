import React from 'react';
import '../css/item.css';

const SelectableItem = ({ item, onClick }) => {
    return (
        <div
            className="selectable-item-container w-50 h-100"
            onClick={() => onClick(item.id)}
        >
            <div
                className="selectable-item"
                style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="item-name">{item.name}</div>
        </div>
    );
};

export default SelectableItem;
