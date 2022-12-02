import { useState, useEffect } from "react";

export default function SpendingEntry({ onClose, text }) {
    const [showSpendingEntry, setShowSpendingEntry] = useState(true);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setShowSpendingEntry(false);
            onClose?.();
        }, 3000);

        return () => clearTimeout(timeoutID);
    }, [onClose]);

    return showSpendingEntry ? <p>{text}</p> : null;
}