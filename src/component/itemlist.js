import React, { useState } from 'react';
import SelectableItem from './items';
import '../css/itemlist.css';
import humanrights from "../picture/humanrights.png"
import who from "../picture/who.jpeg"
import charter from "../picture/charter.jpeg"
import securityconsil from "../picture/securityconcil.jpeg"
import escosc from "../picture/Ecosoc.png"
import law from "../picture/international_law.jpeg"
import icj from "../picture/icj.png"
import member from "../picture/membersun.jpeg"
import general from "../picture/general_assmbly.png"

const ItemList = () => {
    const items = [
        { id: 1, name: 'Security Concil', image: securityconsil },
        { id: 2, name: 'World Health Organization', image: who },
        { id: 3, name: 'United Nations Charter', image: charter },
        { id: 4, name: 'International Court of Justice', image: icj },
        { id: 5, name: 'Members of UN', image: member },
        { id: 6, name: 'Economic and Social Council', image: escosc },
        { id: 7, name: 'Rules of general assembly ', image: general },
        { id: 8, name: 'human Rights', image: humanrights },
        { id: 9, name: 'International Law', image: law },
    ];

    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleHover = (id) => {
        setSelectedItemId(id);
    };

    return (
        <div className="container item-list">
            <div className="row mb-4">
                <div className="col-12">
                    <h2>Explore Our Chatbots: Select a Chatbot and Ask Your Query with United Nations Expertise</h2>
                </div>
            </div>
            <div className="row justify-content-center">
                {items.slice(0, 5).map((item) => (
                    <div key={item.id} className="col-6 col-md-4 col-lg-2 p-3">
                        <SelectableItem
                            item={item}
                            onHover={handleHover}
                            isSelected={selectedItemId === item.id}
                        />
                    </div>
                ))}
            </div>
            <div className="row justify-content-center">
                {items.slice(5).map((item) => (
                    <div key={item.id} className="col-6 col-md-4 col-lg-2 p-5">
                        <SelectableItem
                            item={item}
                            onHover={handleHover}
                            isSelected={selectedItemId === item.id}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemList;
