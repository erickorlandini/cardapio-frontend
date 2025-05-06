import { useEffect, useRef, useState } from 'react';
import './settingsbar.css';

export function SettingsBar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleClickOutside = (event: MouseEvent) => {
      if(menuRef.current && !menuRef.current.contains(event.target as Node) && event.target !== document.querySelector('.settings-icon')) {
        setIsOpen(false);
      }
    }

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    }, [])

    return (
        <div className="settings-container">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="settings-icon"
                onClick={handleIsOpen}
                style={{
                  position: 'fixed',
                  top: '20px',
                  left: '20px',
                  zIndex: '1000',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s ease-in-out',
                }}
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>

            {isOpen && (
        <div className="settings-menu" ref={menuRef} style={{ zIndex: '999' }}>
          <ul>
            <li>Unidades</li>
            <li>Cadastro</li>
            <li>Contato</li>
            <li>Restaurantes</li>
          </ul>
        </div>
      )}
        </div>
    )
}