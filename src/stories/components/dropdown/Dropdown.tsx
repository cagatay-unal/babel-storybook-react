import React, {
  MouseEventHandler,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faChevronDown,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import "./dropdown.css";

const useOnClickOutSide = (
    ref: RefObject<HTMLDivElement>,
    handler: MouseEventHandler<HTMLButtonElement>
) => {
    useEffect(() => {
        const listener = (event: any) => {
            if(!ref.current || ref.current.contains(event.target)){
                return;
            }
            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        }
    }, [ ref, handler ]);
}

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutSide(ref, () => setIsOpen(false));

  return (
    <div ref={ref} className={`dropdown ${isOpen ? "active" : ""}`}>
      <button onClick={() => { setIsOpen(!isOpen); }} >
        <span><FontAwesomeIcon icon={faUser} /></span>
        <span>Dropdown</span>
        <span>{isOpen ? (<FontAwesomeIcon icon={faClose} /> ) : (<FontAwesomeIcon icon={faChevronDown} />)}</span>
      </button>
      <div className="menu">
        <button>
          <span>
            <FontAwesomeIcon icon={faUser} />
          </span>
          <span>Option-1</span>
        </button>
        <button>
          <span>
            <FontAwesomeIcon icon={faUser} />
          </span>
          <span>Option-2</span>
        </button>
      </div>
    </div>
  );
};
