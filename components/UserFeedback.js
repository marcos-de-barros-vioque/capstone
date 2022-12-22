import {useEffect, useState} from "react";

export default function UserFeedback({text, onClose}) {
  const [userFeedback, setUserFeedback] = useState(true);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setUserFeedback(false);
      onClose?.();
    }, 3000);

    return () => clearTimeout(timeoutID);
  }, [onClose]);

  return userFeedback ? <h3>{text}</h3> : null;
}
