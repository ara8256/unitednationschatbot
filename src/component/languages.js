import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LanguageDropdown = ({ onSelectLanguage }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('Select Language');

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const handleSelect = (language) => {
        setSelectedLanguage(language.label);
        onSelectLanguage(language.value);
    };

    const languages = [
        { label: 'English', value: 'en' },
        { label: 'Spanish', value: 'es' },
        { label: 'French', value: 'fr' },
        { label: 'German', value: 'de' },
        { label: 'Urdu', value: 'ur' }
    ];

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                {selectedLanguage}
            </DropdownToggle>
            <DropdownMenu>
                {languages.map(language => (
                    <DropdownItem key={language.value} onClick={() => handleSelect(language)}>
                        {language.label}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};

export default LanguageDropdown;